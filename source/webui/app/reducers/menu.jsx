import { SELECT_MENU } from 'actions/actionTypes.jsx';

const initialState = [
        {
            text: 'Simulate',
            active: true
        },
        {
            text: 'Options',
            active: false
        },
        {
            text: 'Admin',
            active: false
        }
];

function menuItems(state=initialState, action) {
    switch (action.type) {
        case SELECT_MENU:
            let newState = state.map(item => Object.assign(
                {},
                item,
                { active: item.text === action.payload.menuText }
            ));
            return newState;
        default:
            return state;
    }
}

export default menuItems