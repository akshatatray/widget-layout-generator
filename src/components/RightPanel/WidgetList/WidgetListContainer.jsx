import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import navBarLayoutReducer from "../../../store/navBarLayoutSlice";
import {updateNavBarItems} from "../../../store/navBarLayoutSlice";
import AddWidgetContainer from "./AddWidgetContainer";
import EditAWidgetContainer from "./EditAWidgetContainer";
import SortableItem from "./SortableItem";
import "./WidgetList.css";
import {initialNavBarLayout} from "../../../store/initial-constants/initialNavBarLayout"

function WidgetListContainer({ title }) {
  const navBarListItems = useSelector((state) => state.navBarLayout);
  const [items, setItems] = useState(navBarListItems);
  const [addANewWidget, setAddANewWidget] = useState(false);
  const [editAWidget, setEditAWidget] = useState(false);
  const [editKey, setEditKey] = useState(0);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const dispatch = useDispatch();
  const setItemsAndState = (newItems) => {
    setItems(newItems)
    dispatch(updateNavBarItems(newItems));
    
  }

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setItemsAndState((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleAddANewWidget = () => {
    setAddANewWidget(true);
  };

  return (
    <>
      <h3 className="right-panel-heading">Edit the {title}</h3>
      <div className="widget-list">
        <div className="widget-list-title">{title}</div>
        <div className="draggable-widget-list">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              className="widgets-list"
              items={items}
              strategy={verticalListSortingStrategy}
            >
              {items.map((item) => (
                <SortableItem
                  key={item.id}
                  id={item.id}
                  item={item}
                  setEditAWidget={setEditAWidget}
                  setEditKey={setEditKey}
                  items={items}
                  setItems={setItemsAndState}
                />
              ))}
            </SortableContext>
          </DndContext>
        </div>
        {!addANewWidget && (
          <div className="add-widget-section" onClick={handleAddANewWidget}>
            <md-icon iconSet="preferMomentumDesign" name="apps_16" />
            Add a new navigation item
          </div>
        )}
        {addANewWidget && (
          <div className="add-widget-container">
            <AddWidgetContainer setAddANewWidget={setAddANewWidget} />
          </div>
        )}
        {editAWidget && (
          <div className="edit-widget-container">
            <EditAWidgetContainer
              setEditAWidget={setEditAWidget}
              editKey={editKey}
              items={items}
              setItems={setItemsAndState}
            />
          </div>
        )}
        <div
          className="reset-widget-section"
          onClick={() => {
            setItemsAndState(initialNavBarLayout);
            setAddANewWidget(false);
            setEditAWidget(false);
          }}
        >
          Reset to default
        </div>
      </div>
    </>
  );
}

export default WidgetListContainer;
