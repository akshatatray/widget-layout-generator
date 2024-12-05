import React from 'react';
import SupportContactImage from '../../../assets/images/support-contact-320-cobalt-lime.svg';
import './EmptyBlock.css';

const EmptyBlock = () => {
    return (
        <div className="empty-block-container">
            <img src={SupportContactImage} alt="Support Contact" />
        </div>
    );
};

export default EmptyBlock;