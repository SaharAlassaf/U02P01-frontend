import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Manage from "./components/Manage"
import Profile from "./components/Profile"
import Help from "./components/Help"



function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route exact path="/Signin" element={<Signin />} />
        <Route exact path="/Signup" element={<Signup />} />
        {/* <Route exact path="/Navbar" element={<Navbar />} /> */}
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Manage" element={<Manage />} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/Help" element={<Help />} />
      </Routes>
    </>
  );
}

export default App;
