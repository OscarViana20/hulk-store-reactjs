import { makeAction } from './makeAction';

export const PRODUCTS_AVAILABLE_REQUEST = 'products/PRODUCTS_AVAILABLE_REQUEST';
export const PRODUCTS_AVAILABLE_SUCCESS = 'products/PRODUCTS_AVAILABLE_SUCCESS';
export const PRODUCTS_AVAILABLE_FAILURE = 'products/PRODUCTS_AVAILABLE_FAILURE';

export const PRODUCTS_STOCK_REQUEST = 'products/PRODUCTS_STOCK_REQUEST';
export const PRODUCTS_STOCK_SUCCESS = 'products/PRODUCTS_STOCK_SUCCESS';
export const PRODUCTS_STOCK_FAILURE = 'products/PRODUCTS_STOCK_FAILURE';

export const PRODUCT_SAVING_PROCESS_FLOW = 'products/PRODUCT_SAVING_PROCESS_FLOW';
export const PRODUCT_SAVING_SUCCESS = 'products/PRODUCT_SAVING_SUCCESS';
export const PRODUCT_SAVING_FAILURE = 'products/PRODUCT_SAVING_FAILURE';

export const PRODUCT_DELETING_PROCESS_FLOW = 'products/PRODUCT_DELETING_PROCESS_FLOW';
export const PRODUCT_DELETING_SUCCESS = 'products/PRODUCT_DELETING_SUCCESS';
export const PRODUCT_DELETING_FAILURE = 'products/PRODUCT_DELETING_FAILURE';

export const PRODUCTS_CLEAR_ERROR_MESSAGE = 'products/PRODUCT_CLEAR_ERROR_MESSAGE';

export const availableRequest = () => makeAction(PRODUCTS_AVAILABLE_REQUEST);
export const availableSuccess = (data) => makeAction(PRODUCTS_AVAILABLE_SUCCESS, data);
export const availableFailure = (error) => makeAction(PRODUCTS_AVAILABLE_FAILURE, error);

export const stockRequest = () => makeAction(PRODUCTS_STOCK_REQUEST);
export const stockSuccess = (data) => makeAction(PRODUCTS_STOCK_SUCCESS, data);
export const stockFailure = (error) => makeAction(PRODUCTS_STOCK_FAILURE, error);

export const saveProductRequest = (product) => makeAction(PRODUCT_SAVING_PROCESS_FLOW, product);
export const saveProductSuccess = () => makeAction(PRODUCT_SAVING_SUCCESS);
export const saveProductFailure = (error) => makeAction(PRODUCT_SAVING_FAILURE, error);

export const deleteProductRequest = (product) => makeAction(PRODUCT_DELETING_PROCESS_FLOW, product);
export const deleteProductSuccess = () => makeAction(PRODUCT_DELETING_SUCCESS);
export const deleteProductFailure = (error) => makeAction(PRODUCT_DELETING_FAILURE, error);

export const clearErrorMessage = () => makeAction(PRODUCTS_CLEAR_ERROR_MESSAGE);
