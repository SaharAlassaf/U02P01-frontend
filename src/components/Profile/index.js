import React from "react";
import Navbar from "../../components/Navbar";

function Profile() {
  return (
    <>
      <Navbar />
      <div id="main" className="layout-navbar">
        <div id="main-content">
          <div className="page-heading">
            <h3>Profile</h3>
          </div>

          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="card">
                <div class="card-body text-center">
                  <div class="avatar avatar-xl bg-warning me-3 m-lg-4">
                    <span class="avatar-content">AS</span>
                  </div>
                  <div className="row m-lg-4">
                    <h4>Avatar Sizes</h4>
                  </div>

                  <div className="row m-lg-4">
                    <p>@AvatarSizes</p>
                  </div>

                  <div className="row">
                    <div className=" d-lg-inline-flex gap-lg-2">
                      <i className="bi bi-envelope-fill"></i>
                      <h5>AvatarSizes@gmail.com</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Update Profile</h4>
                </div>
                <div class="card-body">
                  <form class="form form-vertical">
                    <div class="form-body">
                      <div class="row">
                        <div class="col-12">
                          <div class="form-group has-icon-left">
                            <label for="first-name-icon">Name</label>
                            <div class="position-relative">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Name"
                                id="first-name-icon"
                              />
                              <div class="form-control-icon">
                                <i class="bi bi-person-fill"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-group has-icon-left">
                            <label for="username-id-icon">Username</label>
                            <div class="position-relative">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Username"
                                id="username-id-icon"
                              />
                              <div class="form-control-icon">
                                <i class="bi bi-person"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-group has-icon-left">
                            <label for="email-id-icon">Email</label>
                            <div class="position-relative">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Email"
                                id="email-id-icon"
                              />
                              <div class="form-control-icon">
                                <i class="bi bi-envelope"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-group has-icon-left">
                            <label for="password-id-icon">Password</label>
                            <div class="position-relative">
                              <input
                                type="password"
                                class="form-control"
                                placeholder="Password"
                                id="password-id-icon"
                              />
                              <div class="form-control-icon">
                                <i class="bi bi-lock"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 d-flex justify-content-end">
                          <button
                            type="submit"
                            class="btn btn-primary me-1 mb-1"
                          >
                            Update
                          </button>
                          <button
                            type="reset"
                            class="btn btn-light-secondary me-1 mb-1"
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
  );
}

export default Profile;
