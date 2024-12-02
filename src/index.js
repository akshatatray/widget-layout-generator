import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@momentum-ui/web-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <md-theme>
      <App />
    </md-theme>
  </React.StrictMode>
);
