import React, { useState } from "react";
import Select, { components } from 'react-select';
import { iconList } from "../../../constants/iconList";
import "./AddWidgetContainer.css";

function HeaderRightEditAWidgetContainer({ setEditAWidget, setItems, editWidget, items }) {
  const [widgetItem, setWidgetItem] = useState(editWidget);
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleEditWidget = () => {
    const newItems = items.map(data => {
      if (data.id === widgetItem.id) {
        return { ...widgetItem, icon: selectedIcon.value }
      } else {
        return data
      }
    })
    setItems(newItems);
    setEditAWidget(false)
  }

  const handleLabelChange = (e) => {
    setWidgetItem({ ...widgetItem, name: e.target.value })
  }

  const Option = (props) => (
    <components.Option {...props} className="react-select-option">
      <md-icon iconSet="preferMomentumDesign" name={`${props.data.value}_16`} />
      {" "}
      <p style={{ textTransform: 'capitalize' }}>
        {props.data.label}
      </p>
    </components.Option>
  );

  return (
    <div className="add-a-widget-container">
      <div className="heading">Edit navigation item</div>
      <div className="label">
        Label <span>*</span>
      </div>
      <md-input value={widgetItem.name} onInput={handleLabelChange} />
      <div className="label">Icon <span>*</span></div>
      <Select
        value={selectedIcon}
        onChange={setSelectedIcon}
        options={iconList}
        components={{
          Option,
        }}
      />
      <div className="actions">
        <md-button onClick={() => setEditAWidget(false)} color="white" outline>
          <span slot="text">Cancel</span>
        </md-button>
        <md-button onClick={handleEditWidget} {...(widgetItem.name === "" ? { disabled: true } : "")}>
          <span slot="text">Save</span>
        </md-button>
      </div>
    </div>
  );
}

export default HeaderRightEditAWidgetContainer;
