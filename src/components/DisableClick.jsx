import React, { useState } from "react";

const DisableClick = () => {
    const [selected, setSelected] = useState(false);

    return (
        <div
            onFocus={() => setSelected(true)}
            onClick={() => setSelected(true)}
            onBlur={() => setSelected(false)}
            style={{
                zIndex: 500,
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                border: `${selected ? 4 : 0}px solid black`,
            }}
        />
    );
};

export default DisableClick;
