import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;


function Help() {
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
        // console.log("userNav data", user);
      }
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
                <h3>Help & Support</h3>
              </div>
              <div className="page-content">
                <div className="card">
                  <div className="card-content">
                    <div className="card-body">
                      <h4 className="card-title">How can we help you?</h4>
                      <p className="card-text">
                        Bill support is here to help you
                      </p>
                      <form className="form" method="post">
                        <div className="form-body">
                          <div className="form-group">
                            <label htmlFor="feedback1" className="sr-only">
                              Name
                            </label>
                            <input
                              type="text"
                              id="feedback1"
                              className="form-control"
                              placeholder="Name"
                              name="name"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="feedback2" className="sr-only">
                              Email
                            </label>
                            <input
                              type="email"
                              id="feedback2"
                              className="form-control"
                              placeholder="Email"
                              name="email"
                            />
                          </div>
                          <div className="form-group">
                            <select name="reason" className="form-control">
                              <option value="Inquiry">Inquiry</option>
                              <option value="Complain">complaints</option>
                              <option value="Quotation">Quotation</option>
                            </select>
                          </div>
                          <div className="form-group form-label-group">
                            <textarea
                              className="form-control"
                              id="label-textarea"
                              rows="3"
                              placeholder="Suggestion"
                            ></textarea>
                            <label htmlFor="label-textarea"></label>
                          </div>
                        </div>
                        <div className="form-actions d-flex justify-content-end">
                          <button
                            type="submit"
                            className="btn btn-primary me-1"
                          >
                            Submit
                          </button>
                          <button
                            type="reset"
                            className="btn btn-light-primary"
                          >
                            Cancel
                          </button>
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
        <div className="row justify-content-sm-center mt-5">
          <div className="mt-5 spinner-border text-primary" role="status">
            <span className=" visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
}

export default Help;
