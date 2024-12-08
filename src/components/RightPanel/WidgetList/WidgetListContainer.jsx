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
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { useState } from "react";
import "./WidgetList.css";

function SortableItem({ id, item }) {
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
        <md-icon iconSet="preferMomentumDesign" name="more-adr_20" color={item.isDraggable ? '#000000' : '#999999'} />
      </div>
      <div className="widget-details">
        <md-icon iconSet="preferMomentumDesign" name={item.icon} />
        <p>{item.name}</p>
      </div>
      <div className="customise-icons">
        <div className="edit-container">
          <md-icon iconSet="preferMomentumDesign" name="edit_16" color={item.isEditable ? '#000000' : '#999999'} />
        </div>
        <div className="delete-container">
          <md-icon iconSet="preferMomentumDesign" name="delete_16" color={item.isDeletable ? '#000000' : '#999999'} />
        </div>
      </div>
    </div>
  );
}

const listItems = [
  {
    id: 1,
    name: "Entertainment",
    icon: "home_16",
    isDraggable: true,
    isEditable: true,
    isDeletable: true,
  },
  {
    id: 2,
    name: "Analytics",
    icon: "analysis_16",
    isDraggable: false,
    isEditable: false,
    isDeletable: false,
  }
];

function WidgetListContainer() {
  const [items, setItems] = useState(listItems);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="widget-list">
      <div className="widget-list-title">Naviation Bar</div>
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
              <SortableItem key={item.id} id={item.id} item={item} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
      <div className="add-and-reset-section">
        <div className="add-widget-section">
          <md-icon iconSet="preferMomentumDesign" name='apps_16' />
          Add a new navigation item
        </div>
        <div className="reset-widget-section">
          Reset to default
        </div>
      </div>
    </div>
  );
}

export default WidgetListContainer;
