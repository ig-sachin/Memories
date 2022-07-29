import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// from here we are adding redux
// step1
// provider is going to keep track of the state which is a global state
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// step3
import reducers from './reducer/index';
// step2
// to cerate redux we need to create store
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    // step8
    // wrap your app with provider
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);