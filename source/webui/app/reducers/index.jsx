// import { combineReducers } from 'redux';
import menuItems from './menu.jsx';
import userOptions, {getByOption} from './optionsReducer.jsx';
import simulation from './simulationReducer.jsx';


function rootReducer(state = {}, action) {
    // this is the shape of the state object
    return {
        menuItems: menuItems(state.menuItems, action),
        userOptions: userOptions(state.userOptions, action),
        simulation: simulation(state.simulation, action),
    };
}

export default rootReducer;

export const getUserOptions = (state) => {
    return getByOption(state.userOptions)
};

/*
    * The reducer is a function that returns the new store state tree.
    * The convention is that if the reducer receives "undefined" as the state argument, it must return
    *   what it considers to be the initial state. This can be handled by the ES6 default argument.
    * The state tree is a single object with properties for the different "substates".
    * The store is registered with a single reducer.
    * The reducer function may be split into separate functions, each managing independent parts of
      the state
    * These separate functions must be "combined" to the single function passed to the store.
    * Any reducer must return the current state for any unknown action.

    If using 'combineReducers':
    * The helper function 'combineReducers' turns an object, whose values are different reducing functions,
      into a single reducing function you pass to 'createStore'
    * The resulting recuder calls every child reducer, and gather their results into a single state
      objecy. The shape of the state object matches the keys of the passed reducers.
    * A popular convention is to name reducers after the state slices they manage.
    * Summary: combineReducers will return a reducer. When called by the store, this reducer will
      return an object, representing the new state, whose keys will be the same as the names of the
      separate reducers
    * http://redux.js.org/docs/api/combineReducers.html
*/