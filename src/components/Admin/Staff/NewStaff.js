import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosBaseURL from "../../../AxiosConfig";
import { toast } from "react-toastify";

export default function NewStaff() {

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [departmentId, setDepartmentId] = useState("");

   

  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState({});
  const [departmentList, setDepartmentList] = useState([]);
  const navigate = useNavigate(); 
  const [userinfo, setUserInfo] = useState(""); 
 
  useEffect(() => {
    const userinfo = JSON.parse(window.localStorage.getItem('userInfo')) ; 
    setUserInfo(userinfo);  
    getDepartmentList();
  }, []);

  const getDepartmentList = () => {
    axiosBaseURL
      .post("/department/list")
      .then((response) => {
        setDepartmentList(response.data.data);
        toast.success("List fetched");
      })
      .catch(() => {
        toast.error("There is some error");
      });
  };

  

  let formData = {
    fname: fname,
    lname: lname,
    email: email,
    phone:phone,
    password: password,
    cpassword: cpassword,
    user_type:'user',
    admin_id : userinfo?.id,
    department_id : departmentId
  };
 
  const OnSubmit = () => {
    setLoader(true);

    axiosBaseURL
      .post("register", formData)
      .then(function (response) {
        toast.success("User added");  
        
        setLoader(false);
        navigate('/admin/staff/list'); 
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
          <h5 className="mb-0">Add User</h5>
          <Link to={'/admin/department/new'} className="btn btn-info btn-sm float-end">Add Department</Link>
        </div>

        <form action="#" method="post">
        <div className="modal-body ">
            <div className="form-group py-2">
              <input name="fname"  type="text" className="form-control" onChange={(e) =>setFname(e.target.value)} placeholder="Jhon" />
            </div>

            <div className="form-group py-2">
              <input name="lname"  type="text" className="form-control"  onChange={(e) =>setLname(e.target.value)} placeholder="Smith" />
            </div>

            <div className="form-group py-2">
              <input name="phone"  type="text" className="form-control"  onChange={(e) =>setPhone(e.target.value)} placeholder="7897897897" />
            </div>

            <div className="form-group py-2">
              <input name="email"  type="email" className="form-control"   onChange={(e) =>setEmail(e.target.value)} placeholder="exam@example.com" />
            </div>

            <div className="form-group py-2">
              <input name="password"  type="password" className="form-control"  onChange={(e) =>setPassword(e.target.value)} placeholder="********" />
            </div>

            <div className="form-group py-2">
              <select name="department_id" id="department_id" className="form-control" onChange={(e) => setDepartmentId(e.target.value)}> 
                <option>Select Department</option>
                {departmentList.map((department, index) => (
                  <option value={department?.id}>{department?.name}</option>
                ))}

              </select>
           
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
