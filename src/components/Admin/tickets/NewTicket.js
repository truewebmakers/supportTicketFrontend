import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosBaseURL from "../../../AxiosConfig";
import { toast } from "react-toastify";

export default function NewTicket() {

  const [departmentList, setDepartmentList] = useState([]);
  const [departmentId, setDepartmentId] = useState("");
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState({});

  const [subject, setSubject] = useState("");

  const [query, setQuery] = useState("");
  const [file, setFile] = useState("");
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
    subject: subject,
    query: query,
    user_id: userinfo?.id,
    file:file, 
  };
 
  const OnSubmit = () => {
    setLoader(true);

    axiosBaseURL
      .post("tickets/store", formData)
      .then(function (response) {
        toast.success("Ticket added");  
        
        setLoader(false);
        navigate('/admin/ticket'); 
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
          <h5 className="mb-0">New Ticket</h5>
        </div>

        <form action="#" method="post">
          <div className="modal-body ">
            <div className="form-group py-2">
              <input
                name="subject"
                type="text"
                className="form-control"
                placeholder="Subject"
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="form-group py-2">
            <select name="department_id" id="department_id" className="form-control" onChange={(e) => setDepartmentId(e.target.value)}> 
                <option>Select Department</option>
                {departmentList.map((department, index) => (
                  <option key={index} value={department?.id}>{department?.name}</option>
                ))}

              </select>
            </div>
            <div className="form-group py-2">
              <textarea
                name="message"
                className="form-control"
                placeholder="Please detail your issue or question"
                style={{ height: 120 }}
                defaultValue={""}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="form-group py-2">
              <input type="file" name="attachment" />
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
