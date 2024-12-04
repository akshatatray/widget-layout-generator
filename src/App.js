import React, { useState } from "react";
import "./App.css";
import PreviewPanel from "./components/PreviewPanel/index";
import Toolbar from "./components/Toolbar";

const App = () => {

  const [previewState, setpreviewState] = useState("inactive");

  const handlepreviewStateChange = (e) => {
    setpreviewState(e.target.value);
  };

  return (
    <div className="container">
      <div className="header-container">
        Layout Editor
      </div>
      <div className="tool-bar-container">
        <Toolbar 
          handlepreviewStateChange={handlepreviewStateChange}
        />
      </div>
      <div className="preview-panel-container">
        <PreviewPanel  
          state={previewState}
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
