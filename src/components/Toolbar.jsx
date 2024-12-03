import React from "react";
import './Toolbar.css';

const Toolbar = () => {
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
                    <button slot="button" type="button" value="inactive">Inactive</button>
                    <button slot="button" type="button" value="on-a-call">On a call</button>
                    <button slot="button" type="button" value="on-other-channels">On other channels</button>
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
