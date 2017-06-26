import {combineReducers} from 'redux';

import * as actionTypes from '../actions/actionTypes.jsx';

function simulationState(state = 'idle', action) {
    switch(action.type) {
        case actionTypes.START_SIMULATION:
            return "running";
        case actionTypes.REQUEST_SIMULATION:
            return "requested";
        case actionTypes.UPDATE_PROGRESS:
            if (action.progress === '100') {
                return "finished";
            } else {
                return state;
            }
        default:
            return state;
    }
}

function simulationProgress(state = '0', action) {
    switch (action.type) {
        case actionTypes.UPDATE_PROGRESS:
            return action.progress;
        default:
            return state;
    }
}

const simulation = combineReducers({
    simulationState,
    simulationProgress,
});


export {simulationState, simulationProgress};

export default simulation