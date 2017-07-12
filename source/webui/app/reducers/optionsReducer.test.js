import {
    optionsLoading,
    optionsSaved,
    initialOptions,
    options,
    option,
    getOptionsHash,
    getOptionsList,
} from './optionsReducer.jsx';

import * as actionTypes from '../actions/actionTypes';


describe('optionsLoading', () => {
    it('should return true with y', () => {
        const testAction = {
            type: actionTypes.REQUEST_OPTIONS
        };

        expect(optionsLoading(false, testAction)).toBe(true);
    });

    it('should return false with RECEIVE_OPTIONS', () => {
        const testAction = {
            type: actionTypes.RECEIVE_OPTIONS
        };

        expect(optionsLoading(false, testAction)).toBe(false);
    });

    it('should have an initial state === true', () => {
        const testAction = {
            type: 'unknown'
        };

        expect(optionsLoading(undefined, testAction)).toBe(true);
    })
});

describe('optionsSave', () => {
    it('should return "saving" when saving is initiated', () => {
        const testAction = {
            type: actionTypes.SAVE_OPTIONS_REQUEST,
        };

        expect(optionsSaved('saved', testAction)).toBe('saving');
    });

    it('should return "saved" when options are saved successfuly', () => {
        const testAction = {
            type: actionTypes.SAVE_OPTIONS_SUCCESS,
        };

        expect(optionsSaved('saving', testAction)).toBe('saved');
    });

    it('should return "dirt" when an options is changed', () => {
        const testAction = {
            type: actionTypes.SET_OPTION,
        };

        expect(optionsSaved('saved', testAction)).toBe('dirty');
    });
});

describe('options', () => {
    it('should update a single option when that option is changed', () => {
        const testAction = {
            type: actionTypes.SET_OPTION,
            name: 'starting_bet',
            value: 2,
        };

        const stateBefore = initialOptions();
        const stateAfter = initialOptions();
        stateAfter.starting_bet.value = 2;

        expect(options(stateBefore, testAction)).toEqual(stateAfter);
    });

    it('should update all received options', () => {
        const testAction = {
            type: actionTypes.RECEIVE_OPTIONS,
            options: {
                'starting_bet': 2,
                'step': 3,
                'index_column': false,
            },
        };

        const stateBefore = initialOptions();
        const stateAfter = initialOptions();
        stateAfter.starting_bet.value = 2;
        stateAfter.step.value = 3;
        stateAfter.index_column.value = false;

        expect(options(stateBefore, testAction)).toEqual(stateAfter);
    });
});


describe('getOptionsHash', () => {
    it('should return optionId to value map', () => {
        const options = initialOptions();

        const state = {
            options,
        };

        const optionsHash = getOptionsHash(state);

        expect(optionsHash.pairs).toBe(10);
        expect(optionsHash.bet_column).toBe(true);
        expect(optionsHash.starting_bet).toBe(1);
    });
});

describe('getOptionsList', () => {
    it('should return an array of option objects', () => {
        const options = initialOptions();
        const state = {
            options,
        };

        const result = getOptionsList(state);

        expect(result[0].id).toBeDefined();
        expect(result[0].label).toBeDefined();
        expect(result[0].value).toBeDefined();

        expect(result[1].id).toBeDefined();
        expect(result[1].id).toBeDefined();
        expect(result[1].id).toBeDefined();
    });
});