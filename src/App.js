import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/Signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
