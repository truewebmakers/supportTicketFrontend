import React from "react";
import { Outlet } from "react-router-dom";
import "../../admindash.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
export default function AdminLayout() {
  return (
    <>
      <Header />
      <div className="mainsiderbar">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}
