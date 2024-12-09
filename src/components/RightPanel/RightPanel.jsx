import React from "react";
import { useSelector } from "react-redux";
import './RightPanel.css';
import TitleEditor from "./TitleEditor/titleEditor";
import WidgetListContainer from "./WidgetList/WidgetListContainer.jsx";
import HeaderRightWidgetListContainer from "./HeaderRightWidgetList/HeaderRightWidgetListContainer"
import WidgetEditor from "./WidgetEditor/WidgetEditor.jsx";

const renderPanel = (props) => {
    switch(props.selectedLayout){
        case 'header-right': 
            return <HeaderRightWidgetListContainer title="Header" />;
        case 'header-left':
            return (
                <TitleEditor
                    title="Edit the header"
                />
                );
        case 'nav-block':
            return <WidgetListContainer title="Navigation Bar" />;
        case 'widget-panel':
            return <WidgetEditor title={"Edit the widget panel"} />;
        case '':
            return (
                <div className="right-panel" style={{ display: "flex", flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <p className="empty-right-panel-text">Select an area on the Desktop preview to start
                        editing its properties.</p>
                </div>
            );
    }
}

const RightPanel = () => {
    const selectedLayout = useSelector((state) => state.selectedLayout);

    return (
        <div className="right-panel">
            {renderPanel({selectedLayout})}
        </div>
    );
};

export default RightPanel;
