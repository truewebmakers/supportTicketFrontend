import React from "react";
import { Link } from "react-router-dom";

export default function NewStaff() {
  return (
    <div className="container-fluid">
      <div className="card shadow border-0 mb-7">
        <div className="card-header">
          <h5 className="mb-0">Add User</h5>
          <Link to={'/admin/department/add'} className="btn btn-info btn-sm float-end">Add Department</Link>
        </div>

        <form action="#" method="post">
        <div className="modal-body ">
            <div className="form-group py-2">
              <input name="fname"  type="text" className="form-control"  placeholder="Jhon" />
            </div>

            <div className="form-group py-2">
              <input name="lname"  type="text" className="form-control"  placeholder="Smith" />
            </div>

            <div className="form-group py-2">
              <input name="email"  type="email" className="form-control"  placeholder="exam@example.com" />
            </div>

            <div className="form-group py-2">
              <input name="password"  type="password" className="form-control"  placeholder="********" />
            </div>

            <div className="form-group py-2">
              <input name="department"  type="text" className="form-control" placeholder="Department"/>
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
