import React, { useState } from "react";
import "./App.css";
import PreviewPanel from "./components/PreviewPanel/index";
import Toolbar from "./components/Toolbar";

const App = () => {

  const [pageState, setPageState] = useState("inactive");

  const handlePageStateChange = (e) => {
    setPageState(e.target.value);
  };

  return (
    <div className="container">
      <div className="header-container">
        Layout Editor
      </div>
      <div className="tool-bar-container">
        <Toolbar 
          handlePageStateChange={handlePageStateChange}
        />
      </div>
      <div className="preview-panel-container">
        <PreviewPanel  
          state={pageState}
        />
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
