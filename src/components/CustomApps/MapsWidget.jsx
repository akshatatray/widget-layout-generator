import React from "react";

const MapsWidget = () => {
    const styles = {
        mapsWrapper: {
            background: '#fff',
            position: 'relative',
            height: 'calc(100% - 53px)',
            padding: '10px',
        },
        iframe: {
            border: 0,
            position: 'relative',
            zIndex: 2,
            height: '100%',
            width: '100%',
        },
        link: {
            color: 'rgba(0,0,0,0)',
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: 0,
        },
    };

    return (
        <div style={styles.mapsWrapper}>
            <iframe
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Cisco%20Bangalore&zoom=15&maptype=roadmap"
                style={styles.iframe}
            ></iframe>
            <a href="https://fnfmods.net/week-8/" style={styles.link}>Week 8</a>
        </div>
    );
};

export default MapsWidget;
