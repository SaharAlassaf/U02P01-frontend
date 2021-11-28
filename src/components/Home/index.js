import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import "../../assets/css/iconly/bold.css";
import PieChartWithCustomization from "../../assets/js/Pie Chart with Customization";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;


function Home() {
  const [user, setUser] = useState(null);
  const [budget, setBudget] = useState(0);
  const [subs, setSubs] = useState([]);
  const [daysLeft, setDaysLeft] = useState([]);

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
        setSubs(res.data.sub);
        setBudget(res.data.budget);

        let addArr = subs.map((element) => {
          let addDate = new Date(element.subDate);
          if (element.frequency === "monthely") {
            let d = new Date(addDate);
            let year = d.getFullYear();
            let month = d.getMonth();
            let day = d.getDate();
            addDate = new Date(year, month + 1, day);
    
            const date2 = new Date();
            const date1 = new Date(addDate);
            const diffTime = Math.abs(date2 - date1);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
            return { ...element, diffDays };

          } else if (element.frequency === "annual") {
            let d = new Date(addDate);
            let year = d.getFullYear();
            let month = d.getMonth();
            let day = d.getDate();
            addDate = new Date(year + 1, month, day);
            const date1 = new Date(addDate);
            const date2 = new Date();
            const diffTime = Math.abs(date2 - date1);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
            return { ...element, diffDays };
        }});

        setDaysLeft(addArr)


        // console.log("userNav data", storage);
      }
    } catch (error) {
      console.log("get error", error);
    }
  };

  const days = () => {
    let addArr = subs.map((element) => {
      let addDate = new Date(element.subDate);
      if (element.frequency === "monthely") {
        let d = new Date(addDate);
        let year = d.getFullYear();
        let month = d.getMonth();
        let day = d.getDate();
        addDate = new Date(year, month + 1, day);
        // let formatted_date =
        //   addDate.getDate() +
        //   "-" +
        //   (addDate.getMonth() + 1) +
        //   "-" +
        //   addDate.getFullYear();

        const date2 = new Date();
        const date1 = new Date(addDate);
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        return { ...element, diffDays };
      } else if (element.frequency === "annual") {
        let d = new Date(addDate);
        let year = d.getFullYear();
        let month = d.getMonth();
        let day = d.getDate();
        addDate = new Date(year + 1, month, day);
        const date1 = new Date(addDate);
        const date2 = new Date();
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        return { ...element, diffDays };
      } else {
        return "X";
      }
    });
    setDaysLeft(addArr)
    // console.log("addArr", addArr);
  };

  return (
    <>
      {user ? (
        <>
          <Navbar user={user} />

          <div id="main" className="layout-navbar">
            <div id="main-content">
              <div className="page-heading">
                <h3>Home</h3>
              </div>
              <div className="page-content">
                <div className="card">

                  <div className="card-body">
                    <div id="chart-visitors-profile">
                      <h2>Save more, spend smarter, and make your money go further</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 col-lg-4 col-md-6">
                    <div className="card">
                      <div className="card-body px-3 py-4-5">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="stats-icon blue">
                              <i className="iconly-boldWallet"></i>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <h6 className="text-muted font-semibold">Budget</h6>
                            <h5 className="font-extrabold mb-0">${budget}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-4 col-md-6">
                    <div className="card">
                      <div className="card-body px-3 py-4-5">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="stats-icon red">
                              <i className="iconly-boldArrow---Down-2"></i>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <h6 className="text-muted font-semibold">Spent</h6>
                            <h5 className="font-extrabold mb-0">
                              $
                              {subs.reduce(function (sum, current) {
                                return sum + current.amount;
                              }, 0)}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-4 col-md-6">
                    <div className="card">
                      <div className="card-body px-3 py-4-5">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="stats-icon green">
                              <i className="iconly-boldStar"></i>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <h6 className="text-muted font-semibold">
                              Available to Spend
                            </h6>
                            <h5 className="font-extrabold mb-0">
                              $
                              {budget -
                                subs.reduce(function (sum, current) {
                                  return sum + current.amount;
                                }, 0)}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="card">
                      <div className="card-header">
                        <h4>Subscriptions</h4>
                      </div>
                      <div className="table-responsive">
                        <table className="table table-lg">
                          <thead>
                            <tr>
                              <th>Subscription name</th>
                              <th>Days left</th>
                            </tr>
                          </thead>
                          <tbody>
                            {daysLeft.map((name) => (
                              <tr key={name._id}>
                                <td className="text-bold-500">
                                  {name.subName}
                                </td>
                                <td>{name.diffDays} days</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="card-body">
                        <div id="chart-visitors-profile"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="card">
                      <div className="card-header">
                        <h4>Spending Breakdown</h4>
                      </div>
                      <div className="card-body">
                        <div id="chart-profile-visit">
                          <PieChartWithCustomization sub={subs}/>
                        </div>
                      </div>
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

export default Home;
