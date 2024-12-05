import '@momentum-ui/web-components';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <md-theme lumos>
      <App />
    </md-theme>
    </Provider>
  </React.StrictMode>
);
