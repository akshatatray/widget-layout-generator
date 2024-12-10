import React from "react";
import "./App.css";
import PreviewPanel from "./components/PreviewPanel/index";
import Toolbar from "./components/Toolbar";
import "@uuip/unified-ui-platform-common-components"
import RightPanel from "./components/RightPanel/RightPanel";
import { useSelector } from "react-redux";
import { formatJSON } from "./utils/formatFinalJSON";
import { saveAs } from 'file-saver';

const App = () => {
  const headerRightLayout = useSelector((state) => state.headerRightLayout);
  const headerLeftLayout = useSelector((state) => state.headerLeftLayout);
  const widgetPanelLayout = useSelector((state) => state.widgetPanelLayout.widgetPanelLayout);
  const navBarLayout = useSelector((state) => state.navBarLayout);

  const handleSave = () => {
    const layout = {
      headerRight: headerRightLayout,
      headerLeft: headerLeftLayout,
      widgetPanel: widgetPanelLayout,
      navBar: navBarLayout,
    };
    const formattedLayout = formatJSON(layout);
    const blob = new Blob([JSON.stringify(formattedLayout, null, 2)], { type: 'application/json' });
    saveAs(blob, 'layout.json');
  };

  return (
    <div className="container">
      <div className="header-container">
        Layout Editor
      </div>
      <div className="tool-bar-container">
        <Toolbar />
      </div>
      <div className="preview-panel-container">
        <PreviewPanel />
      </div>
      <div className="right-panel-container">
        <RightPanel />
      </div>
      <div className="bottom-bar-container">
        <md-button onClick={() => handleSave()} color="blue">Save</md-button>
      </div>
    </div>
  );
};

export default App;
