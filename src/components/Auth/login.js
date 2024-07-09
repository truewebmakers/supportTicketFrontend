 
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosBaseURL from "../../AxiosConfig";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); 
  const formData = {
    email: email,
    password: password,
  };
   
  const OnSubmit = () => {
    setLoader(true);
    
    axiosBaseURL
      .post("login", formData)
      .then(function (response) {
        setLoader(false);
        toast.success("Login successfully");
        window.localStorage.setItem('token',response.data.token) 
        window.localStorage.setItem('userInfo',JSON.stringify(response.data.userInfo))
        navigate('/admin/dashboard'); 

      })
      .catch(function (error) {
        if (error.response && error.response.status === 422) {
          setLoader(false);
          setErrors(error.response.data.error);
        } else {
          setLoader(false);
          toast.error(error.response.data.error);
          setErrors({});
        }
      });
  };
  return (
    <section className="bg-light py-3 py-md-5">
     
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <div className="card border border-light-subtle rounded-3 shadow-sm">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <div className="text-center mb-3 d-none">
                  <a href="#!">
                    <img
                      src="./assets/img/bsb-logo.svg"
                      alt="BootstrapBrain Logo"
                      width="175"
                      height="57"
                    />
                  </a>
                </div>
                <h2 className="fs-6 fw-normal text-center text-secondary mb-4">
                  Sign in to your account
                </h2>
                <form action="#!">
                  {errors && (
                    <ul className="errors-ul">
                      {Object.keys(errors).map((key, index) => (
                        <li key={index}>{errors[key][0]}</li>
                      ))}
                    </ul>
                  )}
                  <div className="row gy-2 overflow-hidden">
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="name@example.com"
                          onChange={(e) => setEmail(e.target.value)}
                          required=""
                        />
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          id="password"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                          required=""
                        />
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex gap-2 justify-content-between">
                        {/* <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" name="rememberMe" id="rememberMe"/>
                      <label className="form-check-label text-secondary" for="rememberMe">
                        Keep me logged in
                      </label>
                    </div> */}
                        <a
                          href="#!"
                          className="link-primary text-decoration-none"
                        >
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid my-3">
                        <button className="btn btn-primary" 

                        onClick={OnSubmit}
                        disabled={loader}
                        
                        type="button">
                          {loader  && <span
                            className="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>}
                        {loader ? 'Submitting...' : 'Log In'}
                        </button>
 
                      </div>
                    </div>
                    <div className="col-12">
                      <p className="m-0 text-secondary text-center">
                        Don't have an account?
                        <Link
                          to="/signup"
                          className="link-primary text-decoration-none"
                        >
                          {" "}
                          Sing up
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
