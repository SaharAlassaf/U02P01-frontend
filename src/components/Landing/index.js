import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Bill from "../../assets/img/bill.png";

function Landing() {
  return (
    <div className="landing-page">
        <div className="offset-md-2 my-sm-5">
          <div className="row">
            <div className="col-4 ">
              <p className="logo">Bell Bill</p>{" "}
              <p className="textLan">
                makes it easy to take control of your money, optimize your
                spending and grow your savings automatically.
              </p>
              <Link to="/Signup">

              <button className="butLand">
                Start Now
              </button>
              </Link>
            </div>
            <div className="col-4">
              <img className="imgLan" src={Bill} alt="logo"/>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Landing;
