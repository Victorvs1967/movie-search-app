export const initialState = {
    loading: true,
    movies: [],
    errorMessage: null,
    showDetails: false,
    movieDetails: [],
    search: '',
    tv: false
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
        case 'MOVIE_DETAILS_REQUEST':
            return {
                ...state,
                showDetails: false,
                errorMessage: null
            };
        case 'MOVIE_DETAILS_SUCCESS':
            return {
                ...state,
                showDetails: true,
                movieDetails: action.payload
            };
        case 'MOVIE_DETAILS_FAILURE':
            return {
                ...state,
                showDetails: false,
                errorMessage: action.error
            };
        case 'MOVIES_SEARCH_SET':
            return {
                ...state,
                search: action.payload
            };
        default:
            return state;
    }
};
