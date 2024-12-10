import React from "react";
import "./WidgetList.css";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { deleteScreen } from "../../../store/widgetPanelLayoutSlice";
import { useDispatch } from "react-redux";

function SortableItem({
  id,
  item,
  setEditAWidget,
  setEditNavItem,
  setItems,
  items,
}) {
  const dispatch = useDispatch();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      className="widget-list-item"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...(item.isDraggable ? listeners : {})}
    >
      <div className="draggable-icon">
        <md-icon
          iconSet="preferMomentumDesign"
          name="more-adr_20"
          color={item.isDraggable ? "#000000" : "#999999"}
        />
      </div>
      <div className="widget-details">
        <md-icon iconSet="preferMomentumDesign" name={`${item.icon}_20`} />
        <p>{item.name}</p>
      </div>
      <div className="customise-icons">
        <div className="edit-container">
          <md-icon
            iconSet="preferMomentumDesign"
            name="edit_16"
            color={item.isEditable ? "#000000" : "#999999"}
            onClick={() => {
              if (item.isEditable) {
                setEditNavItem(item);
                setEditAWidget(true);
              }
            }}
          />
        </div>
        <div className="delete-container">
          <md-icon
            onClick={() => {
              if (item.isDeletable) {
                const newListItems = items.filter((data) => data.id != id);
                dispatch(deleteScreen({ screenName: item.navigateTo }));
                setItems(newListItems);
              }
            }}
            iconSet="preferMomentumDesign"
            name="delete_16"
            color={item.isDeletable ? "#000000" : "#999999"}
          />
        </div>
      </div>
    </div>
  );
}

export default SortableItem;
