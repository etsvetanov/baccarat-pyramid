import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { rootReducer } from './reducers'

/*
    The "store" provides 3 methods:
        * .getState() - get the current application state
        * .dispatch(action) - to change the application state by dispatching an action
        * .subscribe(callback) - to subscribe callbacks to changes
 */

function configureStore() {
    const enhancers = compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    );

    const persistedState = {};
    const store = createStore(
        rootReducer,
        persistedState,
        enhancers,
    );

    // for example to save state to the BE
    store.subscribe(() => {});

    return store;
}

// by exporting "configureStore" instead of just "store", we will be able to create as many store
// instances as we want for testing
export default configureStore