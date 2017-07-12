import * as actionTypes from '../actions/actionTypes.jsx';
import {combineReducers} from 'redux';


const initialOptions = () => ({
    "starting_bet": {
        label: "Starting bet",
        id: "starting_bet",
        value: 1,
        min: "0.1",
        max: "100",
        step: "0.1"
    },
    "step": {
        label: "Step",
        id: "step",
        value: 1,
        min: "1",
        max: "5",
        step: "1",
    },
    "pairs": {
        label: "Pairs",
        id: "pairs",
        value: 10,
        min: "1",
        max: "100",
        step: "1",
    },
    "bet_column": {
        label: "Bet column",
        id: "bet_column",
        value: true
    },
    "index_column": {
        label: "Index column",
        id: "index_column",
        value: true
    },
    "level_column": {
        label: "Level column",
        id: "level_column",
        value: true
    },
    "net_column": {
        label: "Net column",
        id: "net_column",
        value: true
    },
    "partner_column": {
        label: "Partner column",
        id: "partner_column",
        value: true
    },
    "choice_column": {
        label: "Choice column",
        id: "choice_column",
        value: true
    },
    "result_column": {
        label: "Result column",
        id: "result_column",
        value: true
    },
    "debt_column": {
        label: "Debt column",
        id: "debt_column",
        value: true
    },
    "real_player_rows": {
        label: "Real player rows",
        id: "real_player_rows",
        value: true
    },
    "virtual_player_rows": {
        label: "Virtual player rows",
        id: "virtual_player_rows",
        value: true
    },
});

const option = (state={}, action) => {
    switch(action.type) {
        case actionTypes.SET_OPTION:
            return {
                ...state,
                value: action.value,
            };
        case actionTypes.RECEIVE_OPTIONS:
            return {
                ...state,
                value: action.options[state.id],
            };
        default:
            return state;
    }
};


const options = (state=initialOptions(), action) => {
    switch(action.type) {
        case actionTypes.SET_OPTION:
            return {
                ...state,
                [action.name]: option(state[action.name], action),
            };
        case actionTypes.RECEIVE_OPTIONS:
            const newState = {...state};

            for (const optionId in state) {
                if (state.hasOwnProperty(optionId) && action.options.hasOwnProperty(optionId)) {
                    newState[optionId] = option(state[optionId], action);
                }
            }

            return newState;

        default:
            return state;
    }
};

const optionsLoading = (state=true, action) => {
    switch(action.type) {
        case actionTypes.REQUEST_OPTIONS:
            return true;
        case actionTypes.RECEIVE_OPTIONS:
            return false;
        default:
            return state;
    }
};

const optionsSaved = (state='saved', action) => {
    switch (action.type) {
        case actionTypes.SAVE_OPTIONS_REQUEST:
            return "saving";
        case actionTypes.SAVE_OPTIONS_SUCCESS:
            return "saved";
        case actionTypes.SET_OPTION:
        case actionTypes.TOGGLE_OPTION:
            return "dirty";
        default:
            return state;
    }
};

export const userOptions = combineReducers({
    optionsLoading,
    optionsSaved,
    options,
});



export const getOptionsHash = (state) => {
    const optionsHash = {};

    for (const key in state.options) {
        optionsHash[key] = state.options[key].value;
    }

    return optionsHash;
};

export const getOptionsList = (state) => {
    const optionsList = [];

    for (const key in state.options) {
        optionsList.push(state.options[key]);
    }

    return optionsList;
};

export {optionsLoading};
export {optionsSaved};
export {initialOptions};
export {options};
export {option};

export default userOptions
