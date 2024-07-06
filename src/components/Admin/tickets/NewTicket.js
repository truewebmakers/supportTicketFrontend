import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosBaseURL from "../../../AxiosConfig";
import { toast } from "react-toastify";

export default function NewTicket() {

  const [departmentList, setDepartmentList] = useState([]);
  const [departmentId, setDepartmentId] = useState("");
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
              />
            </div>
            <div className="form-group py-2">
            <select name="department_id" id="department_id" className="form-control" onChange={(e) => setDepartmentId(e.target.value)}> 
                <option>Select Department</option>
                {departmentList.map((department, index) => (
                  <option value={department?.id}>{department?.name}</option>
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
              />
            </div>
            <div className="form-group py-2">
              <input type="file" name="attachment" />
            </div>
          </div>
          <div className="modal-footer"> 
            <button type="button" className="btn btn-primary pull-right">
              <i className="fa fa-pencil" /> Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
