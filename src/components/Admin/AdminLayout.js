import React from "react";
import { Outlet } from "react-router-dom";
import "../../admindash.css"; 
import Sidebar from "./Sidebar";
export default function AdminLayout() {
  return (
    <div className="page-wrapper chiller-theme toggled">
      <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
        <i className="fas fa-bars" />
      </a>
       <Sidebar/>
       <Outlet/>
    </div>
  );
}
