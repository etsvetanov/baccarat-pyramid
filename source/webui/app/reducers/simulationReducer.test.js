// const simulationState = require('./simulationReducer.jsx');
import {simulationState} from './simulationReducer.jsx';
import * as actionTypes from '../actions/actionTypes.jsx';

test('simulationState with action.type START_SIMULATION', () => {
   const testAction = {
       type: actionTypes.START_SIMULATION,
   };

   expect(simulationState('idle', testAction)).toBe('running');
});