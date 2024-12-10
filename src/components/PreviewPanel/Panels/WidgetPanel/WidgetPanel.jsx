import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWidgetPanelDimensions } from "../../../../store/widgetPanelDimensionsSlice";
import ReactGridLayout from "react-grid-layout";
import { updateSelectedLayout } from "../../../../store/selectedLayoutSlice";
import { updateWidgetPanelLayout } from "../../../../store/widgetPanelLayoutSlice";
import './WidgetPanel.css';
import '../../../../../node_modules/react-grid-layout/css/styles.css';
import '../../../../../node_modules/react-resizable/css/styles.css';
import { updateSelectedWidget } from "../../../../store/selectedWidgetSlice";
import { AppLibrary } from "../../../CustomApps";

const WidgetPanel = () => {
    const widgetPanelRef = useRef(null);
    const dispatch = useDispatch();
    const config = useSelector((state) => state.previewState);
    const widgetPanelDimensions = useSelector((state) => state.widgetPanelDimensions);
    const widgetPanelLayout = useSelector((state) => state.widgetPanelLayout.widgetPanelLayout);
    const previewState = config.previewState;
    const isTaskAreaCollapsed = config.taskCollapsed;
    const selectedLayout = useSelector((state) => state.selectedLayout);
    const selectedWidget = useSelector((state) => state.selectedWidget);
    const selectedScreen = useSelector((state) => state.selectedScreen);

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
            const existingLayout = widgetPanelLayout[selectedScreen].find((l) => l.i === layout.i);
            return {
                ...layout,
                label: existingLayout.label,
                appName: existingLayout.appName,
            };
        });
        dispatch(updateWidgetPanelLayout({ screenName: selectedScreen, widgets: updatedLayout }));
    };

    const { blocks } = AppLibrary();

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
                    layout={widgetPanelLayout[selectedScreen]}
                    onLayoutChange={onLayoutChange}
                    draggableHandle=".widget-drag-handle"
                >
                    {
                        widgetPanelLayout[selectedScreen].map((item) => (
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
                                {blocks[item.appName]}
                            </div>
                        ))
                    }
                </ReactGridLayout>
            </div>
        </div>
    );
};

export default WidgetPanel;
