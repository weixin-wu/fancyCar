import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import { combineReducers, createStore, applyMiddleware } from 'redux';

import carReducer from './reducers/carReducer';

const initState = {};
const store = createStore(combineReducers({ carReducer }), {});
store.subscribe(() => {
})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
