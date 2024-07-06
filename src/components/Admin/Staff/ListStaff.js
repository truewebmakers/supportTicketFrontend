import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosBaseURL from '../../../AxiosConfig';
import { toast } from 'react-toastify';

export default function ListStaff() {
  const [usersList, setUsersList] = useState([]);
  const [userinfo, setUserInfo] = useState(""); 

  useEffect(() => {
    const userinfo = JSON.parse(window.localStorage.getItem('userInfo')) ; 
    setUserInfo(userinfo);
    const formData = {
      'user_type' : 'user',
      'admin_id' : userinfo?.id
    }
    getDepartmentList(formData);
  }, []);

  const getDepartmentList = (formData) => {
    axiosBaseURL
      .post("/users/list",formData)
      .then((response) => {
        setUsersList(response.data.data);
        toast.success("List fetched");
      })
      .catch(() => {
        toast.error("There is some error");
      });
  };

  const handleDelete = (id) => {
    if(window.confirm('Are you sure you want to delete?')){
      axiosBaseURL
      .post("/user/destroy",{'id' : id})
      .then((response) => { 
        toast.success("User Deleted Successfully");
      })
      .catch(() => {
        toast.error("There is some error");
      });
    }
   
  };
  
  return (

    
    <div className="container-fluid">
      
      <div className="card shadow border-0 mb-7">
        <div className="card-header">
          <h5 className="mb-0">Users</h5>
          <Link to={'/admin/staff/new'} className='btn btn-info float-end btn-sm'> Add New</Link>
        </div>
        <div className="table-responsive">
          <table className="table table-hover table-nowrap">
            <thead className="thead-light">
              <tr>
              <th scope="col">Sr.No</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Department</th>
                <th scope="col">Type</th>
                <th className="text-end" scope="col">Action</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {usersList.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <Link
                      to={`/admin/department/${user.id}`}
                      className="text-heading font-semibold"
                    >
                      {user.fname} {user.lname} 
                    </Link>
                  </td>

                  <td>
                    <span className="text-heading font-semibold">
                      {user.phone}
                    </span>
                  </td>
                  <td>{user.email}</td>
                  <td>Depar</td>
                  <td>{user.status}</td>

                  <td className="text-end">
                    <Link
                      to={`/admin/department/${user.id}`}
                      className="btn btn-sm btn-neutral"
                    >
                      View
                    </Link>
                    <button
                      type="button"
                      className="btn btn-sm btn-square btn-neutral text-danger-hover"
                      onClick={() => handleDelete(user.id)}
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
