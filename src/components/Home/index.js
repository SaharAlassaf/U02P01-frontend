import React from "react";
import Navbar from "../../components/Navbar";
import "../../assets/css/iconly/bold.css";
import PieChartWithCustomization from "./Pie Chart with Customization";

function Home() {
  return (
    <>
      <Navbar />
      <div id="main" className="layout-navbar">
        <div id="main-content">
          <div className="page-heading">
            <h3>Home</h3>
          </div>
          <div className="page-content">
            <div className="card">
              <div className="card-header">
                <h4>Qutation</h4>
              </div>

              <div className="card-body">
                <div id="chart-visitors-profile"></div>
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
                        <h5 className="font-extrabold mb-0">$112</h5>
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
                        <h5 className="font-extrabold mb-0">$112</h5>
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
                        <h5 className="font-extrabold mb-0">$112</h5>
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
                        <tr>
                          <td className="text-bold-500">Michael Right</td>
                          <td>$15/hr</td>
                        </tr>
                        <tr>
                          <td className="text-bold-500">Morgan Vanblum</td>
                          <td>$13/hr</td>
                        </tr>
                        <tr>
                          <td className="text-bold-500">Tiffani Blogz</td>
                          <td>$15/hr</td>
                        </tr>
                        <tr>
                          <td className="text-bold-500">Ashley Boul</td>
                          <td>$15/hr</td>
                        </tr>
                        <tr>
                          <td className="text-bold-500">Mikkey Mice</td>
                          <td>$15/hr</td>
                        </tr>
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
                      <PieChartWithCustomization />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
