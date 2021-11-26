import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/auth.css";
import "../../App.css";
import "../../assets/css/bootstrap-icons/bootstrap-icons.css";
import "../../assets/css/bootstrap.css";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorUser, setErrorUser] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/signup", {
        name: name,
        email: email,
        username: username,
        password: password,
      });
      if (res.data.message === "User was registered successfully!") {
        console.log("User was registered successfully!");
        navigate("/Home");
      } else if (res.data.message === "Failed! Username is already in use!") {
        setErrorEmail(true);
      } else {
        setErrorUser(true);
        setMessage(res.data.message);
        console.log(res.data.message);
      }
    } catch (error) {
      console.log("get user data error", error);
      console.log(error.response);
      setErrorEmail(true);
      setErrorUser(true);
    }
    // console.log(name, email, username, password);
  };

  return (
    <div id="auth" className="bg-body">
      <div className="row align-items-center">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div id="auth-left">
            {/* <div className="auth-logo">
                  <a href="index.html"><img src="assets/images/logo/logo.png" alt="Logo"></a>
              </div> */}
            <h1 className="auth-title">Sign Up</h1>
            <p className="auth-subtitle mb-5">
              Input your data to register to our website.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group position-relative has-icon-left mb-4">
                <input
                  type="text"
                  className="form-control form-control-xl"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  require="true"
                />
                <div className="form-control-icon">
                  <i className="bi bi-person"></i>
                </div>
              </div>
              <div className="form-group position-relative has-icon-left mb-4">
                <input
                  type="text"
                  className={
                    errorEmail
                      ? "form-control form-control-xl is-invalid"
                      : "form-control form-control-xl"
                  }
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  require="true"
                />
                <div className="form-control-icon">
                  <i className="bi bi-envelope"></i>
                </div>
              </div>
              <div className="form-group position-relative has-icon-left mb-4">
                <input
                  type="text"
                  className={
                    errorUser
                      ? "form-control form-control-xl is-invalid"
                      : "form-control form-control-xl"
                  }
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  require="true"
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
                  onChange={(e) => setPassword(e.target.value)}
                  require="true"
                />
                <div className="form-control-icon">
                  <i className="bi bi-shield-lock"></i>
                </div>
              </div>
              <input
                type="submit"
                value="Sign Up"
                className="btn btn-primary btn-block btn-lg shadow-lg mt-5"
              />
              {/* <Link to="/Home">
              </Link> */}
            </form>
            <div className="text-center mt-5 text-lg fs-4">
              <p className="text-gray-600">
                Already have an account?{" "}
                <span className="font-bold">
                  <Link to="/Signin">Log in</Link>
                </span>
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

export default Signup;
