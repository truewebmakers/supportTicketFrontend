import React from "react";

export default function NewTicket() {
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
              <input
                name="department"
                type="text"
                className="form-control"
                placeholder="Department"
              />
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
