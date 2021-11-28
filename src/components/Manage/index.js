import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Modal from "react-bootstrap/Modal";
import Table from "../Table/index";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;


function Manage() {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const [subs, setSubs] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        console.log("get data", res.data);
        setUser(res.data);
        setSubs(res.data.sub);
        console.log("user subs", res.data.sub);
      } else {
        console.log("user is null");
      }
    } catch (error) {
      console.log("get error", error);
    }
  };

  const deleteSub = async (id) => {
    console.log("dele", id);
    try {
      if (user) {
        const res = await axios.delete(
          `${BASE_URL}/subscr/deleteSub/${user._id}/${id}`
        );
        console.log("get data", res.data);
        setUser(res.data);
        console.log("user subs", res.data.sub);
        getProfile();
      } else {
        console.log("user is null");
      }
    } catch (error) {
      console.log("get error", error);
    }
  };

  const updateBudget = async (e) => {
    e.preventDefault();
    try {
      let newBudget = e.target.budget.value;
      console.log("newBudget", newBudget);
      document.updateBudget.reset();

      if (user) {
        const res = await axios.put(
          `${BASE_URL}/subscr/updateBudget/${user._id}`,
          { budget: newBudget }
        );
        // console.log("get data update", res.data);
        setUser(res.data);
        // console.log("data upgate", user);
      }
    } catch (error) {
      console.log("get error", error);
    }
  };

  const newSub = async (e) => {
    e.preventDefault();
    try {
      let newSubName = e.target.subName.value || undefined;
      let newAmount = e.target.amount.value || undefined;
      let newFrequency = e.target.frequency.value || undefined;
      let newSubDate = e.target.subDate.value || undefined;
      // console.log("e", newSubName, newAmount, newFrequency, newSubDate);
      document.sub.reset();

      if (user) {
        const res = await axios.post("http://localhost:5000/subscr/newSub", {
          _id: user._id,
          subName: newSubName,
          amount: newAmount,
          frequency: newFrequency,
          subDate: newSubDate,
        });
        // console.log("get data", res.data);
        setUser(res.data);
        getProfile();
        // console.log("userNav data", user);
      }
    } catch (error) {
      console.log("get error", error);
    }
  };

  const updateSub = async (e, id) => {
    e.preventDefault();
    try {
      let newSubName = e.target.subName.value || undefined;
      let newAmount = e.target.amount.value || undefined;
      let newFrequency = e.target.frequency.value || undefined;
      let newSubDate = e.target.subDate.value || undefined;
      console.log("e", newSubName, newAmount, newFrequency, newSubDate);
      console.log("id", id);

      // document.updateBudget.reset();

      if (user) {
        const res = await axios.put("http://localhost:5000/subscr/updateSub", {
          _id: id,
          subName: newSubName,
          amount: newAmount,
          frequency: newFrequency,
          subDate: newSubDate,
        });
        // console.log("get data update", res.data);
        setUser(res.data);
        getProfile();
        // console.log("data upgate", user);
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
                <h3>Manage budget</h3>
              </div>
              <section className="section">
                <div className="row" id="table-hover-row">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Subscriptions</h4>
                      </div>

                      <div className="row card-body">
                        <div className="col-6 mb-3">
                          <form name="updateBudget" onSubmit={updateBudget}>
                            <div className="input-group">
                              <input
                                type="submit"
                                value="Update Budget"
                                id="button-addon1"
                                className="btn btn-primary"
                              />
                              <input
                                type="text"
                                name="budget"
                                className="form-control"
                                aria-label="Example text with button addon"
                                aria-describedby="button-addon1"
                              />
                              <span className="input-group-text">$</span>
                            </div>
                          </form>
                        </div>
                        <div className="col-6">
                          <div className="d-flex justify-content-end">
                            <button
                              className="btn btn-primary"
                              onClick={handleShow}
                            >
                              Add new subscription
                            </button>

                            <Modal show={show} onHide={handleClose}>
                              <Modal.Header closeButton>
                                <Modal.Title>New subscription</Modal.Title>
                              </Modal.Header>
                              <form
                                name="sub"
                                className="form form-horizontal"
                                onSubmit={newSub}
                              >
                                <Modal.Body>
                                  <div className="row match-height">
                                    <div className="card-body">
                                      <div className="form-body">
                                        <div className="row">
                                          <div className="col-md-4">
                                            <label>Name</label>
                                          </div>
                                          <div className="col-md-8 form-group">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="subName"
                                              placeholder="Name"
                                            />
                                          </div>
                                          <div className="col-md-4">
                                            <label>Amount</label>
                                          </div>
                                          <div className="col-md-8 form-group">
                                            <div className="input-group">
                                              <span className="input-group-text">
                                                $
                                              </span>
                                              <input
                                                type="text"
                                                className="form-control"
                                                aria-label="Amount (to the nearest dollar)"
                                                name="amount"
                                                placeholder="Amount"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-md-4">
                                            <label>Frequency</label>
                                          </div>
                                          <div className="col-md-8 form-group">
                                            <div className="input-group">
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="frequency"
                                                placeholder="Frequency"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-md-4">
                                            <label>Date</label>
                                          </div>
                                          <div className="col-md-8 form-group">
                                            <input
                                              type="Date"
                                              className="form-control"
                                              name="subDate"
                                              placeholder="Date"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Modal.Body>
                                <Modal.Footer>
                                  <input
                                    type="submit"
                                    value="Add"
                                    id="button-add"
                                    className="btn btn-primary me-1 mb-1"
                                    onClick={handleClose}
                                  />
                                  <button
                                    type="reset"
                                    className="btn btn-light-secondary me-1 mb-1"
                                  >
                                    Reset
                                  </button>
                                </Modal.Footer>
                              </form>
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
                                <th>Edit/Delete</th>
                              </tr>
                            </thead>
                            <tbody>
                              {subs.map((item) => (
                                <Table
                                  key={item._id}
                                  sub={item}
                                  deleteSub={deleteSub}
                                  updateSub={updateSub}
                                />
                              ))}
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

export default Manage;
