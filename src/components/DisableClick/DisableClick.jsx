import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateSelectedLayout } from "../../store/selectedLayoutSlice";
import './DisableClick.css';

const DisableClick = ({ layoutKey }) => {
    const dispatch = useDispatch();
    const selectedLayout = useSelector((state) => state.selectedLayout);

    const handleSelectedLayout = () => {
        dispatch(updateSelectedLayout({ key: layoutKey }));
    };

    return (
        <div
            onClick={handleSelectedLayout}
            className="disable-click-outer"
            style={{
                borderColor: selectedLayout === layoutKey ? 'dodgerblue' : 'transparent',
            }}
        />
    );
};

export default DisableClick;
