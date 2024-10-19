import {
    CATEGORIES_SUCCESS,
    CATEGORIES_FAILURE,
    CATEGORIES_CLEAR_ERROR_MESSAGE,
} from "../actions/categoryActions";

const initialState = {
    category: {},
    categories: [],
    errorMessage: undefined,
};

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload,
                errorMessage: undefined
            };
        case CATEGORIES_FAILURE:
            return {
                ...state,
                categories: [],
                errorMessage: action.payload,
            };
        case CATEGORIES_CLEAR_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: undefined
            };
        default:
            return state;
    }
};