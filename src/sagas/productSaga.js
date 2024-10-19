import { call, delay, put, takeLatest } from "redux-saga/effects";
import { hulkStoreApi } from '../api'
import {
    PRODUCTS_AVAILABLE_REQUEST,
    PRODUCTS_STOCK_REQUEST,
    PRODUCT_SAVING_PROCESS_FLOW,
    PRODUCT_DELETING_PROCESS_FLOW,
    availableFailure,
    availableSuccess,
    stockFailure,
    stockSuccess,
    saveProductFailure,
    saveProductSuccess,
    deleteProductFailure,
    deleteProductSuccess,
    clearErrorMessage,
} from "../actions/productActions";

function* handleAvailableProducts() {
    try {
        const { data } = yield call(hulkStoreApi.get, '/api/product/findAvailableProducts');
        yield put(availableSuccess(data));
    } catch {
        yield put(availableFailure("Error to get available products"));
        yield delay(10);
        yield put(clearErrorMessage());
    }
}

function* handleStockProducts() {
    try {
        const { data } = yield call(hulkStoreApi.get, '/api/product/findStockProducts');
        yield put(stockSuccess(data));
    } catch {
        yield put(stockFailure("Error to get stock products"));
        yield delay(10);
        yield put(clearErrorMessage());
    }
}

function* handleSaveProduct(action) {
    try {
        const { payload } = action;
        const serviceName = payload?.id ? '/api/product/updateProduct' : '/api/product/createProduct';
        yield call(hulkStoreApi.post, serviceName, payload);
        yield put(saveProductSuccess());
    } catch {
        yield put(saveProductFailure("Error to save product"));
        yield delay(10);
        yield put(clearErrorMessage());
    }
}

function* handleDeleteProduct(action) {
    try {
        const { payload } = action;
        yield call(hulkStoreApi.post, '/api/product/inactivateProduct', payload);
        yield put(deleteProductSuccess());
    } catch {
        yield put(deleteProductFailure("Error to delete product"));
        yield delay(10);
        yield put(clearErrorMessage());
    }
}

function* handleSaveProductFlow(action) {
    yield call(handleSaveProduct, action);
    yield call(handleAvailableProducts);
}

function* handleDeleteProductFlow(action) {
    yield call(handleDeleteProduct, action);
    yield call(handleAvailableProducts);
}

function* watchProducts() {
    yield takeLatest(PRODUCTS_AVAILABLE_REQUEST, handleAvailableProducts);
    yield takeLatest(PRODUCTS_STOCK_REQUEST, handleStockProducts);
    yield takeLatest(PRODUCT_SAVING_PROCESS_FLOW, handleSaveProductFlow);
    yield takeLatest(PRODUCT_DELETING_PROCESS_FLOW, handleDeleteProductFlow);
}

export default watchProducts;