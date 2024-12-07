import React, { useEffect, useRef } from "react";
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
                    margin={[10, 10]}
                    rowHeight={32}
                    width={widgetPanelDimensions.width - 8}
                    maxRows={Math.floor(widgetPanelDimensions.height / 44)}
                >
                    <div key="a" style={{ border: '1px solid black' }} data-grid={{ x: 0, y: 0, w: 2, h: 2 }}>
                        a
                    </div>
                    <div key="b" style={{ border: '1px solid black' }} data-grid={{ x: 2, y: 0, w: 2, h: 2 }}>
                        b
                    </div>
                    <div key="c" style={{ border: '1px solid black' }} data-grid={{ x: 0, y: 2, w: 2, h: 2 }}>
                        c
                    </div>
                    <div key="d" style={{ border: '1px solid black' }} data-grid={{ x: 2, y: 2, w: 2, h: 2 }}>
                        d
                    </div>
                </ReactGridLayout>
            </div>
        </div>
    );
};

export default WidgetPanel;
