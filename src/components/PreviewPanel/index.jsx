import React from 'react';
import { useSelector } from 'react-redux';
import { BaseView } from './BaseView/BaseView';
import './PreviewPanel.css';

const getParams = (props) => {
    const params = {
        previewState: props.previewState,
    }
    return params;
};
const isOnCall = (params) => {
    return params.previewState === 'on-a-call';
}
const isOnDigital = (params) => {
    return params.previewState === 'on-other-channels';
}
const isEngaged = (params) => {
    return isOnCall(params) || isOnDigital(params);
}

const renderInteractionControlBlock = ({blocks, params}) => {
    return (isEngaged(params) &&
        (<div className={`interaction-control`}>
            {blocks.interactionBlock}
        </div>)
    );
}
const renderWidgetPanel = ({blocks, params}) => {
    return (isEngaged(params) &&
        (<div className={`panel-block`}>
            {blocks.widgetPanel}
        </div>)
    );
}
const renderControlPanel = ({blocks, params}) => {
    return (isOnDigital(params) &&
        (<div className={`chat-block`}>
            {blocks.controlPanel}
        </div>));
}

const renderCommonControl = ({blocks, params}) => {
    return (!isEngaged(params) &&
        (<div className={`common-control`}>
            {blocks.commonControl}
        </div>)
    );
}
const PreviewPanel = () => {
    const previewState = useSelector((state) => state.previewState);
    const params = getParams({previewState});
    const { blocks } = BaseView();
    return (
        <div className={`landing-page ${params.previewState}`}>
            <div className={'title-header'}>
                {blocks.title}
            </div>
            <div className={`header`}>
                {blocks.header}
            </div>
            <div className={`nav`}>
                {blocks.nav}
            </div>
            <div className={`tasks`}>
                {blocks.tasks}
            </div>
            {renderCommonControl({blocks, params})}
            {renderInteractionControlBlock({blocks, params})}
            {renderWidgetPanel({blocks, params})}
            {renderControlPanel({blocks, params})}
        </div>
    );
};

export default PreviewPanel;