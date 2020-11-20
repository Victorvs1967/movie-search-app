export const initialState = {
    loading: true,
    movies: [],
    errorMessage: null,
    search: ''
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_MOVIES_REQUEST':
            return {
                ...state,
                loading: true,
                errorMessage: null
            };
        case 'SEARCH_MOVIES_SUCCESS':
            return {
                ...state,
                loading: false,
                movies: action.payload
            };
        case 'SEARCH_MOVIES_FAILURE':
            return {
                ...state,
                loading: true,
                errorMessage: action.error
            };
        case 'SEARCH_STRING_SET':
            return {
                ...state,
                search: action.payload
            }
        default:
            return state;
    }
};
