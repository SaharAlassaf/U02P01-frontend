import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar({ user }) {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const removeLocalStorage = () => {
    localStorage.removeItem("user");
  };

  function capitalizeFirstLetter(string) {
    return string && string[0].toUpperCase() + string.slice(1);
  }

  return (
    <>
      {user ? (
        <div id="app">
          <div id="sidebar" className="active">
            <div className="sidebar-wrapper active">
              <div className="sidebar-header">
                <div className="d-flex justify-content-between">
                  <h1>Hi, {capitalizeFirstLetter(user.name)} </h1>
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
                      <span>Help & Support</span>
                    </Link>
                  </li>
                  <div className="footer-logout">
                    <li
                      className={
                        splitLocation[1] === "Landing"
                          ? "sidebar-item active"
                          : "sidebar-item"
                      }
                    >
                      <Link
                        to="/"
                        className="sidebar-link"
                        onClick={removeLocalStorage}
                      >
                        <i className="bi bi-arrow-left"></i>
                        <span>Log out</span>
                      </Link>
                    </li>
                  </div>

                  {/* <li clclassNameass="sidebar-title">Forms &amp; Tables</li> */}
                </ul>
              </div>

              <button className="sidebar-toggler btn x">
                <i data-feather="x"></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  );
}

export default Navbar;
