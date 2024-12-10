import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateSelectedLayout } from "../../store/selectedLayoutSlice";
import './DisableClick.css';
import { updateSelectedWidget } from "../../store/selectedWidgetSlice";

const DisableClick = ({ layoutKey }) => {
    const dispatch = useDispatch();
    const selectedLayout = useSelector((state) => state.selectedLayout);

    const handleSelectedLayout = () => {
        dispatch(updateSelectedLayout({ key: layoutKey }));
        if (layoutKey !== 'widget-panel') {
            dispatch(updateSelectedWidget({ key: '' }));
        }
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
