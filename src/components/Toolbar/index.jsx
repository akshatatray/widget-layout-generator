import React from "react";
import { useDispatch } from 'react-redux';
import { setPreviewState } from '../store/previewStateSlice';
import './Toolbar.css';

const Toolbar = () => {
    const dispatch = useDispatch();

    const handlePreviewStateChange = (event) => {
        dispatch(setPreviewState(event.target.value));
    };

    const getButton = (value, label) => {
       return(
           <button 
           slot="button" 
           type="button" 
           value={`${value}`} 
           onClick={handlePreviewStateChange}>
                {`${label}`}
           </button>
       )
    };
    return (
        <div className="toolbar">
            <div className="dropdown-container">
                <p>Editing: </p>
                <div style={{ flex: 1 }}>
                    <md-dropdown></md-dropdown>
                </div>
            </div>
            <div className="tab-buttons-container">
                <md-button-group>
                    {getButton('inactive', 'Inactive')}
                    {getButton('on-a-call', 'On a call')}
                    {getButton('on-other-channels', 'On other channels')}
                </md-button-group>
            </div>
            <div className="buttons-container">
                <md-button><span slot="text">Reset this view to default</span></md-button>
                <md-button color="blue" outline><span slot="text">Preview in browser</span></md-button>
            </div>
        </div>
    );
};

export default Toolbar;
