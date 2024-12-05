import React, { useState, useEffect } from 'react';
import "@uuip/unified-ui-platform-common-components"
import "./taskBlock.css";
import { useDispatch } from 'react-redux';
import { setTaskCollapse } from '../../../store/previewStateSlice';

const Tasks = () => {
    const [isLeftCollapsed, setIsLeftCollapsed] = useState(false);
    const taskRef = React.useRef(null);
    const dispatch = useDispatch();

    const toggle = () => {
        
        setIsLeftCollapsed(prevState => {
            
            return !prevState});
        
       
    }
    useEffect(() => {
        console.log("Toggle---", isLeftCollapsed)
        dispatch(setTaskCollapse(isLeftCollapsed));
    }, [isLeftCollapsed])

    useEffect(() => {
        if (!taskRef) {
            return undefined;
          }
          const task = taskRef?.current;
          console.log("Task---", task)
          task?.addEventListener("toggle", toggle);
          return () => {
            task?.removeEventListener("toggle", toggle);
          };
    }, [])

    return (
        <>
        <div style={{width:"100%", height: "100%"}} className="task-area">
        <uuip-wc-collapse-area
        ref={taskRef}
        {...isLeftCollapsed ? {collapsed: true}: ""}
        direction={"left"}
        forceTogglerVisibilityOnMouseOverSelectors={`tasks`}

        >
        <div>
            <h1>No Tasks</h1>
        </div>
        </uuip-wc-collapse-area>
        </div>
        </>
    );
};

export default Tasks;