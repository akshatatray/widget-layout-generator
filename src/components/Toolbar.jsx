import React from "react";
import './Toolbar.css';

const Toolbar = (props) => {
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
                    <button slot="button" type="button" value="inactive" onClick={props.handlePageStateChange}>Inactive</button>
                    <button slot="button" type="button" value="on-a-call" onClick={props.handlePageStateChange}>On a call</button>
                    <button slot="button" type="button" value="on-other-channels" onClick={props.handlePageStateChange}>On other channels</button>
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
