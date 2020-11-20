import React, { useReducer } from 'react'

import { API_DETAILS_URL, API_KEY, API_PARAMS, API_IMG_URL, DEFAULT_PLACEHOLDER_IMAGE } from '../Const';
import MovieDetails from './MovieDetails';
import { reducer, initialState } from '../reducer';

const Movie = ({ movie }) => {

    const { poster_path, id, title, release_date } = movie;
    const poster = poster_path === null ? DEFAULT_PLACEHOLDER_IMAGE : `${API_IMG_URL}${poster_path}`;
    
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const { showDetails, movieDetails } = state;

    const getDetails = movie_id => {
        fetch(`${API_DETAILS_URL}${movie_id}?${API_KEY}${API_PARAMS}`)
        .then(response => response.json())
        .then(result => dispatch({
            type: 'MOVIE_DETAILS_SUCCESS',
            payload: result
        }))
        .catch(error => dispatch({
            type: 'MOVIE_DETAILS_FAILURE',
            error: error
        }))
    }

    const handleShowDetailes = () => {
        getDetails(id);
    }

    const hiddeDetailes = () => dispatch({
            type: 'MOVIE_DETAILS_REQUEST'
        }
    );

    return (
        <div className="col mb-4">
            {showDetails ? 
            <div onClick={hiddeDetailes} >
            <MovieDetails details={movieDetails} />
            </div> :
            <div className="card mx-0 h-100">
                <img className="card-img-top" src={poster} alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle text-muted">{release_date}</h6>
                </div>
                <div className="card-footer">
                    <button className="btn btn-primary w-100" name={id} onClick={handleShowDetailes}>Movie detail</button>
                </div>
            </div>}
        </div>
    );
};

export default Movie;
