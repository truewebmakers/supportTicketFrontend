import React, { useState } from "react";
import { Sidenav } from "./sidenav";
import { Link, useNavigate } from "react-router-dom";
import axiosBaseURL from "../../AxiosConfig";
import { toast } from "react-toastify";

export const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate(); 

  let formData = {
    fname: fname,
    lname: lname,
    email: email,
    phone:phone,
    password: password,
    cpassword: cpassword,
    user_type:'admin',
    admin_id : 0
  };

  const OnSubmit = () => {
    setLoader(true);

    axiosBaseURL
      .post("register", formData)
      .then(function (response) {
        toast.success("Your are register successfully");  
        
        setLoader(false);
        navigate('/login'); 
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
                  Sign Up{" "}
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
                          type="fname"
                          className="form-control"
                          name="fname"
                          id="fname"
                          placeholder="Jhon"
                          required=""
                          onChange={(e) => setFname(e.target.value)}
                        />
                        <label for="fname" className="form-label">
                          First name
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="fname"
                          className="form-control"
                          name="lname"
                          id="lname"
                          placeholder="Smith"
                          required=""
                          onChange={(e) => setLname(e.target.value)}
                        />
                        <label for="fname" className="form-label">
                          Last name
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="name@example.com"
                          required=""
                          onChange={(e) => setEmail(e.target.value)}

                        />
                        <label for="email" className="form-label">
                          Email
                        </label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="phone"
                          className="form-control"
                          name="text"
                          id="phone"
                          placeholder="7778889999"
                          required=""
                          onChange={(e) => setPhone(e.target.value)}

                        />
                        <label for="email" className="form-label">
                          Phone
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
                          required=""
                          onChange={(e) => setPassword(e.target.value)}

                        />
                        <label for="password" className="form-label">
                          Password
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex gap-2 justify-content-between">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            name="rememberMe"
                            id="rememberMe"
                          />
                          <label
                            className="form-check-label text-secondary"
                            for="rememberMe"
                          >
                            Keep me logged in
                          </label>
                        </div>
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
                        <button
                          class="btn btn-primary"
                          onClick={OnSubmit}
                          disabled={loader}
                          type="button"
                        >
                          {loader && (
                            <span
                              class="spinner-border spinner-border-sm"
                              role="status"
                              aria-hidden="true"
                            ></span>
                          )}
                          {loader ? "Submitting..." : "Singup"}
                        </button>
                      </div>
                    </div>
                    <div className="col-12">
                      <p className="m-0 text-secondary text-center">
                        You already have account?
                        <Link
                          to="/login"
                          className="link-primary text-decoration-none"
                        >
                          {" "}
                          Sign In
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
