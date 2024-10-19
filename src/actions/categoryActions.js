export const CATEGORIES_REQUEST = 'categories/CATEGORIES_REQUEST';
export const CATEGORIES_SUCCESS = 'categories/CATEGORIES_SUCCESS';
export const CATEGORIES_FAILURE = 'categories/CATEGORIES_FAILURE';

export const CATEGORIES_CLEAR_ERROR_MESSAGE = 'products/CATEGORIES_CLEAR_ERROR_MESSAGE';

export const categoriesRequest = () => ({
    type: CATEGORIES_REQUEST,
});

export const categoriesSuccess = (data) => ({
    type: CATEGORIES_SUCCESS,
    payload: data
});

export const categoriesFailure = (error) => ({
    type: CATEGORIES_FAILURE,
    payload: error
});

export const clearErrorMessage = () => ({
    type: CATEGORIES_CLEAR_ERROR_MESSAGE
});