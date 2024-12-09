import "@uuip/unified-ui-platform-common-components";
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTaskCollapse } from '../../../store/previewStateSlice';
import "./taskBlock.css";

const Tasks = () => {
    const [isLeftCollapsed, setIsLeftCollapsed] = useState(false);
    const taskRef = React.useRef(null);
    const dispatch = useDispatch();

    const toggle = () => {
        setIsLeftCollapsed(prevState => {
            return !prevState
        });
    }

    useEffect(() => {
        dispatch(setTaskCollapse(isLeftCollapsed));
    }, [isLeftCollapsed])

    useEffect(() => {
        if (!taskRef) {
            return undefined;
        }
        const task = taskRef?.current;
        task?.addEventListener("toggle", toggle);
        return () => {
            task?.removeEventListener("toggle", toggle);
        };
    }, []);

    return (
        <div style={{ width: "100%", height: "100%" }} className="task-area">
            <uuip-wc-collapse-area
                ref={taskRef}
                {...isLeftCollapsed ? { collapsed: true } : ""}
                direction={"left"}
                forceTogglerVisibilityOnMouseOverSelectors={`tasks`}
            >
                <div className="task-area">
                    <div className="task-area-top-section">Tasks</div>
                    <div className="task-area-bottom-section">History</div>
                </div>
            </uuip-wc-collapse-area>
        </div>
    );
};

export default Tasks;