import React from 'react';
import { useSelector } from 'react-redux';
import { BaseView } from './BaseView/BaseView';
import WidgetPanel from './Panels/WidgetPanel/WidgetPanel';
import './PreviewPanel.css';

const isOnCall = (params) => {
    return params.previewState === 'on-a-call';
}
const isOnDigital = (params) => {
    return params.previewState === 'on-other-channels';
}
const isEngaged = (params) => {
    return isOnCall(params) || isOnDigital(params);
}

const getParams = (props) => {
    const params = {
        previewState: props.previewState,
        isTasksOpen: !props.isTaskAreaCollapsed,
        isCustomNavPage: props.selectedScreen !== 'home',
    }
    return params;
};
const getNoTasksClass = (params) => {
    return params.isTasksOpen ? '' : '-no-tasks';
}
const getTasksClass = (params) => {
    return params.isTasksOpen ? 'tasks' : 'tasks-close';
}
const getCustomNavClass = (params) => {
    return (params.isCustomNavPage && params.previewState ==="inactive") ? '-custom-nav' : '';
}
const getLandingPageClass = (params) => {
    return `landing-page ${params.previewState}${getNoTasksClass(params)}${getCustomNavClass(params)}`;
};

const renderInteractionControlBlock = ({ blocks, params }) => {
    return (isEngaged(params) &&
        (<div className={`interaction-control`}>
            {blocks.interactionBlock}
        </div>)
    );
}
const renderWidgetPanel = ({ blocks, params }) => {
    return (isEngaged(params) &&
        (<div className={`panel-block`}>
            {/* <DisableClick layoutKey={'widget-panel'} /> */}
            {blocks.widgetPanel}
        </div>)
    );
}
const renderControlPanel = ({ blocks, params }) => {
    return (isOnDigital(params) &&
        (<div className={`chat-block`}>
            {blocks.controlPanel}
        </div>));
}
const renderEmptyBlock = ({ blocks, params }) => {
    return (!isEngaged(params) && !params.isCustomNavPage &&
        (<div className={`common-control`}>
            {blocks.emptyBlock}
        </div>)
    );
}
const renderTasks = ({ blocks, params }) => {
    return ((
        <div className={`${getTasksClass(params)}`}>
            {blocks.tasks}
        </div>));
};

const PreviewPanel = () => {
    // get STORE values
    const config = useSelector((state) => { console.log("State---", state); return state.previewState });
    const selectedScreen = useSelector((state) => state.selectedScreen);
    
    const previewState = config.previewState;
    const isTaskAreaCollapsed = config.taskCollapsed;


    const params = getParams({ previewState, isTaskAreaCollapsed, selectedScreen });
    const { blocks } = BaseView();
    return (
        <div className={getLandingPageClass(params)}>
            <div className={'title-header'}>
                {blocks.title}
            </div>
            <div className={`header`}>
                {blocks.header}
            </div>
            <div className={`nav`}>
                {blocks.nav}
            </div>
            {renderTasks({ blocks, params })}
            {renderEmptyBlock({ blocks, params })}
            {renderInteractionControlBlock({ blocks, params })}
            {(isEngaged(params) || params.isCustomNavPage) && <WidgetPanel />}
            {renderControlPanel({ blocks, params })}
        </div>
    );
};

export default PreviewPanel;