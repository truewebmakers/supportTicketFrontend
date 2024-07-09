import React, { useState,useEffect }  from "react";
import { Link } from "react-router-dom";
import axiosBaseURL from '../../../AxiosConfig';
import { toast } from 'react-toastify';
export default function Ticket() {
  const [TicketList, setTicketList] = useState([]);
  const [userinfo, setUserInfo] = useState(""); 

  
  useEffect(() => {
    const userinfo = JSON.parse(window.localStorage.getItem('userInfo')) ; 
    setUserInfo(userinfo);
    const formData = { 
      'user_id' : userinfo?.id
    }
    getTicketsList(formData);
  }, []);

  const getTicketsList = (formData) => {
    axiosBaseURL
      .post("/tickets/list",formData)
      .then((response) => {
        setTicketList(response.data.data);
        toast.success("List fetched");
      })
      .catch(() => {
        toast.error("There is some error");
      });
  };


  const handleDelete = () =>{

  }
  return (
    <div className="container-fluid">
      {/* Card stats */}
      <div className="row g-6 mb-6">
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card shadow border-0">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                    New Tickets
                  </span>
                  <span className="h3 font-bold mb-0">0</span>
                </div>
                <div className="col-auto">
                  <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                    <i className="bi bi-ticket" />
                  </div>
                </div>
              </div>
              <div className="mt-2 mb-0 text-sm">
                <span className="badge badge-pill bg-soft-success text-success me-2">
                  <i className="bi bi-arrow-up me-1" />
                  13%
                </span>
                <span className="text-nowrap text-xs text-muted">
                  Since last month
                </span>
                <Link className="btn btn-info float-end btn-sm" to="/admin/ticket/new"> New</Link>
           
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card shadow border-0">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                    Open Tickets
                  </span>
                  <span className="h3 font-bold mb-0">0</span>
                </div>
                <div className="col-auto">
                  <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                    <i className="bi bi-ticket" />
                  </div>
                </div>
              </div>
              <div className="mt-2 mb-0 text-sm">
                <span className="badge badge-pill bg-soft-success text-success me-2">
                  <i className="bi bi-arrow-up me-1" />
                  13%
                </span>
                <span className="text-nowrap text-xs text-muted">
                  Since last month
                </span>
                <button className="btn btn-info float-end btn-sm">
                  Open Tickets
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card shadow border-0">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                    Closed Tickets
                  </span>
                  <span className="h3 font-bold mb-0">0</span>
                </div>
                <div className="col-auto">
                  <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                    <i className="bi bi-flap" />
                  </div>
                </div>
              </div>
              <div className="mt-2 mb-0 text-sm">
                <span className="badge badge-pill bg-soft-success text-success me-2">
                  <i className="bi bi-arrow-up me-1" />
                  13%
                </span>
                <span className="text-nowrap text-xs text-muted">
                  Since last month
                </span>
                <button className="btn btn-info float-end btn-sm">
                  Close Ticket
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card shadow border-0">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                    Hold Tickets
                  </span>
                  <span className="h3 font-bold mb-0">0</span>
                </div>
                <div className="col-auto">
                  <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                    <i className="bi bi-ticket" />
                  </div>
                </div>
              </div>
              <div className="mt-2 mb-0 text-sm">
                <span className="badge badge-pill bg-soft-success text-success me-2">
                  <i className="bi bi-arrow-up me-1" />
                  13%
                </span>
                <span className="text-nowrap text-xs text-muted">
                  Since last month
                </span>
                <button className="btn btn-info float-end btn-sm">
                  Hold Tickets
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow border-0 mb-7">
        <div className="card-header">
          <h5 className="mb-0">Applications</h5>
        </div>
        <div className="table-responsive">
          <table className="table table-hover table-nowrap">
            <thead className="thead-light">
            <tr>
              <th scope="col">Sr.No</th>
                <th scope="col">Ticket code</th>
                <th scope="col">Subject</th> 
                <th scope="col">Query</th>
                <th scope="col">Type</th>
                <th className="text-end" scope="col">Action</th>
                <th />
              </tr>
            </thead>
            <tbody>
              
              {TicketList.map((ticket, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{ticket.ticket_code}</td>
                  <td>
                    <Link
                      to={`/admin/ticket/view/${ticket.id}`}
                      className="text-heading font-semibold"
                    >
                      {ticket.subject} 
                    </Link>
                  </td>

                  
                  <td>{ticket.query}</td> 
                  <td>{ticket.status}</td>

                  <td className="text-end">
                    <Link
                      to={`/admin/ticket/view/${ticket.id}`}
                      className="btn btn-sm btn-neutral"
                    >
                      View
                    </Link>
                    <button
                      type="button"
                      className="btn btn-sm btn-square btn-neutral text-danger-hover"
                      onClick={() => handleDelete(ticket.id)}
                    >
                      <i className="bi bi-trash" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card-footer border-0 py-5">
          <span className="text-muted text-sm">
            Showing 10 items out of 250 results found
          </span>
        </div>
      </div>
    </div>
  );
}
