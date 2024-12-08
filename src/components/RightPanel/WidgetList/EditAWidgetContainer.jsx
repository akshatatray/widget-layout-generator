import "./AddWidgetContainer.css";

import React, { useState } from "react";

function EditAWidgetContainer({ setEditAWidget, editKey, items, setItems }) {
  const presentEditListItem = items.filter((data) => data.id === editKey)[0];
  const [selectedIcon, setSelectedIcon] = useState(
    presentEditListItem ? presentEditListItem.icon : ""
  );

  console.log(presentEditListItem);
  return (
    <div className="add-a-widget-container">
      <div className="heading">Edit navigation item</div>
      <div className="label">
        Label <span>*</span>
      </div>
      <md-input value={presentEditListItem.name} />
      <div className="label">
        Icon <span>*</span>
      </div>
      {selectedIcon && (
        <div className="icon-preview">
          <md-icon iconSet="preferMomentumDesign" name="home_16" />
        </div>
      )}
      <div className="selection-container">
        <div className="options">Select from Momentum</div>
        <div>or</div>
        <div className="options">Upload an image</div>
      </div>
      <div className="default-selection">
        <input type="checkbox" /> Set as the default landing page
      </div>
      <div className="actions">
        <md-button onClick={() => setEditAWidget(false)} color="white" outline>
          <span slot="text">Cancel</span>
        </md-button>
        <md-button disabled>
          <span slot="text">Save</span>
        </md-button>
      </div>
    </div>
  );
}

export default EditAWidgetContainer;
