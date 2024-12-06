import React from "react";
import { useSelector } from "react-redux";
import './RightPanel.css';

const RightPanel = () => {
    const selectedLayout = useSelector((state) => state.selectedLayout);

    const TITLE_VALUES = {
        'header-right': 'Edit the header',
        'header-left': 'Edit title and logo',
        'nav-block': 'Edit the navigation bar',
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
            <h3 className="right-panel-heading">{TITLE_VALUES[selectedLayout]}</h3>
        </div>
    );
};

export default RightPanel;
