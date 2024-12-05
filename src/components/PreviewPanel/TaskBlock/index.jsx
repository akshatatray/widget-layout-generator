import React from 'react';
import './Tasks.css';
import DisableClick from '../../DisableClick';

const getTelephonyCard = () => {
    return (
        <md-task-item
        mediaType="telephony"
        status="consulting"
        title="Mihael"
        queue="queue"
        quantity="0"
        >
        <div>01:08:00</div>
        </md-task-item>
    );
}

const getTab = (props) => {
    return (<>
        <md-tab name="History" slot="tab">
            <span>{`${props.name}`}</span>
          </md-tab>
          <md-tab-panel name="History" slot="panel">
            <span>{`${props.content}`}</span>
          </md-tab-panel>
    </>)
}

const getTaskList = () => {
    return(<>
     <div className='card'>
        {getTelephonyCard()}
    </div>
    <div className='card'>
        {getTelephonyCard()}
    </div>
    </>)
}

const getTabSection = () => {
    return(<>
        <md-tabs tabs-id="1" comp-unique-id="tabs-test-component" justified>
            {getTab({name: 'All', content: 'Content All'})}
            {getTab({name: '1', content: 'Content 1'})}
            {getTab({name: '2', content: 'Content 2'})}
            {getTab({name: '3', content: 'Content 3'})}
            {getTab({name: '4', content: 'Content 4'})}
        </md-tabs>
    </>)
}

const Tasks = () => {
    return (
        <>
            <div className="top-section">
                {getTaskList()}
            </div>
            <div className="bottom-section">
                {getTabSection()}
            </div>
        </>
    );
};

export default Tasks;