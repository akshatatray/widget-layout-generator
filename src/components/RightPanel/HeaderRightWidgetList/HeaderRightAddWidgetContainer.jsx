import "./AddWidgetContainer.css";

import React, { useState } from "react";

function HeaderRightAddWidgetContainer({ setAddANewWidget, setItems, items }) {
  const [selectedIcon, setSelectedIcon] = useState("");
  const [navigationItem, setNavigationItem] = useState({
    id: items.length + 1,
    type: "circle-button",
    name: "",
    iconName: "home_20",
    label: "",
    iconSet: "preferMomentumDesign",
    isDraggable: true,
    isEditable: true,
    isDeletable: true,
  });
  const handleLabelChange = (e) => {
    setNavigationItem({ ...navigationItem, name: e.target.value });
  };
  const handleAddWidget = () => {
    setItems([...items, navigationItem]);
    setAddANewWidget(false);
  };
  return (
    <div className="add-a-widget-container">
      <div className="heading">Add a new header widget</div>
      <div className="label">
        Label <span>*</span>
      </div>
      <md-input onInput={handleLabelChange} value={navigationItem.name} />
      <div className="label">
        Icon <span>*</span>
      </div>
      
        <div className="icon-preview">
          <md-icon iconSet="preferMomentumDesign" name="home_20" />
        </div>
      
      <div className="selection-container">
        <div className="options">Select from Momentum</div>
        <div>or</div>
        <div className="options">Upload an image</div>
      </div>
      <div className="actions">
        <md-button
          onClick={() => setAddANewWidget(false)}
          color="white"
          outline
        >
          <span slot="text">Cancel</span>
        </md-button>
        <md-button
          onClick={handleAddWidget}
          {...(navigationItem.name === "" ? { disabled: true } : "")}
        >
          <span slot="text">Add</span>
        </md-button>
      </div>
    </div>
  );
}

export default HeaderRightAddWidgetContainer;
