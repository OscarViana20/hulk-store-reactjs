import {
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_LOGOUT,
    CLEAR_ERROR_MESSAGE,
} from "../actions/authActions";

const initialState = {
    user: {},
    errorMessage: undefined,
    status: 'not-authenticated',
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                status: 'authenticated',
                errorMessage: undefined
            };
        case AUTH_LOGIN_FAILURE:
            return {
                ...state,
                user: {},
                status: 'not-authenticated',
                errorMessage: action.payload,
            };
        case AUTH_LOGOUT:
            return {
                ...state,
                user: {},
                status: 'not-authenticated',
                errorMessage: undefined
            };
        case CLEAR_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: undefined
            };
        default:
            return state;
    }
};