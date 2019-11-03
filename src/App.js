import React from "react";
import "./App.css";
import Rchips from "./components/Rchips";

const App = () => {
  return (
    <div className="container">
      <br />
      <div className="card">
        <div className="card-header">
          <h3 className="title">Pick the chips from the list</h3>
        </div>
        <div className="card-body">
          <Rchips />
        </div>
      </div>
    </div>
  );
};

export default App;
