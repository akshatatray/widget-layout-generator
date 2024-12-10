import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from 'react-select';
import { appendWidgetPanelLayout, deleteWidgetPanelLayout, updateWidgetPanelLayoutLabel } from "../../../store/widgetPanelLayoutSlice";
import { findPositionForBlock } from "../../../utils/findPosition";
import './WidgetEditor.css';
import WidgetEditorTemplateGrid from "./WidgetEditorTemplateGrid";
import { AppLibrary } from "../../CustomApps";

const WidgetEditor = ({ title }) => {
    const widgetPanelLayout = useSelector((state) => state.widgetPanelLayout.widgetPanelLayout);
    const selectedWidget = useSelector((state) => state.selectedWidget);
    const selectedScreen = useSelector((state) => state.selectedScreen);
    const [isPreBuiltGridSelected, setIsPreBuiltGridSelected] = useState(widgetPanelLayout[selectedScreen].length === 0);
    const [editingWidget, setEditingWidget] = useState(null);
    const [selectedApp, setSelectedApp] = useState(null);
    const dispatch = useDispatch();

    const handleWidgetDelete = (id) => dispatch(deleteWidgetPanelLayout({ screenName: selectedScreen, widgetId: id }));
    const handleUpdateLabel = (id, label) => dispatch(updateWidgetPanelLayoutLabel({ screenName: selectedScreen, widgetId: id, newLabel: label, newAppName: selectedApp.value }));

    const { blocks } = AppLibrary();

    useEffect(() => {
        if (selectedWidget) {
            setEditingWidget({ id: selectedWidget, label: widgetPanelLayout[selectedScreen].find((layout) => layout.i === selectedWidget).label });
        }
    }, [selectedWidget]);

    useEffect(() => {
        if (selectedApp) {
            console.log("selectedApp", selectedApp.value);
        }
    }, [selectedApp]);

    const renderWidgetEditBlock = () => (
        editingWidget && (
            <div className="widget-edit-block">
                <md-input
                    label={editingWidget.id ? "Edit widget" : "Add a new widget"}
                    value={editingWidget.label}
                    placeholder="Enter Label"
                    clear
                    onInput={(e) => setEditingWidget({ ...editingWidget, label: e.target.value })}
                />
                <Select
                    options={Object.keys(blocks).map((key) => ({ value: key, label: key }))}
                    value={selectedApp}
                    onChange={setSelectedApp}
                    placeholder="Select App"
                >

                </Select>
                <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: '20px' }}>
                    <md-button onClick={() => setEditingWidget(null)}>Cancel</md-button>
                    <md-button
                        onClick={() => {
                            if (editingWidget.id) {
                                handleUpdateLabel(editingWidget.id, editingWidget.label);
                            } else {
                                console.log("dispatch", selectedApp);
                                dispatch(
                                    appendWidgetPanelLayout({
                                        screenName: selectedScreen,
                                        widget: {
                                            i: `widget-${widgetPanelLayout[selectedScreen].length + 1}`,
                                            label: editingWidget.label,
                                            appName: selectedApp.value,
                                            w: 2,
                                            h: 2,
                                            x: findPositionForBlock(widgetPanelLayout[selectedScreen]).x,
                                            y: findPositionForBlock(widgetPanelLayout[selectedScreen]).y
                                        }
                                    })
                                );
                            }
                            setEditingWidget(null);
                        }}
                        color="blue"
                    >
                        {editingWidget.id ? "Update" : "Save"}
                    </md-button>
                </div>
            </div>
        )
    );

    const renderWidgetPanelLayout = () => (
        <div style={{ overflow: 'auto', maxHeight: '308px', border: '1px solid #F7F7F7', borderTop: '0', borderBottom: '0' }}>
            {widgetPanelLayout[selectedScreen].map((layout) => (
                <div key={layout.i} className="widget-panel-section">
                    {layout.label}
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
                        <md-icon
                            onClick={() => setEditingWidget({ id: layout.i, label: layout.label })}
                            iconSet="preferMomentumDesign"
                            name="edit_16"
                            color="000"
                        />
                        <md-icon
                            onClick={() => handleWidgetDelete(layout.i)}
                            iconSet="preferMomentumDesign"
                            name="delete_16"
                            color="000"
                        />
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div>
            <h3 className="right-panel-heading">{title}</h3>
            {isPreBuiltGridSelected ? (
                <>
                    <p className="right-panel-sub-heading">
                        Select your layout and the number of sections needed. You can resize, add, or remove sections later.
                    </p>
                    <WidgetEditorTemplateGrid setIsPreBuiltGridSelected={setIsPreBuiltGridSelected} />
                    <div className="switch-widget-editor-view" onClick={() => setIsPreBuiltGridSelected(false)}>
                        <md-icon iconSet="preferMomentumDesign" name="apps_16" />
                        Create custom layout
                    </div>
                </>
            ) : (
                <>
                    <div className="widget-panel-layout">
                        <div className="widget-panel-layout-header">Widgets</div>
                        {renderWidgetPanelLayout()}
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div
                            className="switch-widget-editor-view"
                            onClick={() => setEditingWidget({ id: null, label: "" })}
                        >
                            <md-icon iconSet="preferMomentumDesign" name="add_16" />
                            Add new widget
                        </div>
                        <div className="switch-widget-editor-view" onClick={() => setIsPreBuiltGridSelected(true)}>
                            <md-icon iconSet="preferMomentumDesign" name="apps_16" />
                            Choose from pre-built layouts
                        </div>
                    </div>
                    {renderWidgetEditBlock()}
                </>
            )}
        </div>
    );
};

export default WidgetEditor;
