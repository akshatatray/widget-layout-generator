import { iconList } from "../../../constants/iconList";
import Select, { components } from 'react-select';
import "./AddWidgetContainer.css";

import React, { useState } from "react";

function HeaderRightAddWidgetContainer({ setAddANewWidget, setItems, items }) {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [navigationItem, setNavigationItem] = useState({
    id: items.length + 1,
    type: "circle-button",
    name: "",
    iconName: "",
    label: "",
    iconSet: "momentum",
    isDraggable: true,
    isEditable: true,
    isDeletable: true,
  });

  const handleLabelChange = (e) => {
    setNavigationItem({ ...navigationItem, name: e.target.value });
  };
  const handleAddWidget = () => {
    setItems([...items, { ...navigationItem, iconName: selectedIcon.value }]);
    setAddANewWidget(false);
  };

  const Option = (props) => (
    <components.Option {...props} className="country-option">
      <md-icon iconSet="preferMomentumDesign" name={`${props.data.value}_16`} />
      {" "}
      {props.data.label}
    </components.Option>
  );

  return (
    <div className="add-a-widget-container">
      <div className="heading">Add a new header widget</div>
      <div className="label">
        Label <span>*</span>
      </div>
      <md-input onInput={handleLabelChange} value={navigationItem.name} />
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
