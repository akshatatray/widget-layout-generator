import React, { useEffect, useState } from "react";

const TimeWidget = () => {
    const [timeBangalore, setTimeBangalore] = useState("");
    const [timeSanJose, setTimeSanJose] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const bangaloreTime = new Intl.DateTimeFormat("en-IN", {
                timeZone: "Asia/Kolkata",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
            }).format(new Date());

            const sanJoseTime = new Intl.DateTimeFormat("en-US", {
                timeZone: "America/Los_Angeles",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
            }).format(new Date());

            setTimeBangalore(bangaloreTime);
            setTimeSanJose(sanJoseTime);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.timeBox}>
                <h2 style={styles.city}>Bangalore</h2>
                <p style={styles.time}>{timeBangalore}</p>
            </div>
            <div style={styles.timeBox}>
                <h2 style={styles.city}>San Jose</h2>
                <p style={styles.time}>{timeSanJose}</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        height: "calc(100% - 33px)",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Arial', sans-serif",
    },
    timeBox: {
        textAlign: "center",
        color: "#333",
    },
    city: {
        fontSize: "1.5rem",
        margin: "0 0 10px 0",
        color: "#0078D7",
    },
    time: {
        fontSize: "1.2rem",
        fontWeight: "bold",
    },
};

export default TimeWidget;
