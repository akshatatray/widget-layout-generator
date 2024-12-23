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
import {updateHeaderRightItems} from "../../../store/headerRightLayoutSlice";
import HeaderRightAddWidgetContainer from "./HeaderRightAddWidgetContainer";
import HeaderRightEditAWidgetContainer from "./HeaderRightEditAWidgetContainer";
import HeaderRightSortableItem from "./HeaderRightSortableItem";
import "./HeaderRightWidgetList.css";
import {initialRightHeaderLayout} from "../../../store/initial-constants/initialRightHeaderLayout"

function HeaderRightWidgetListContainer({ title }) {
  const headerLeftListItems = useSelector((state) => state.headerRightLayout);
  const [items, setItems] = useState(headerLeftListItems);
  const [addANewWidget, setAddANewWidget] = useState(false);
  const [editAWidget, setEditAWidget] = useState(false);
  const [editWidget, setEditWidget] = useState({});
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateHeaderRightItems(items));
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
                <HeaderRightSortableItem
                  key={item.id}
                  id={item.id}
                  item={item}
                  setEditAWidget={setEditAWidget}
                  setEditWidget={setEditWidget}
                  items={items}
                  setItems={setItems}
                />
              ))}
            </SortableContext>
          </DndContext>
        </div>
        {!addANewWidget && !editAWidget && (
          <div className="add-widget-section" onClick={handleAddANewWidget}>
            <md-icon iconSet="preferMomentumDesign" name="apps_16" />
            Add a new widget
          </div>
        )}
        {addANewWidget && (
          <div className="add-widget-container">
            <HeaderRightAddWidgetContainer setAddANewWidget={setAddANewWidget} setItems={setItems} items={items}  />
          </div>
        )}
        {editAWidget && (
          <div className="edit-widget-container">
            <HeaderRightEditAWidgetContainer
              setEditAWidget={setEditAWidget}
              editWidget={editWidget}
              setItems={setItems}
              items={items}
            />
          </div>
        )}
        <div
          className="reset-widget-section"
          onClick={() => {
            setItems(initialRightHeaderLayout);
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

export default HeaderRightWidgetListContainer;
