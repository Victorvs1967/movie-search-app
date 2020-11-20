import React, { useReducer, useState } from 'react'

import { initialState, reducer } from '../reducer';

const Search = ({ fetchMovies }) => {

    const [ search, setSearch ] = useState('');
    // const [ state, dispatch ] = useReducer(reducer, initialState);

    const handleSearchChange = event => setSearch(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        fetchMovies(search);
        event.target.reset();
    }  
    
    return (
    <form className="form-inline" onSubmit={handleSubmit}>
        <div className="form-group">
            <input type="text" name="search" placeholder="Search movie" className="form-control"  onChange={handleSearchChange} />
            <button type="submit" className="btn btn-primary ml-2"><i className="fa fa-search" aria-hidden="true"></i></button>
        </div>
    </form>
);
}

export default Search;
