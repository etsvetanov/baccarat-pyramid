import * as actionTypes from '../actions/actionTypes.jsx';

const initialOptions = [
    {
        name: "Starting bet",
        id: "starting_bet",
        value: 1,
        min: "0.1",
        max: "100",
        step: "0.1"
    },
    {
        name: "Step",
        id: "step",
        value: 1,
        min: "1",
        max: "5",
        step: "1",
    },
    {
        name: "Pairs",
        id: "pairs",
        value: 10,
        min: "1",
        max: "100",
        step: "1",
    },
    {
        name: "Bet column",
        id: "bet_column",
        value: true
    },
    {
        name: "Index column",
        id: "index_column",
        value: true
    },
    {
        name: "Level column",
        id: "level_column",
        value: true
    },
    {
        name: "Net column",
        id: "net_column",
        value: true
    },
    {
        name: "Partner column",
        id: "partner_column",
        value: true
    },
    {
        name: "Choice column",
        id: "choice_column",
        value: true
    },
    {
        name: "Result column",
        id: "result_column",
        value: true
    },
    {
        name: "Debt column",
        id: "debt_column",
        value: true
    },
    {
        name: "Real player rows",
        id: "real_player_rows",
        value: true
    },
    {
        name: "Virtual player rows",
        id: "virtual_player_rows",
        value: true
    }
];

function userOption(state={}, action) {
    switch (action.type) {
        case actionTypes.SET_OPTION:
            if (state.name !== action.payload.name) {
                return state;
            }
            return Object.assign({}, state, {value: action.payload.value});

        case actionTypes.TOGGLE_OPTION:
            if (state.name !== action.payload.name) {
                return state;
            }
            return Object.assign({}, state, {value: !state.value});
        case actionTypes.RECEIVE_OPTIONS:
            const {options} = action.payload;

            if (options.hasOwnProperty(state.id)) {
                return {
                    ...state,
                    value: options[state.id],
                };
            }

            return state;

        default:
            return state;
    }
}

function optionsLoading(state=true, action) {
    switch(action.type) {
        case actionTypes.REQUEST_OPTIONS:
            return true;
        case actionTypes.RECEIVE_OPTIONS:
            return false;
        default:
            return state;
    }
}

function optionsList(state=initialOptions, action) {
    switch(action.type) {
        case actionTypes.SET_OPTION:
        case actionTypes.TOGGLE_OPTION:
        case actionTypes.RECEIVE_OPTIONS:
            return state.map(opt => userOption(opt, action));
        default:
            return state;
    }
}

function optionsSaved(state='saved', action) {
    switch(action.type) {
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
}

function userOptions(state={}, action) {
    return {
        optionsLoading: optionsLoading(state.optionsLoading, action),
        optionsSaved: optionsSaved(state.optionsSaved, action),
        optionsList: optionsList(state.optionsList, action),
    }
}

export default userOptions;


export const getByOption = (state) => {
    const user_options = {};

    state.optionsList.forEach((option) => user_options[option.id] = option.value);

    return user_options;
};