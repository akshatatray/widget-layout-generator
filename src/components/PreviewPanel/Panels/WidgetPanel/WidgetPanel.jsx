import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWidgetPanelDimensions } from "../../../../store/widgetPanelDimensionsSlice";
import ReactGridLayout from "react-grid-layout";
import '../../../../../node_modules/react-grid-layout/css/styles.css';
import '../../../../../node_modules/react-resizable/css/styles.css';

const WidgetPanel = ({ isEngaged }) => {
    const widgetPanelRef = useRef(null);
    const dispatch = useDispatch();
    const config = useSelector((state) => state.previewState);
    const widgetPanelDimensions = useSelector((state) => state.widgetPanelDimensions);
    const previewState = config.previewState;
    const isTaskAreaCollapsed = config.taskCollapsed;
    const [layout, setLayout] = useState([
        { i: "a", x: 0, y: 0, w: 2, h: 4 },
        { i: "b", x: 2, y: 0, w: 2, h: 4 },
        { i: "c", x: 0, y: 2, w: 2, h: 4 },
        { i: "d", x: 2, y: 2, w: 2, h: 4 },
    ]);

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

    const onLayoutChange = (newLayout) => {
        console.log("Updated Layout:", newLayout);
        setLayout(newLayout);
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
                overflow: 'auto',
            }}
        >
            <div style={{ height: `${widgetPanelDimensions.height - 8}px` }}>
                <ReactGridLayout
                    className="layout"
                    cols={8}
                    // margin={[10, 10]}
                    rowHeight={Math.floor(widgetPanelDimensions.height / 30)}
                    width={widgetPanelDimensions.width - 8}
                    maxRows={20}
                    layout={layout}
                    onLayoutChange={onLayoutChange}
                >
                    {layout.map((item) => (
                        <div
                            key={item.i}
                            style={{ border: "1px solid black" }}
                            data-grid={item}
                        >
                            {item.i}
                        </div>
                    ))}
                </ReactGridLayout>
            </div>
        </div>
    );
};

export default WidgetPanel;
