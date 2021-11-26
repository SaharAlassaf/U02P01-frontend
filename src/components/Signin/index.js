import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "../../bootstrap.css";
import "../../bootstrap-icons/bootstrap-icons.css";
import "../../assets/css/auth.css";
import "../../assets/css/font.css";

function Signin() {
  return (
    <div id="auth" className="bg-body">
      <div className="row align-items-center">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div id="auth-left">
            {/* <div className="auth-logo">
                    <a href="index.html"><img src="assets/images/logo/logo.png" alt="Logo"></a>
                </div> */}
            <h1 className="auth-title">Log in.</h1>
            <p className="auth-subtitle mb-5">
              Log in with your data that you entered during registration.
            </p>

            <form action="index.html">
              <div className="form-group position-relative has-icon-left mb-4">
                <input
                  type="text"
                  className="form-control form-control-xl is-invalid"
                  placeholder="Username"
                />
                 
                <div className="form-control-icon">
                  <i className="bi bi-person"></i>
                </div>
              </div>

             
              <div className="form-group position-relative has-icon-left mb-4">
                <input
                  type="password"
                  className="form-control form-control-xl"
                  placeholder="Password"
                />
                <div className="form-control-icon">
                  <i className="bi bi-shield-lock"></i>
                </div>
              </div>
              <div className="form-check form-check-lg d-flex align-items-end">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label text-gray-600"
                  htmlFor="flexCheckDefault"
                >
                  Keep me logged in
                </label>
              </div>
              <Link to="/Home">
                <button className="btn btn-primary btn-block btn-lg shadow-lg mt-5">
                  Log in
                </button>
              </Link>
            </form>
            <div className="text-center mt-5 text-lg fs-4">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <span className="font-bold">
                  <Link to="/Signup">Sign up</Link>
                </span>
                .
              </p>
              <p>
                <a className="font-bold" href="auth-forgot-password.html">
                  Forgot password?
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2"></div>
        {/* <div className="col-lg-7 d-none d-lg-block">
            <div id="auth-right">

            </div>
        </div> */}
      </div>
    </div>
  );
}

export default Signin;
