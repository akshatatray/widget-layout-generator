import "./AddWidgetContainer.css";

import React, { useState } from "react";

function EditAWidgetContainer({ setEditAWidget, setItems, editNavItem, items }) {
  const [navigationItem, setNavigationItem] = useState(editNavItem)

  const handleEditWidget = () => {
    const newItems = items.map(data => {
      if(data.id === navigationItem.id){
        return navigationItem
      }else{
        return data
      }
    })
    setItems(newItems);
    setEditAWidget(false)
  }

  const handleLabelChange = (e) => {
    setNavigationItem({...navigationItem, name: e.target.value})
  }

  return (
    <div className="add-a-widget-container">
      <div className="heading">Edit navigation item</div>
      <div className="label">
        Label <span>*</span>
      </div>
      <md-input value={navigationItem.name} onInput={handleLabelChange} />
      <div className="label">
        Icon <span>*</span>
      </div>
      {navigationItem.icon && (
        <div className="icon-preview">
          <md-icon iconSet="preferMomentumDesign" name={`${navigationItem.icon}_20`} />
        </div>
      )}
      <div className="selection-container">
        <div className="options">Select from Momentum</div>
        <div>or</div>
        <div className="options">Upload an image</div>
      </div>
      <div className="default-selection">
        <input type="checkbox" {...(navigationItem.isChecked === true ? {checked: true} : "")} /> Set as the default landing page
      </div>
      <div className="actions">
        <md-button onClick={() => setEditAWidget(false)} color="white" outline>
          <span slot="text">Cancel</span>
        </md-button>
        <md-button onClick={handleEditWidget} {...(navigationItem.name === "" ? {disabled: true} : "")}>
          <span slot="text">Save</span>
        </md-button>
      </div>
    </div>
  );
}

export default EditAWidgetContainer;
