import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div id="app">
      <div id="sidebar" className="active">
        <div className="sidebar-wrapper active">
          <div className="sidebar-header">
            <div className="d-flex justify-content-between">
              <h1>Hi, </h1>
              {/* <div className="logo">
                            <a href="index.html"><img src="assets/images/logo/logo.png" alt="Logo"/></a>
                        </div> */}
            </div>
          </div>

          <div className="sidebar-menu">
            <ul className="menu">
              {/* <li className="sidebar-title">Menu</li> */}

              <li
                className={
                  splitLocation[1] === "Home"
                    ? "sidebar-item active"
                    : "sidebar-item"
                }
              >
                <Link to="/Home" className="sidebar-link">
                  <i className="bi bi-house-fill"></i>
                  <span>Home</span>
                </Link>
              </li>

              <li
                className={
                  splitLocation[1] === "Manage"
                    ? "sidebar-item active"
                    : "sidebar-item"
                }
              >
                <Link to="/Manage" className="sidebar-link">
                  <i className="bi bi-cash"></i>
                  <span>Manage budget</span>
                </Link>
              </li>

              <li
                className={
                  splitLocation[1] === "Profile"
                    ? "sidebar-item active"
                    : "sidebar-item"
                }
              >
                <Link to="/Profile" className="sidebar-link">
                  <i className="bi bi-person-fill"></i>
                  <span>Profile</span>
                </Link>
              </li>

              <li
                className={
                  splitLocation[1] === "Help"
                    ? "sidebar-item active"
                    : "sidebar-item"
                }
              >
                <Link to="/Help" className="sidebar-link">
                  <i className="bi bi-question-circle-fill"></i>
                  <span>Help</span>
                </Link>
              </li>
              <li
                className={
                  splitLocation[1] === "Landing"
                    ? "sidebar-item active"
                    : "sidebar-item"
                }
              >
                <Link to="/Landing" className="sidebar-link">
                  <i className="bi bi-arrow-left"></i>
                  <span>Log out</span>
                </Link>
              </li>

              {/* <li clclassNameass="sidebar-title">Forms &amp; Tables</li> */}
            </ul>
          </div>

          <button className="sidebar-toggler btn x">
            <i data-feather="x"></i>
          </button>
        </div>
      </div>

      {/* <div id="main" className="layout-navbar">
        <header className="mb-3">
          <nav className="navbar navbar-expand navbar-light ">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown me-1">
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <h6 className="dropdown-header">Mail</h6>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          No new mail
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown me-3">
                    <a
                      className="nav-link active dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-bell bi-sub fs-4 text-gray-600"></i>
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <h6 className="dropdown-header">Notifications</h6>
                      </li>
                      <li>
                        <a className="dropdown-item">
                          No notification available
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="dropdown">
                  <a href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="user-menu d-flex">
                      <div className="user-name text-end me-3">
                        <h6 className="mb-0 text-gray-600">John Ducky</h6>
                      </div>
                      <div className="user-img d-flex align-items-center">
                        <div className="avatar avatar-md"></div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div> */}
    </div>
  );
}

export default Navbar;
