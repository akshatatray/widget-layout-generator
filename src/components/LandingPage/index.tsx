import React from 'react';
import { BaseView } from '../BaseView/BaseView.tsx';

const LandingPage: React.FC = () => {
    const { blocks } = BaseView();
    return (
        <div className="landing-page">
            {blocks.header}
            {blocks.nav}
        </div>
    );
};

export default LandingPage;