import React from "react";
import { useSelector } from 'react-redux';
import DisableClick from "../../DisableClick/DisableClick";
import './AdvancedHeader.css';

export const AdvancedHeader = () => {
    const headerRightLayout = useSelector((state) => state.headerRightLayout);

    const renderComponent = (item) => {
        switch (item.type) {
            case 'circle-button':
                return (
                    <md-button key={item.key} circle size="24" color="white">
                        {
                            item?.iconSet ? (
                                <md-icon slot="icon" iconSet={item?.iconSet} name={item.iconName.endsWith('_16') ? item.iconName : `${item.iconName}_16`}></md-icon>
                            ) : (
                                <md-icon slot="icon" name={item.iconName.endsWith('_16') ? item.iconName : `${item.iconName}_16`}></md-icon>
                            )
                        }
                    </md-button>
                );
            case 'state-button':
                return (
                    <md-button
                        key={item.key}
                        variant={item.variant}
                        size="24"
                        className="status-state-button"
                    >
                        <div className="status-button__children">
                            <div className="status-button">
                                <span className="status-indicator-container">
                                    <md-icon
                                        slot="icon"
                                        name="unread-filled"
                                        size="10"
                                        iconSet="momentumDesign"
                                        color="var(--avatar-presence-active)"
                                    ></md-icon>
                                </span>
                                <span className={`status-label ${item.variant}`}>{item.label}</span>
                            </div>
                            <div className="status-button">
                                <span className="status-time">10:11</span>
                                <md-icon
                                    className="status-arrow"
                                    size="10"
                                    name="arrow-down-bold"
                                    iconSet="momentumDesign"
                                ></md-icon>
                            </div>
                        </div>
                    </md-button>
                );
            case 'avatar':
                return (
                    <md-avatar
                        key={item.key}
                        alt="avatar"
                        title={item.title}
                        size="24"
                    ></md-avatar>
                );
            default:
                return null;
        }
    };

    return (
        <header className="header-right">
            <DisableClick layoutKey={"header-right"} />
            {headerRightLayout.map(renderComponent)}
        </header>
    );
};
