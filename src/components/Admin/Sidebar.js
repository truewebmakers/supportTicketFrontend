import React,{ useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Sidebar() {
  const [Collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const toggleDashboardCollapse = () => {
    setCollapsed(!Collapsed);
  };

  const Logout = () =>{
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('userInfo');
    toast.success('You are successfully Logout'); 
    navigate('/login')

  }
  return (
    <aside>
      <div className="sidebar left ">
        <div className="user-panel">
          <div className="pull-left image">
            <img
              src="http://via.placeholder.com/160x160"
              className="rounded-circle"
              alt="User Image"
            />
          </div>
          <div className="pull-left info">
            <p>bootstrap develop</p>
            <a href="#">
              <i className="fa fa-circle text-success" /> Online
            </a>
          </div>
        </div>
        <ul className="list-sidebar bg-defoult">
          <li>
            {" "}
            <a
              href="#"
              data-toggle="collapse"
              data-target="#dashboard"
              onClick={toggleDashboardCollapse}
              className={Collapsed ? "collapsed active" : "collapsed"}
            >
              {" "}
              <i className="fa fa-th-large" />{" "}
              <span className="nav-label"> Dashboards </span>{" "}
              <span className="fa fa-chevron-left pull-right" />{" "}
            </a>
            <ul  className={`sub-menu collapse ${Collapsed ? 'show' : ''}`} id="dashboard">
              <li className="active">
                <a href="#">CSS3 Animation</a>
              </li>
              <li>
                <a href="#">General</a>
              </li> 
            </ul>
          </li>
          <li> 
            <a href="#" onClick={Logout}>
              <i className="fa fa-diamond" /> 
              <span className="nav-label">Logout</span>
            </a> 
          </li>
        </ul>
      </div>
    </aside>
  );
}
