import { call, put, delay, takeLatest } from 'redux-saga/effects';
import { hulkStoreApi } from '../api'
import {
    AUTH_LOGIN_REQUEST,
    AUTH_LOGOUT_REQUEST,
    loginSuccess,
    loginFailure,
    clearErrorMessage,
    logout,
} from '../actions/authActions';

function* loginSaga(action) {
    try {
        const { payload } = action;
        const { headers } = yield call(hulkStoreApi.post, '/login', payload);

        yield put(loginSuccess({ username: payload.username }));

        localStorage.setItem('token', headers.get('Authorization'));
        localStorage.setItem('username', payload.username);
    } catch {
        yield put(loginFailure('Credenciales incorrectas'));
        yield delay(10);
        yield put(clearErrorMessage());
    }
}

function* logoutSaga() {
    yield put(logout());
    localStorage.clear();
}

function* watchAuth() {
    yield takeLatest(AUTH_LOGIN_REQUEST, loginSaga);
    yield takeLatest(AUTH_LOGOUT_REQUEST, logoutSaga);
}

export default watchAuth;