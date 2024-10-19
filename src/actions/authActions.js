export const AUTH_LOGIN_REQUEST = 'auth/AUTH_LOGIN_REQUEST';
export const AUTH_LOGIN_SUCCESS = 'auth/AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAILURE = 'auth/AUTH_LOGIN_FAILURE';

export const AUTH_LOGOUT_REQUEST = 'auth/AUTH_LOGOUT_REQUEST';
export const AUTH_LOGOUT = 'auth/AUTH_LOGOUT';

export const CLEAR_ERROR_MESSAGE = 'auth/clearErrorMessage';

export const loginRequest = (credentials) => ({
    type: AUTH_LOGIN_REQUEST,
    payload: credentials
});

export const loginSuccess = (user) => ({
    type: AUTH_LOGIN_SUCCESS,
    payload: user
});

export const loginFailure = (error) => ({
    type: AUTH_LOGIN_FAILURE,
    payload: error
});

export const logoutRequest = () => ({
    type: AUTH_LOGOUT_REQUEST,
});

export const logout = () => ({
    type: AUTH_LOGOUT,
});

export const clearErrorMessage = () => ({
    type: CLEAR_ERROR_MESSAGE
});