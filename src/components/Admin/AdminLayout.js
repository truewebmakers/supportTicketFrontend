import React from "react";
import { Outlet } from "react-router-dom";
import "../../admindash.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
export default function AdminLayout() {
  return (
    <>
      <Header />
      <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <Sidebar />
        <main className="py-6 bg-surface-secondary dash-main">
        <Outlet />
        </main>
        
      </div>
    </>
  );
}
