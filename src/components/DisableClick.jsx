import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateSelectedLayout } from "../store/selectedLayoutSlice";
import './DisableClick.css';

const DisableClick = ({ layoutKey }) => {
    const dispatch = useDispatch();
    const selectedLayout = useSelector((state) => state.selectedLayout);

    const componentRef = useRef(null);

    const handleSelectedLayout = () => {
        dispatch(updateSelectedLayout({ key: layoutKey }));
    };

    const handleClickOutside = (event) => {
        if (componentRef.current && !componentRef.current.contains(event.target)) {
            dispatch(updateSelectedLayout({ key: '' }));
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div
            ref={componentRef}
            onClick={handleSelectedLayout}
            className="disable-click-outer"
            style={{
                borderColor: selectedLayout === layoutKey ? 'dodgerblue' : '#FFF',
            }}
        />
    );
};

export default DisableClick;
