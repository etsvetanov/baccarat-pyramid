import * as actionTypes from '../actions/actionTypes.jsx';

function simulationState(state = 'idle', action) {
    switch(action.type) {
        case actionTypes.START_SIMULATION:
            return "running";
        case actionTypes.REQUEST_SIMULATION:
            return "requested";
        case actionTypes.SET_PROGRESS:
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
        case actionTypes.SET_PROGRESS:
            return action.progress;
        default:
            return state;
    }
}

function simulation(state = {}, action) {
    return {
        simulationState: simulationState(state.simulationState, action),
        simulationProgress: simulationProgress(state.simulationProgress, action),
    }
}

export {simulationState};

export default simulation