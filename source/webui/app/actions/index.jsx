import * as actionType from './actionTypes.jsx';

// ACTION CREATORS:


export const selectMenu = (menuText) => {
    return {
        type: actionType.SELECT_MENU,
        payload: {
            menuText: menuText
        }
    }
};

export const setOption = (name, value) => {
    return {
        type: actionType.SET_OPTION,
        payload: {
            name,
            value,
        }
    }
};

export const toggleOption = (name) => {
    return {
        type: actionType.TOGGLE_OPTION,
        payload: {
            name,
        }
    }
};

export const requestOptions = () => {
    return {
        type: actionType.REQUEST_OPTIONS,
    }
};

export const receiveOptions = (options) => {
    return {
        type: actionType.RECEIVE_OPTIONS,
        payload: {
            options,
        }
    }
};

export const saveOptionsRequest = () => {
    return {
        type: actionType.SAVE_OPTIONS_REQUEST,
    }
};

export const saveOptionsSuccess = () => {
    return {
        type: actionType.SAVE_OPTIONS_REQUEST,
    }
};

// export const saveOptions = (options) => (dispatch) =>
//         fetch('/api/set_options', {
//             credentials: 'include',
//             body: options,
//         }).then(response => {
//             dispatch({
//                 type: actionType.SAVE_OPTIONS_SUCCESS
//             });
//         });
