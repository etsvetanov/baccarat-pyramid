import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import rootReducer from './reducers/index.jsx';
import App from 'app.jsx';


// TODO: REMOVE THIS
window.r = React;

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, {}, enhancers);
/*
    the "store" provides 3 methods:
      - getState() - get the current application state
      - dispatch() - to change the application state by dispatching an action
      - subscribe() - to subscribe to changes
*/

ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
);


