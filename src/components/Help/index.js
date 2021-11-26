import React from "react";
import Navbar from "../../components/Navbar";

function Help() {
  return (
    <>
      <Navbar />
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
                  <p className="card-text">Bill support is here to help you</p>
                  <form className="form" method="post">
                    <div className="form-body">
                      <div className="form-group">
                        <label for="feedback1" className="sr-only">
                          Name
                        </label>
                        <input
                          type="text"
                          id="feedback1"
                          class="form-control"
                          placeholder="Name"
                          name="name"
                        />
                      </div>
                      <div className="form-group">
                        <label for="feedback2" className="sr-only">
                          Email
                        </label>
                        <input
                          type="email"
                          id="feedback2"
                          class="form-control"
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
                        <label for="label-textarea"></label>
                      </div>
                    </div>
                    <div className="form-actions d-flex justify-content-end">
                      <button type="submit" className="btn btn-primary me-1">
                        Submit
                      </button>
                      <button type="reset" className="btn btn-light-primary">
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
  );
}

export default Help;
