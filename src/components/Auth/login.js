import React from "react";
import { Sidenav } from "./sidenav";

export const Login = () => {
  return (
    <div className="container">
      <Sidenav page="Login" />
      <div className="main">
         <div className="col-md-6 col-sm-12">
            <div className="login-form">
               <form>
                  <div className="form-group">
                     <label>User Name</label>
                     <input type="text" className="form-control" placeholder="User Name"/>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" placeholder="Password"/>
                  </div>
                  <button type="submit" className="btn btn-black mt-3 mr-3">Login</button>
                  <button type="submit" className="btn btn-secondary mt-3 ml-3">Register</button>
               </form>
            </div>
         </div>
      </div>
     
    </div>
  );
};
