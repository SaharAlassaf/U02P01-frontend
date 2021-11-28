import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function Table({ sub, deleteSub, updateSub }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <tr key={sub._id}>
        <td className="text-bold-500">{sub.subName}</td>
        <td>${sub.amount}</td>
        <td className="text-bold-500">{sub.frequency}</td>
        <td>{sub.subDate}</td>
        <td>
          <div className="row">
            <div className="col-2">
              <button className="btn icon" onClick={handleShow}>
                <i className="bi bi-pencil-square"></i>
              </button>
            </div>
            <div className="col-2">
              <button onClick={() => deleteSub(sub._id)} className="btn">
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </div>
        </td>
      </tr>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New subscription</Modal.Title>
        </Modal.Header>
        <form name="sub" className="form form-horizontal" onSubmit={(e) => updateSub(e, sub._id)}>
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
                        <span className="input-group-text">$</span>
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
            <button type="reset" className="btn btn-light-secondary me-1 mb-1">
              Reset
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default Table;
