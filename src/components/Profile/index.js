import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

function Profile() {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    getProfile();
    
  }, // eslint-disable-next-line 
  []);

  const getProfile = async () => {
    try {
      const storage = JSON.parse(localStorage.getItem("user"));
      setUser(storage);
      // console.log("user from storage", storage);

      if (storage._id) {
        const res = await axios.get(
          `${BASE_URL}/auth/profile/${storage._id}`
        );
        // console.log("get data", res.data);
        setUser(res.data);
        setName(res.data.name);
        // console.log("userNav data", user);
      } else {
        console.log("user is null");
      }
    } catch (error) {
      console.log("get error", error);
    }
  };


  const updateProfile = async (e) => {
    let name = e.target.newName.value || undefined;
    let username = e.target.newUsername.value || undefined;
    let email = e.target.newEmail.value || undefined;
    let password = e.target.newPassword.value || undefined;

    try {
      const res = await axios.put(`${BASE_URL}/auth/updateProfile`, {
        id: user,
        name: name,
        username: username,
        email: email,
        password: password,
      });
      if (
        res.data.message === "User Not found." ||
        res.data.message === "Invalid Password!"
      ) {
        setError(true);
      }
      setUser(res.data);
      setName(res.data.name);
      // console.log(res.data.message);
      getProfile();
    } catch (error) {
      console.log("get error", error);
    }
  };

  return (
    <>
      {user ? (
        <>
          <Navbar user={user} />

          <div id="main" className="layout-navbar">
            <div id="main-content">
              <div className="page-heading">
                <h3>Profile</h3>
              </div>

              <div className="row">
                <div className="col-12 col-lg-4">
                  <div className="card">
                    <div className="card-body text-center">
                      <div className="avatar avatar-xl bg-warning me-3 m-lg-4 justify-content-center">
                        <span className="avatar-content">{name.substring(0, 2).toUpperCase()}</span>
                      </div>
                      <div className="row m-lg-4">
                        <h4>{user.name}</h4>
                      </div>

                      <div className="row m-lg-4">
                        <p>@{user.username}</p>
                      </div>

                      <div className="row">
                        <div className=" d-lg-inline-flex gap-lg-2 justify-content-center align-items-sm-center">
                          <i className="bi-middle bi-envelope-fill"></i>
                          <h5>{user.email}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-8">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Update your Profile</h4>
                    </div>
                    <div className="card-body">
                      <form
                        onSubmit={updateProfile}
                        className="form form-vertical"
                      >
                        <div className="form-body">
                          <div className="row">
                            <div className="col-12">
                              <div className="form-group has-icon-left">
                                <label htmlFor="first-name-icon">Name</label>
                                <div className="position-relative">
                                  <input
                                    type="text"
                                    name="newName"
                                    className="form-control"
                                    placeholder={user.name}
                                    id="first-name-icon"
                                  />
                                  <div className="form-control-icon">
                                    <i className="bi bi-person-fill"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group has-icon-left">
                                <label htmlFor="username-id-icon">
                                  Username
                                </label>
                                <div className="position-relative">
                                  <input
                                    type="text"
                                    name="newUsername"
                                    className={
                                      error
                                        ? "form-control is-invalid"
                                        : "form-control "
                                    }
                                    placeholder={user.username}
                                    id="username-id-icon"
                                  />
                                  <div className="form-control-icon">
                                    <i className="bi bi-person"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group has-icon-left">
                                <label htmlFor="email-id-icon">Email</label>
                                <div className="position-relative">
                                  <input
                                    type="text"
                                    name="newEmail"
                                    className="form-control"
                                    placeholder={user.email}
                                    id="email-id-icon"
                                  />
                                  <div className="form-control-icon">
                                    <i className="bi bi-envelope"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group has-icon-left">
                                <label htmlFor="password-id-icon">
                                  Password
                                </label>
                                <div className="position-relative">
                                  <input
                                    type="password"
                                    name="newPassword"
                                    className="form-control"
                                    placeholder={user.password}
                                    id="password-id-icon"
                                  />
                                  <div className="form-control-icon">
                                    <i className="bi bi-lock"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 d-flex justify-content-end">
                              {/* <button
                            type="submit"
                            className="btn btn-primary me-1 mb-1"
                          >
                            Update
                          </button> */}
                              <input
                                type="submit"
                                value="Update"
                                className="btn btn-primary me-1 mb-1"
                              />
                              <button
                                type="reset"
                                className="btn btn-light-secondary me-1 mb-1"
                              >
                                Reset
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  );
}

export default Profile;
