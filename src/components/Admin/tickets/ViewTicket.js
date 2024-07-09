import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axiosBaseURL from "../../../AxiosConfig";
import { toast } from "react-toastify";


export default function ViewTicket() {
  let { id } = useParams();
  const [subject, setSubject] = useState("");
  const [ticketdata, setTicketData] = useState({});
  const [ticketReply, setTicketReply] = useState({});
  const [departmentId, setDepartmentId] = useState("");
  const [userinfo, setUserInfo] = useState(""); 
  const [query, setQuery] = useState("");
  const [file, setFile] = useState("");

  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState({});

  let formData = {
    subject: subject,
    query: query,
    file: file,
  };
  useEffect(() => {
    const userinfo = JSON.parse(window.localStorage.getItem('userInfo')) ; 
    setUserInfo(userinfo);  
     getTicketandReplies(id);
  }, []);



  const getTicketandReplies = (id) => {
    axiosBaseURL
      .post("/tickets/view/"+id)
      .then((response) => {

        console.log(typeof response.data.data)
        
         setTicketData(response.data.data);
         setTicketReply(response.data.data.replies);
 
        toast.success("List fetched");
      })
      .catch(() => {
        toast.error("There is some error");
      });
  };

  console.log("res",ticketdata)
  const OnSubmit = () => {
    setLoader(true);

    axiosBaseURL
      .post("tickets/store", formData)
      .then(function (response) {
        toast.success("Ticket added");

        setLoader(false);
        navigate("/admin/ticket");
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
        {/* Add here Ticket Reply Listing */}
        {ticketdata && (
            <div  className="comment card shadow border-0 mb-7 py-4">
                <div className="comment-author-ava"></div>
                <div className="comment-body">
                    <h4 className="comment-text py-7">{ticketdata.subject}</h4>
                    <p className="comment-text ">"{ticketdata.query}"</p>
                    <div className="comment-footer mt-4"><span className="comment-meta">Jacob Hammond, Staff</span></div>
                </div>
                </div>
        )}
         {ticketdata.replies && ticketdata.replies.length > 0 && (
         
            <div className="comment ticket-replies card shadow border-0 mb-7 py-4">
                <div className="comment-author-ava"></div>
                <div className="comment-body">
                    <p className="comment-text py-7">Lorem ipsum   s nisi ut aliquip ex ea commodo consequat.</p>
                    <div className="comment-footer"><span className="comment-meta">Jacob Hammond, Staff</span></div>
                </div>
                </div>
        )}



      <div className="card shadow border-0 mb-7">
        <div className="card-header">
          <h5 className="mb-0">Reply Ticket</h5>
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
            {/* <div className="form-group py-2">
              <select
                name="department_id"
                id="department_id"
                className="form-control"
                onChange={(e) => setDepartmentId(e.target.value)}
              >
                <option>Select Department</option>
                {departmentList.map((department, index) => (
                  <option key={index} value={department?.id}>
                    {department?.name}
                  </option>
                ))}
              </select>
            </div> */}
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
            <button
              type="button"
              className="btn btn-primary pull-right"
              onClick={OnSubmit}
            >
              <i className="fa fa-pencil" />{" "}
              {loader && (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              )}
              {loader ? "Creating..." : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
