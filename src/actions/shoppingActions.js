export const PAYMENT_TYPES_REQUEST = 'shopping/PAYMENT_TYPES_REQUEST';
export const PAYMENT_TYPES_SUCCESS = 'shopping/PAYMENT_TYPES_SUCCESS';
export const PAYMENT_TYPES_FAILURE = 'shopping/PAYMENT_TYPES_FAILURE';

export const PAYMENT_TYPES_CLEAR_ERROR_MESSAGE = 'shopping/PAYMENT_TYPES_CLEAR_ERROR_MESSAGE';

export const paymentTypesRequest = () => ({
    type: PAYMENT_TYPES_REQUEST,
});

export const paymentTypesSuccess = (data) => ({
    type: PAYMENT_TYPES_SUCCESS,
    payload: data
});

export const paymentTypesFailure = (error) => ({
    type: PAYMENT_TYPES_FAILURE,
    payload: error
});

export const clearErrorMessage = () => ({
    type: PAYMENT_TYPES_CLEAR_ERROR_MESSAGE
});