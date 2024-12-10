import React, { useEffect } from "react";
import "./App.css";
import PreviewPanel from "./components/PreviewPanel/index";
import Toolbar from "./components/Toolbar";
import "@uuip/unified-ui-platform-common-components"
import RightPanel from "./components/RightPanel/RightPanel";

const App = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("id", "imi-controller-bundle");
    script.setAttribute("type", "text/html");
    script.setAttribute("src", "./widgets/timer.js");
    document.body.appendChild(script);
  }, []);

  return (
    <div className="container">
      <div className="header-container">
        Layout Editor
      </div>
      <div className="tool-bar-container">
        <Toolbar />
      </div>
      <div className="preview-panel-container">
        <PreviewPanel/>
      </div>
      <div className="right-panel-container">
        <RightPanel />
      </div>
      <div className="bottom-bar-container">
        <md-button color="blue">Save</md-button>
      </div>
    </div>
  );
};

export default App;
