import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Sidebar() {
  const [Collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const toggleDashboardCollapse = () => {
    setCollapsed(!Collapsed);
  };

  const [userinfo, SetUserInfo] = useState();

  useEffect(() => {
    const storedUserInfo = JSON.parse(window.localStorage.getItem("userInfo"));
    SetUserInfo(storedUserInfo);
  }, []);

  const Logout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userInfo");
    toast.success("You are successfully Logout");
    navigate("/login");
  };
  return (
    <nav
      className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
      id="navbarVertical"
    >
      <div className="container-fluid">
        {/* Toggler */}
        <button
          className="navbar-toggler ms-n2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarCollapse"
          aria-controls="sidebarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Brand */}
        <a className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
          <img
            src="https://preview.webpixels.io/web/img/logos/clever-primary.svg"
            alt="..."
          />
        </a>
        {/* User menu (mobile) */}
        <div className="navbar-user d-lg-none">
          {/* Dropdown */}
          <div className="dropdown">
            {/* Toggle */}
              <a
                href="#"
                id="sidebarAvatar"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
              <div className="avatar-parent-child">
                <img
                  alt="Image Placeholder"
                  src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                  className="avatar avatar- rounded-circle"
                />{" "}
                <span className="avatar-child avatar-badge bg-success" />
              </div>
            </a>
            {/* Menu */}
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="sidebarAvatar"
            >
              <a href="#" className="dropdown-item">
                Profile
              </a>
              <a href="#" className="dropdown-item">
                Settings
              </a>
              <a href="#" className="dropdown-item">
                Billing
              </a>
              <hr className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                Logout
              </a>
            </div>
          </div>
        </div>
        {/* Collapse */}
        <div className="collapse navbar-collapse" id="sidebarCollapse">
          {/* Navigation */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={"/admin/dashboard"} className="nav-link">
                <i className="bi bi-house" />
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/admin/staff/list"} className="nav-link">
                <i className="bi bi-house" />
                Users
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/admin/department/list"} className="nav-link">
                <i className="bi bi-house" />
                Department
              </Link>
            </li>
 

            <li className="nav-item">
              <Link to={"/admin/ticket"} className="nav-link">
                <i className="bi bi-house" />
                Tickets
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/admin/dashboard"} className="nav-link">
                <i className="bi bi-bar-chart" /> Analitycs
              </Link>
            </li>

            <hr className="navbar-divider my-2 opacity-20" />
            <li className="nav-item">
              <a className="nav-link" href=":;" onClick={Logout}>
                <i className="bi bi-box-arrow-left" /> Logout
              </a>
            </li>
            {/* <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="bi bi-chat" /> Messages
            <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">6</span>
          </a>
        </li> */}
            {/* <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="bi bi-bookmarks" /> Collections
          </a>
        </li> */}
            {/* <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="bi bi-people" /> Users
          </a>
        </li> */}
          </ul>
          {/* Divider */}
          <hr className="navbar-divider my-2 opacity-20" />

          <div className="mt-auto" />
          {/* User (md) */}
        </div>
      </div>
    </nav>
  );
}
