import {
    SELECT_MENU,
    SET_OPTION,
    TOGGLE_OPTION,
    FETCH_OPTIONS,
} from './actionTypes.jsx';

// ACTION CREATORS:


export const selectMenu = (menuText) => {
    return {
        type: SELECT_MENU,
        payload: {
            menuText: menuText
        }
    }
};

export const setOption = (name, value) => {
    return {
        type: SET_OPTION,
        payload: {
            name,
            value
        }
    }
};

export const toggleOption = (name) => {
    return {
        type: TOGGLE_OPTION,
        payload: {
            name
        }
    }
};

