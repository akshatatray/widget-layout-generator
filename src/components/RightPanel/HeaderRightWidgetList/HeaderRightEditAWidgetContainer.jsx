import "./AddWidgetContainer.css";

import React, { useState } from "react";

function HeaderRightEditAWidgetContainer({ setEditAWidget, setItems, editWidget, items }) {
  const [widgetItem, setWidgetItem] = useState(editWidget)

  const handleEditWidget = () => {
    const newItems = items.map(data => {
      if(data.id === widgetItem.id){
        return widgetItem
      }else{
        return data
      }
    })
    setItems(newItems);
    setEditAWidget(false)
  }

  const handleLabelChange = (e) => {
    setWidgetItem({...widgetItem, name: e.target.value})
  }

  return (
    <div className="add-a-widget-container">
      <div className="heading">Edit navigation item</div>
      <div className="label">
        Label <span>*</span>
      </div>
      <md-input value={widgetItem.name} onInput={handleLabelChange} />
      <div className="label">
        Icon <span>*</span>
      </div>
       
        <div className="icon-preview">
          <md-icon iconSet="preferMomentumDesign" name={widgetItem.iconName ? widgetItem.iconName : 'home_20'} />
        </div>
      
      <div className="selection-container">
        <div className="options">Select from Momentum</div>
        <div>or</div>
        <div className="options">Upload an image</div>
      </div>
      <div className="actions">
        <md-button onClick={() => setEditAWidget(false)} color="white" outline>
          <span slot="text">Cancel</span>
        </md-button>
        <md-button onClick={handleEditWidget} {...(widgetItem.name === "" ? {disabled: true} : "")}>
          <span slot="text">Save</span>
        </md-button>
      </div>
    </div>
  );
}

export default HeaderRightEditAWidgetContainer;
