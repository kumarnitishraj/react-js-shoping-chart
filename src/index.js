import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './container';
import configureStore from './redux/store';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

registerServiceWorker();