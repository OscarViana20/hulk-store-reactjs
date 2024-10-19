import { call, delay, put, takeLatest } from "redux-saga/effects";
import { hulkStoreApi } from '../api'
import {
    PAYMENT_TYPES_REQUEST,
    paymentTypesFailure,
    paymentTypesSuccess,
    clearErrorMessage,
} from "../actions/shoppingActions";

function* handlePaymentTypes() {
    try {
        const { data } = yield call(hulkStoreApi.get, '/api/paymentType/findAllPaymentType');
        yield put(paymentTypesSuccess(data));
    } catch {
        yield put(paymentTypesFailure("Error to get payment types"));
        yield delay(10);
        yield put(clearErrorMessage());
    }
}

function* watchShopping() {
    yield takeLatest(PAYMENT_TYPES_REQUEST, handlePaymentTypes);
}

export default watchShopping