import React, { useState, useEffect } from 'react'

import { API_DETAILS, API_KEY, API_PARAMS, API_IMG, DEFAULT_PLACEHOLDER_IMAGE } from '../Const';
import MovieDetails from './MovieDetails';

const Movie = ({ movie }) => {

    const [ showDetails, setShowDetails ] = useState(false);
    const [ movieDetails, setMovieDetails ] = useState([]);

    const { poster_path, id, title, release_date } = movie;
    const poster = poster_path === null ? DEFAULT_PLACEHOLDER_IMAGE : `${API_IMG}${poster_path}`;
    
    const getDetails = movie_id => {
        fetch(`${API_DETAILS}${movie_id}?${API_KEY}${API_PARAMS}`)
        .then(response => response.json())
        .then(result => setMovieDetails(result))
        .catch(error => console.log('Fetch error: ', error))
    }

    const handleShowDetailes = () => {
        setShowDetails(true);
        getDetails(id);
    }

    const hiddeDetailes = () => setShowDetails(false);

    useEffect(() => {
        getDetails(id)
    }, [])

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
