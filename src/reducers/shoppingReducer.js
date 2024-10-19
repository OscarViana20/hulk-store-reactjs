import {
    PAYMENT_TYPES_SUCCESS,
    PAYMENT_TYPES_FAILURE,
    PAYMENT_TYPES_CLEAR_ERROR_MESSAGE,
} from "../actions/shoppingActions";

const initialState = {
    paymentTypes: [],
    errorMessage: undefined,
};

export const shoppingReducer = (state = initialState, action) => {
    switch (action.type) {
        case PAYMENT_TYPES_SUCCESS:
            return {
                ...state,
                paymentTypes: action.payload,
                errorMessage: undefined
            };
        case PAYMENT_TYPES_FAILURE:
            return {
                ...state,
                paymentTypes: [],
                errorMessage: action.payload,
            };
        case PAYMENT_TYPES_CLEAR_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: undefined
            };
        default:
            return state;
    }
};