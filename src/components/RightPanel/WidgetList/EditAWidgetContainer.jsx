
import Select, { components } from 'react-select';
import "./AddWidgetContainer.css";

import React, { useState } from "react";
import { iconList } from '../../../constants/iconList';

function EditAWidgetContainer({ setEditAWidget, setItems, editNavItem, items }) {
  const [navigationItem, setNavigationItem] = useState(editNavItem);
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleEditWidget = () => {
    const newItems = items.map(data => {
      if (data.id === navigationItem.id) {
        return { ...navigationItem, icon: selectedIcon.value, name: navigationItem.name, navigateTo: navigationItem.navigateTo }
      } else {
        return data
      }
    });
    setItems(newItems);
    setEditAWidget(false);
  }

  const handleLabelChange = (e) => {
    setNavigationItem({ ...navigationItem, name: e.target.value })
  }

  const Option = (props) => (
    <components.Option {...props} className="react-select-option">
      <md-icon iconSet="preferMomentumDesign" name={`${props.data.value}_20`} />
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
      <md-input value={navigationItem.name} onInput={handleLabelChange} />
      <div className="label">Icon <span>*</span></div>
      <Select
        value={selectedIcon}
        onChange={setSelectedIcon}
        options={iconList}
        defaultInputValue={`${navigationItem.icon.charAt(0).toUpperCase() + navigationItem.icon.slice(1)}`}
        components={{
          Option,
        }}
      />
      <div className="default-selection">
        <input onChange={() => { setNavigationItem({ ...navigationItem, isChecked: !navigationItem.isChecked }) }} type="checkbox" {...(navigationItem.isChecked === true ? "" : { checked: true })} /> Set as the default landing page
      </div>
      <div className="actions">
        <md-button onClick={() => setEditAWidget(false)} color="white" outline>
          <span slot="text">Cancel</span>
        </md-button>
        <md-button onClick={handleEditWidget} {...(navigationItem.name === "" ? { disabled: true } : "")}>
          <span slot="text">Save</span>
        </md-button>
      </div>
    </div>
  );
}

export default EditAWidgetContainer;
