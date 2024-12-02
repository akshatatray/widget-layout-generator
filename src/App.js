import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="header-container">
        Layout Editor
      </div>
      <div className="tool-bar-container">
        <md-tabs>
          <md-tab slot="tab">
            Inactive
          </md-tab>
          <md-tab slot="tab">
            On a call
          </md-tab>
          <md-tab slot="tab">
            On other channel
          </md-tab>
        </md-tabs>
      </div>
      <div className="preview-panel-container">
      </div>
      <div className="right-panel-container">
      </div>
      <div className="bottom-bar-container">
        <md-button variant="green">Save</md-button>
      </div>
    </div>
  );
};

export default App;
