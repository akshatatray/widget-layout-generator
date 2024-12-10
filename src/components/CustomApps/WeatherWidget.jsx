import React, { useEffect, useState } from "react";

const WeatherWidget = () => {
    const [weatherBangalore, setWeatherBangalore] = useState(null);
    const [weatherSanJose, setWeatherSanJose] = useState(null);

    const fetchWeather = async (city, setWeather) => {
        const url = `https://wttr.in/${city}?format=j1`; // JSON response format

        try {
            const response = await fetch(url);
            const data = await response.json();
            setWeather({
                temp: data.current_condition[0].temp_C,
                condition: data.current_condition[0].weatherDesc[0].value,
            });
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    useEffect(() => {
        fetchWeather("Bangalore", setWeatherBangalore);
        fetchWeather("San Jose", setWeatherSanJose);
    }, []);

    const renderWeather = (weather, city) => {
        if (!weather) return <p>Loading...</p>;

        return (
            <div style={styles.weatherBox}>
                <h2 style={styles.city}>{city}</h2>
                <p style={styles.temp}>{weather.temp}°C</p>
                <p style={styles.condition}>{weather.condition}</p>
            </div>
        );
    };

    return (
        <div style={styles.container}>
            {renderWeather(weatherBangalore, "Bangalore")}
            {renderWeather(weatherSanJose, "San Jose")}
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
    weatherBox: {
        textAlign: "center",
        color: "#333",
    },
    city: {
        fontSize: "1.5rem",
        margin: "0 0 10px 0",
        color: "#0078D7",
    },
    temp: {
        fontSize: "1.2rem",
        fontWeight: "bold",
    },
    condition: {
        fontSize: "1rem",
        textTransform: "capitalize",
        color: "#555",
    },
};

export default WeatherWidget;
