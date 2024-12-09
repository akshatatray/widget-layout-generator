import React from "react";
import './WidgetEditor.css';
import WidgetEditorTemplateGrid from "./WidgetEditorTemplateGrid";

const WidgetEditor = ({ title }) => {
    return (
        <div>
            <h3 className="right-panel-heading">{title}</h3>
            <p className="right-panel-sub-heading">Select your layout and the number of sections needed. You can resize, add, or remove sections later.</p>
            <WidgetEditorTemplateGrid />
        </div>
    );
};

export default WidgetEditor;
