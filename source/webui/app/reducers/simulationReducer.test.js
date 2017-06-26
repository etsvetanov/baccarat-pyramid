import {simulationState, simulationProgress} from './simulationReducer.jsx';
import * as actionTypes from '../actions/actionTypes.jsx';

test('simulationState with  action.type START_SIMULATION', () => {
   const testAction = {
       type: actionTypes.START_SIMULATION,
   };

   expect(simulationState('idle', testAction)).toBe('running');
});

test('simulationState with action.type REQUEST_SIMULATION', () => {
   const testAction = {
       type: actionTypes.REQUEST_SIMULATION,
   };

   expect(simulationState('idle', testAction)).toBe('requested');
});

test('simulationState with action.type === "UPDATE_PROGRESS"', () => {
    const testAction = {
        type: actionTypes.UPDATE_PROGRESS,
        progress: '50',
    };

    expect(simulationState('running', testAction)).toBe('running');

    testAction.progress = '100';

    expect(simulationState('running', testAction)).toBe('finished');
});

test('simulationState with an unknown action', () => {
    const testAction = {
        type: 'unknown',
    };

    expect(simulationState(undefined, testAction)).toBe('idle');
});

describe('simulationProgress', () => {

    test('simulationProgress initial state', () => {
        const testAction = {
            type: 'unknown',
        };

        expect(simulationProgress(undefined, testAction)).toBe('0');
    });

    test('simulationProgress with value', () => {
        const progress = '50';

        const testAction = {
            type: actionTypes.UPDATE_PROGRESS,
            progress,
        };

        expect(simulationProgress('30', testAction)).toBe(progress);
    });
});

