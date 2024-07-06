import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosBaseURL from "../../../AxiosConfig";
import { toast } from "react-toastify";
export default function ListDepartment() {
  const [departmentList, setDepartmentList] = useState([]);

  useEffect(() => {
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

  const handleDelete = () => {};

  return (
    <div className="container-fluid">
      <div className="card shadow border-0 mb-7">
        <div className="card-header">
          <h5 className="mb-0">Departments</h5>
          <Link
            to={"/admin/department/new"}
            className="btn btn-info float-end btn-sm"
          >
            {" "}
            Add New
          </Link>
        </div>
        <div className="table-responsive">
          <table className="table table-hover table-nowrap">
            <thead className="thead-light">
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">Department Name</th>
                <th scope="col">About Department</th>
                <th scope="col">Manager</th>
                <th className="text-end" scope="col">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {departmentList.map((department, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <Link
                      to={`/admin/department/${department.id}`}
                      className="text-heading font-semibold"
                    >
                      {department.name}
                    </Link>
                  </td>

                  <td>
                    <span className="text-heading font-semibold">
                      {department.description}
                    </span>
                  </td>
                  <td>{department.manger_id ? "Assigned" : "Not Assigned"}</td>

                  <td className="text-end">
                    <Link
                      to={`/admin/department/${department.id}`}
                      className="btn btn-sm btn-neutral"
                    >
                      View
                    </Link>
                    <button
                      type="button"
                      className="btn btn-sm btn-square btn-neutral text-danger-hover"
                      onClick={() => handleDelete(department.id)}
                    >
                      <i className="bi bi-trash" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* <div className="card-footer border-0 py-5">
          <span className="text-muted text-sm">
            Showing 10 items out of 250 results found
          </span>
        </div> */}
      </div>
    </div>
  );
}
