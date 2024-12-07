import React from "react";
import { useSelector } from "react-redux";
import './RightPanel.css';
import TitleEditor from "./TitleEditor/titleEditor";


const renderPanel = (props) => {
    switch(props.selectedLayout){
        case 'header-right': 
            return null;
        case 'header-left':
            return (
                <TitleEditor
                    title="Edit the header"
                />
                );
        case 'nav-block':
            return null;
        case 'widget-panel':
            return null;
    }
}

const RightPanel = () => {
    const selectedLayout = useSelector((state) => state.selectedLayout);

    const TITLE_VALUES = {
        'header-right': 'Edit the header',
        'header-left': 'Edit title and logo',
        'nav-block': 'Edit the navigation bar',
        'widget-panel': 'Edit the widget panel',
    }

    if (selectedLayout === '') {
        return (
            <div className="right-panel" style={{ justifyContent: 'center', alignItems: 'center' }}>
                <p className="empty-right-panel-text">Select an area on the Desktop preview to start
                    editing its properties.</p>
            </div>
        );
    }

    return (
        <div className="right-panel">
            {renderPanel({selectedLayout})}
        </div>
    );
};

export default RightPanel;
