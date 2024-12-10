import React, { useState, useEffect } from 'react';

const TimeWidget = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', textAlign: 'center' }}>
            <h2>Current Time</h2>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
};

export default TimeWidget;