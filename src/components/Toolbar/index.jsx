import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setPreviewState } from "../../store/previewStateSlice";
import './Toolbar.css';
import { updateSelectedScreen } from "../../store/selectedScreenSlice";

const Toolbar = () => {
    const navBarLayout = useSelector((state) => state.navBarLayout);
    const dispatch = useDispatch();

    const handlePreviewStateChange = (event) => {
        dispatch(setPreviewState(event.target.value));
    };

    const getButton = (value, label) => {
        return (
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
                    <select
                        className="editing-dropdown"
                        defaultValue={navBarLayout[1].id}
                        onChange={(event) => {
                            dispatch(updateSelectedScreen({ key: event.target.value }));
                        }}
                    >
                        {
                            navBarLayout.map((layout) => {
                                return (
                                    <option key={layout.id} value={layout.navigateTo}>{layout.name}</option>
                                );
                            })
                        }
                    </select>
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
