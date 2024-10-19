import { makeReducer } from './makeReducer';
import {
    PRODUCTS_AVAILABLE_SUCCESS,
    PRODUCTS_AVAILABLE_FAILURE,
    PRODUCTS_STOCK_SUCCESS,
    PRODUCTS_STOCK_FAILURE,
    PRODUCT_SAVING_SUCCESS,
    PRODUCT_SAVING_FAILURE,
    PRODUCT_DELETING_SUCCESS,
    PRODUCT_DELETING_FAILURE,
    PRODUCTS_CLEAR_ERROR_MESSAGE,
} from "../actions/productActions";

const initialState = {
    availableProducts: [],
    stockProducts: [],
    errorMessage: undefined,
};

const handlers = {
    [PRODUCTS_AVAILABLE_SUCCESS]: (state, action) => ({
        ...state,
        errorMessage: undefined,
        availableProducts: action.payload,
    }),
    [PRODUCTS_AVAILABLE_FAILURE]: (state, action) => ({
        ...state,
        availableProducts: [],
        errorMessage: action.payload,
    }),
    [PRODUCTS_STOCK_SUCCESS]: (state, action) => ({
        ...state,
        errorMessage: undefined,
        stockProducts: action.payload,
    }),
    [PRODUCTS_STOCK_FAILURE]: (state, action) => ({
        ...state,
        stockProducts: [],
        errorMessage: action.payload,
    }),
    [PRODUCT_SAVING_SUCCESS]: (state) => ({
        ...state,
        stockProducts: [],
        availableProducts: [],
    }),
    [PRODUCT_SAVING_FAILURE]: (state, action) => ({
        ...state,
        errorMessage: action.payload,
    }),
    [PRODUCT_DELETING_SUCCESS]: (state) => ({
        ...state,
        stockProducts: [],
        availableProducts: [],
    }),
    [PRODUCT_DELETING_FAILURE]: (state, action) => ({
        ...state,
        errorMessage: action.payload,
    }),
    [PRODUCTS_CLEAR_ERROR_MESSAGE]: (state) => ({
        ...state,
        errorMessage: undefined,
    }),
};

export const productReducer = makeReducer(initialState, handlers);