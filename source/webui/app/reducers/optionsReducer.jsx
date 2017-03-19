import { SET_OPTION, TOGGLE_OPTION } from 'actions/actionTypes.jsx';

const initialState = [
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
        case SET_OPTION:
            if (state.name !== action.payload.name) {
                return state
            }
            return Object.assign({}, state, {value: action.payload.value});

        case TOGGLE_OPTION:
            if (state.name !== action.payload.name) {
                return state
            }
            return Object.assign({}, state, {value: !state.value});

        default:
            return state;
    }
}

function userOptions(state=initialState, action) {
    switch(action.type) {
        case SET_OPTION:
            return state.map(opt => userOption(opt, action));
        case TOGGLE_OPTION:
            return state.map(opt => userOption(opt, action));
        default:
            return state;
    }
}

export default userOptions;