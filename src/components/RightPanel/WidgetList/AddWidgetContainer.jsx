import './AddWidgetContainer.css'

import React, { useEffect, useState } from 'react'
import { iconList } from '../../../constants/iconList.js';
import Select, { components } from 'react-select';
import { addNewScreen } from '../../../store/widgetPanelLayoutSlice.js';
import { useDispatch } from 'react-redux';

const AddWidgetContainer = ({ setAddANewWidget, setItems, items }) => {
  const dispatch = useDispatch();
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [navigationItem, setNavigationItem] = useState({
    id: items.length + 1,
    name: "",
    icon: "",
    iconType: "momentum",
    navigateTo: "",
    align: "top",
    notificationCount: 0,
    isDraggable: true,
    isEditable: true,
    isDeletable: true,
    isLandingPage: false
  })
  const handleLabelChange = (e) => {
    setNavigationItem({ ...navigationItem, name: e.target.value })
  }
  const handleNavigateToChange = (e) => {
    setNavigationItem({ ...navigationItem, navigateTo: e.target.value })
  }
  const handleAddWidget = () => {
    setItems([...items, navigationItem]);
    dispatch(addNewScreen({ screenName: navigationItem.navigateTo }));
    setAddANewWidget(false)
  }

  useEffect(() => {
    if (selectedIcon) {
      setNavigationItem({ ...navigationItem, icon: selectedIcon.value })
    }
  }, [selectedIcon]);

  const Option = (props) => (
    <components.Option {...props} className="country-option">
      <md-icon iconSet="preferMomentumDesign" name={`${props.data.value}_20`} />
      {" "}
      {props.data.label}
    </components.Option>
  );

  return (
    <div className="add-a-widget-container">
      <div className="heading">Add a new navigation item</div>
      <div className="label">Label <span>*</span></div>
      <md-input placeholder="Enter Label" onInput={handleLabelChange} value={navigationItem.name} />
      <div className="label">Navigate To <span>*</span></div>
      <md-input placeholder="Enter Navigation (No Space, Small Characters)" onInput={handleNavigateToChange} value={navigationItem.navigateTo} />
      <div className="label">Icon <span>*</span></div>
      <Select
        value={selectedIcon}
        onChange={setSelectedIcon}
        options={iconList}
        components={{
          Option,
        }}
      />
      <div className="default-selection">
        <input type='checkbox' /> Set as the default landing page
      </div>
      <div className="actions">
        <md-button onClick={() => setAddANewWidget(false)} color="white" outline><span slot="text">Cancel</span></md-button>
        <md-button
          onClick={handleAddWidget}
          disabled={navigationItem.name === "" || navigationItem.navigateTo === "" || navigationItem.icon === ""}
        >
          <span slot="text">Add</span>
        </md-button>
      </div>
    </div>
  )
}

export default AddWidgetContainer