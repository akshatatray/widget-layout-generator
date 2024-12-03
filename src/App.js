import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage/index.tsx";
import Toolbar from "./components/Toolbar";

const App = () => {
  return (
    <div className="container">
      <div className="header-container">
        Layout Editor
      </div>
      <div className="tool-bar-container">
        <Toolbar />
      </div>
      <div className="preview-panel-container">
        <LandingPage />
      </div>
      <div className="right-panel-container">
      </div>
      <div className="bottom-bar-container">
        <md-button color="blue">Save</md-button>
      </div>
    </div>
  );
};

export default App;
