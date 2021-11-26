import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Modal from "react-bootstrap/Modal";

function Manage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar />
      <div id="main" className="layout-navbar">
        <div id="main-content">
          <div className="page-heading">
            <h3>Manage budget</h3>
          </div>
          <section className="section">
            <div className="row" id="table-hover-row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Subscriptions</h4>
                  </div>
                  <div class="row card-body">
                    <div class="col-6 mb-3">
                      <div class="input-group">
                        <button
                          class="btn btn-primary"
                          type="button"
                          id="button-addon1"
                        >
                          Update Budget
                        </button>
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                          aria-label="Example text with button addon"
                          aria-describedby="button-addon1"
                        />
                        <span class="input-group-text">$</span>
                      </div>
                    </div>
                    <div class="col-6">
                      <div className="d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={handleShow}>
                          Add new subscription
                        </button>

                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>New subscription</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <div className="row match-height">
                              <div className="card-body">
                                <form className="form form-horizontal">
                                  <div className="form-body">
                                    <div className="row">
                                      <div className="col-md-4">
                                        <label>Name</label>
                                      </div>
                                      <div className="col-md-8 form-group">
                                        <input
                                          type="text"
                                          id="name"
                                          className="form-control"
                                          name="fname"
                                          placeholder="Name"
                                        />
                                      </div>
                                      <div className="col-md-4">
                                        <label>Amount</label>
                                      </div>
                                      <div class="col-md-8 form-group">
                                        <div class="input-group">
                                          <span class="input-group-text">
                                            $
                                          </span>
                                          <input
                                            type="text"
                                            id="Amount-id"
                                            className="form-control"
                                            aria-label="Amount (to the nearest dollar)"
                                            name="Amount-id"
                                            placeholder="Amount"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <label>Frequency</label>
                                      </div>
                                      <div className="col-md-8 form-group">
                                        <fieldset>
                                          <select
                                            class="form-select"
                                            id="basicSelect"
                                          >
                                            <option>Monthely</option>
                                            <option>Annual</option>
                                          </select>
                                        </fieldset>
                                      </div>
                                      <div className="col-md-4">
                                        <label>Date</label>
                                      </div>
                                      <div className="col-md-8 form-group">
                                        <input
                                          type="Date"
                                          id="Date"
                                          className="form-control"
                                          name="Date"
                                          placeholder="Date"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>{" "}
                          </Modal.Body>
                          <Modal.Footer>
                            <button className="btn btn-secondary" onClick={handleClose}>
                              Close
                            </button>
                            <button className="btn btn-primary" onClick={handleClose}>
                              Add
                            </button>
                          </Modal.Footer>
                        </Modal>
                      </div>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="table-responsive card-body">
                      <table className="table table-hover mb-0">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Frequency</th>
                            <th>Date</th>
                            <th>Edit/Del</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-bold-500">Michael Right</td>
                            <td>$15/hr</td>
                            <td className="text-bold-500">UI/UX</td>
                            <td>Remote</td>
                            <td>
                              <div className="row">
                              <div className="col-2">
                                <button className="btn icon" onClick={handleShow}>
                                  <i className="bi bi-pencil-square"></i>
                                </button>
                              </div>
                              <div className="col-2">
                              <button className="btn">
                                  <i className="bi bi-trash"></i>
                                </button>
                              </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-bold-500">Morgan Vanblum</td>
                            <td>$13/hr</td>
                            <td className="text-bold-500">Graphic concepts</td>
                            <td>Remote</td>
                            <td>
                            <div className="row">
                              <div className="col-2">
                                <button className="btn icon" onClick={handleShow}>
                                  <i className="bi bi-pencil-square"></i>
                                </button>
                              </div>
                              <div className="col-2">
                              <button className="btn">
                                  <i className="bi bi-trash"></i>
                                </button>
                              </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-bold-500">Tiffani Blogz</td>
                            <td>$15/hr</td>
                            <td className="text-bold-500">Animation</td>
                            <td>Remote</td>
                            <td>
                            <div className="row">
                              <div className="col-2">
                                <button className="btn icon" onClick={handleShow}>
                                  <i className="bi bi-pencil-square"></i>
                                </button>
                              </div>
                              <div className="col-2">
                              <button className="btn">
                                  <i className="bi bi-trash"></i>
                                </button>
                              </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-bold-500">Ashley Boul</td>
                            <td>$15/hr</td>
                            <td className="text-bold-500">Animation</td>
                            <td>Remote</td>
                            <td>
                            <div className="row">
                              <div className="col-2">
                                <button className="btn icon" onClick={handleShow}>
                                  <i className="bi bi-pencil-square"></i>
                                </button>
                              </div>
                              <div className="col-2">
                              <button className="btn">
                                  <i className="bi bi-trash"></i>
                                </button>
                              </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-bold-500">Mikkey Mice</td>
                            <td>$15/hr</td>
                            <td className="text-bold-500">Animation</td>
                            <td>Remote</td>
                            <td>
                            <div className="row">
                              <div className="col-2">
                                <button className="btn icon" onClick={handleShow}>
                                  <i className="bi bi-pencil-square"></i>
                                </button>
                              </div>
                              <div className="col-2">
                              <button className="btn">
                                  <i className="bi bi-trash"></i>
                                </button>
                              </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Manage;
