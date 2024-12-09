import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWidgetPanelDimensions } from "../../../../store/widgetPanelDimensionsSlice";
import ReactGridLayout from "react-grid-layout";
import { updateSelectedLayout } from "../../../../store/selectedLayoutSlice";
import { updateWidgetPanelLayout } from "../../../../store/widgetPanelLayoutSlice";
import './WidgetPanel.css';
import '../../../../../node_modules/react-grid-layout/css/styles.css';
import '../../../../../node_modules/react-resizable/css/styles.css';
import { updateSelectedWidget } from "../../../../store/selectedWidgetSlice";

const WidgetPanel = ({ isEngaged }) => {
    const widgetPanelRef = useRef(null);
    const dispatch = useDispatch();
    const config = useSelector((state) => state.previewState);
    const widgetPanelDimensions = useSelector((state) => state.widgetPanelDimensions);
    const widgetPanelLayout = useSelector((state) => state.widgetPanelLayout);
    const previewState = config.previewState;
    const isTaskAreaCollapsed = config.taskCollapsed;
    const selectedLayout = useSelector((state) => state.selectedLayout);
    const selectedWidget = useSelector((state) => state.selectedWidget);

    useEffect(() => {
        if (widgetPanelRef.current) {
            const widgetPanelDimensions = {
                width: widgetPanelRef.current.offsetWidth,
                height: widgetPanelRef.current.offsetHeight,
            };
            console.log("Widget panel dimensions", widgetPanelDimensions);
            dispatch(setWidgetPanelDimensions(widgetPanelDimensions));
        }
    }, [previewState, isTaskAreaCollapsed]);

    const handleSelectedLayout = () => {
        dispatch(updateSelectedLayout({ key: 'widget-panel' }));
    };

    const onLayoutChange = (newLayout) => {
        const updatedLayout = newLayout.map((layout) => {
            const existingLayout = widgetPanelLayout.find((l) => l.i === layout.i);
            return {
                ...layout,
                label: existingLayout.label,
            };
        });
        dispatch(updateWidgetPanelLayout({ layout: updatedLayout }));
    };

    if (!isEngaged) {
        return null;
    }

    return (
        <div
            ref={widgetPanelRef}
            className="panel-block"
            style={{
                border: '2px solid #00000050',
                borderColor: selectedLayout === 'widget-panel' ? 'dodgerblue' : 'transparent',
                overflow: 'auto',
            }}
            onClick={handleSelectedLayout}
        >
            <div style={{ height: `${widgetPanelDimensions.height}px` }}>
                <ReactGridLayout
                    className="layout"
                    cols={8}
                    margin={[10, 10]}
                    rowHeight={Math.floor(widgetPanelDimensions.height / 30)}
                    width={widgetPanelDimensions.width - 8}
                    maxRows={20}
                    layout={widgetPanelLayout}
                    onLayoutChange={onLayoutChange}
                    draggableHandle=".widget-drag-handle"
                >
                    {
                        widgetPanelLayout.map((item) => (
                            <div
                                key={item.i}
                                style={{ border: `2px solid ${selectedWidget === item.i ? "dodgerBlue" : "#EDEDED"}`, backgroundColor: '#FFF', borderRadius: '8px' }}
                                data-grid={item}
                                onClick={() => dispatch(updateSelectedWidget({ key: item.i }))}
                            >
                                <div
                                    className="widget-drag-handle"
                                >
                                    {item.label}
                                </div>
                            </div>
                        ))
                    }
                </ReactGridLayout>
            </div>
        </div>
    );
};

export default WidgetPanel;
