import React from 'react';
import { BaseView } from '../BaseView/BaseView';
import './PreviewPanel.css';

const renderPage = (props) => {
    const { blocks } = BaseView();
    return (
        <div className={`landing-page ${props.state}`}>
            <div className={`header ${props.state}`}>
                {blocks.header}
            </div>
            <div className={`nav ${props.state}`}>
                {blocks.nav}
            </div>
            <div className={`tasks ${props.state}`}>
                {blocks.tasks}
            </div>
            <div className={`common-control ${props.state}`}>
                {blocks.commonControl}
            </div>
            <div className={`contact-history ${props.state}`}>
                {blocks.contactHistory}
            </div>
        </div>
    );
}

const PreviewPanel = (props) => {
    return renderPage(props);
};

export default PreviewPanel;