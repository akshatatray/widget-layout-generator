import React from 'react';
import { BaseView } from './BaseView/BaseView';
import './PreviewPanel.css';

const getParams = (props) => {
    const params = {
        previewState: props.state,
    }
    return params;
};
const isOnCall = (params) => {
    return params.previewState === 'on-a-call';
}
const isOnDigital = (params) => {
    return params.previewState === 'on-other-channels';
}
const renderInteractionControlBlock = ({blocks, params}) => {
    return (isOnCall(params) || isOnDigital(params)) && (
        <div className={`interaction-control`}>
            {blocks.interactionBlock}
        </div>
    )
}
const PreviewPanel = (props) => {
    const params = getParams(props);
    const { blocks } = BaseView(params);
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
            <div className={`common-control`}>
                {blocks.commonControl}
            </div>
            {renderInteractionControlBlock({blocks, params})}
        </div>
    );
};

export default PreviewPanel;