import { Badge } from '@momentum-design/components/react';
import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="header-container">
      <Badge type="dot" icon-name="" counter="" max-counter="" variant="" aria-label=""></Badge> Heading
      </div>
      <div className="tool-bar-container">
        Toolbar
      </div>
      <div className="preview-panel-container">
        Preview Panel
      </div>
      <div className="right-panel-container">
        Right Panel
      </div>
      <div className="bottom-bar-container">
        Bottom Bar
      </div>
    </div>
  );
};

export default App;
