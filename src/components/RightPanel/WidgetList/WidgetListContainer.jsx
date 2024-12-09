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
import React, { useState, useEffect } from "react";
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
  const [items, setItems] = useState(title === 'Navigation Bar' ? navBarListItems : null);
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

  useEffect(() => {
    dispatch(updateNavBarItems(items));
  }, [items, dispatch]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        const newArray = arrayMove(items, oldIndex, newIndex);
        return newArray
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
                  setItems={setItems}
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
            <AddWidgetContainer setAddANewWidget={setAddANewWidget} setItems={setItems} items={items}  />
          </div>
        )}
        {editAWidget && (
          <div className="edit-widget-container">
            <EditAWidgetContainer
              setEditAWidget={setEditAWidget}
              editKey={editKey}
              items={items}
              setItems={setItems}
            />
          </div>
        )}
        <div
          className="reset-widget-section"
          onClick={() => {
            setItems(initialNavBarLayout);
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
