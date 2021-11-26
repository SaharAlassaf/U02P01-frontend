import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";
import "../../assets/css/bootstrap-icons/bootstrap-icons.css";
import "../../assets/css/bootstrap.css";
import "../../assets/css/auth.css";
import "../../assets/css/font.css";
import axios from "axios";

function Signin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userr, setUserr] = useState(null);
  const [error, setError] = useState(false);
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    const storage = localStorage.getItem("userr");
    setUserr(JSON.parse(storage));
  }, []);

  function handleChechbox(e) {
    if (e.target.type === "checkbox") {
      setRemember(true);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/signin", {
        username: username,
        password: password,
      });
      if (
        res.data.message === "User Not found." ||
        res.data.message === "Invalid Password!"
      ) {
        setError(true);
      } else {
        if (remember == true) {
          localStorage.setItem("userr", JSON.stringify({ id: res.data._id }));
        }
        navigate("/Home");

        console.log(res.data);
        setUserr(res.data);
        console.log("users", userr);
      }
    } catch (error) {
      console.log("get user data error", error);
      console.log(error.response);
      setError(true);
    }
    console.log(username, password);
  };

  return (
    <>
      {userr ? (
        navigate("/Home")
      ) : (
        <div id="auth" className="bg-body">
          <div className="row align-items-center">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <div id="auth-left">
                {/* <div className="auth-logo">
                    <a href="index.html"><img src="assets/images/logo/logo.png" alt="Logo"></a>
                </div> */}
                <h1 className="auth-title">Sign in.</h1>
                <p className="auth-subtitle mb-5">
                  Sign in with your data that you entered during registration.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="form-group position-relative has-icon-left mb-4">
                    <input
                      type="text"
                      className={
                        error
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
                      className={
                        error
                          ? "form-control form-control-xl is-invalid"
                          : "form-control form-control-xl"
                      }
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      require="true"
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
                      onChange={(e) => handleChechbox(e)}
                    />
                    <label
                      className="form-check-label text-gray-600"
                      htmlFor="flexCheckDefault"
                    >
                      Keep me Signed in
                    </label>
                  </div>

                  <input
                    type="submit"
                    value="Sign in"
                    className="btn btn-primary btn-block btn-lg shadow-lg mt-5"
                  />
                  {/* <Link to="/Home">
              </Link> */}
                </form>
                <div className="text-center mt-5 text-lg fs-4">
                  <p className="text-gray-600">
                    Don't have an account?{" "}
                    <span className="font-bold">
                      <Link to="/Signup">Sign up</Link>
                    </span>
                    .
                  </p>
                  {/* <p>
                <a className="font-bold" href="auth-forgot-password.html">
                  Forgot password?
                </a>
                .
              </p> */}
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
      )}
    </>
  );
}

export default Signin;
