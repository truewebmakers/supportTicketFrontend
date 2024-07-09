import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosBaseURL from '../../../AxiosConfig';
import { toast } from 'react-toastify';
export default function NewDepartment() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState(""); 
  const [userinfo, setUserInfo] = useState(""); 
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate(); 

  useEffect(() => {

    const userinfo = JSON.parse(window.localStorage.getItem('userInfo')) ; 
    setUserInfo(userinfo);  

  }, []);

  let formData = {
    name: name,
    description: description, 
    manager_id: 0,
    admin_id : userinfo?.id
  };
 

  const OnSubmit = () => {
    setLoader(true);

    axiosBaseURL
      .post("/department/store", formData)
      .then(function (response) {
        toast.success("Department added");  
        
        setLoader(false);
        navigate('/admin/department/list'); 
      })
      .catch(function (error) {
        if (error.response && error.response.status === 422) {
          setLoader(false);
          setErrors(error.response.data.error);
        } else {
          setLoader(false);
          toast.error(error.response.data.error);
          setErrors({});
        }
      });
  };

  return (
    <div className="container-fluid">
      <div className="card shadow border-0 mb-7">
        <div className="card-header">
          <h5 className="mb-0">Add Department</h5>
          <Link to={'/admin/department/list'} className="btn btn-info btn-sm float-end">List</Link>
        </div>

        <form action="#" method="post">
        <div className="modal-body ">
            <div className="form-group py-2">
              <input name="name"  type="text" className="form-control" onChange={(e) => setName(e.target.value)} placeholder="HR" />
            </div>

            <div className="form-group py-2">
              <input name="description"  type="text" className="form-control"  onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            </div> 
            
            </div>
          
          <div className="modal-footer">
            <button type="button" className="btn btn-primary pull-right" onClick={OnSubmit}>
            <i className="fa fa-pencil" />  {loader  && <span
                            className="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>}
                        {loader ? 'Creating...' : 'Create'}
             
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
