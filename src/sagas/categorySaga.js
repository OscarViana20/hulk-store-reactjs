import { call, delay, put, takeLatest } from "redux-saga/effects";
import { hulkStoreApi } from '../api'
import {
    CATEGORIES_REQUEST,
    categoriesFailure,
    categoriesSuccess,
    clearErrorMessage,
} from "../actions/categoryActions";

function* handleCategories() {
    try {
        const { data } = yield call(hulkStoreApi.get, '/api/category/findAllCategories');
        yield put(categoriesSuccess(data));
    } catch {
        yield put(categoriesFailure("Error to get categories"));
        yield delay(10);
        yield put(clearErrorMessage());
    }
}

function* watchCategories() {
    yield takeLatest(CATEGORIES_REQUEST, handleCategories);
}

export default watchCategories;