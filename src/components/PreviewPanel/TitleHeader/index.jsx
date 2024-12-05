import React from "react";
import './TitleHeader.css';
import { useSelector } from 'react-redux';
import DisableClick from "../../DisableClick";

export const Title = () => {
    const headerLeftLayout = useSelector((state) => state.headerLeftLayout);

    const renderComponent = (item) => {
        switch (item.name) {
            case 'logo':
                return (
                    <img
                        key={item.name}
                        src={item.source}
                        style={{ height: '22px', width: '22px' }}
                        alt="Logo"
                    />
                );
            case 'title':
                return (
                    <h3 key={item.name} className="header-left-heading">
                        {item.title}
                    </h3>
                );
            default:
                return null;
        }
    };

    return (
        <header className="header-left">
            <DisableClick layoutKey={"header-left"} />
            {headerLeftLayout.map(renderComponent)}
        </header>
    );
};

export default Title;
