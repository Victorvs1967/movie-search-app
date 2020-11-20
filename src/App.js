import React, { useReducer, useEffect } from 'react';

import Header from "./components/Header";
import Movie from './components/Movie';
import Loader from './components/Loader';

import { API_SEARCH } from './Const';
import { reducer, initialState } from './reducer';

const App = () => {

  const [ state, dispatch ] = useReducer(reducer, initialState);

  const fetchMovies = search => {

    dispatch({
      type: 'SEARCH_MOVIES_REQUEST'
    });

    fetch(`${API_SEARCH}${search}`)
    .then(response => response.json())
    .then(result => dispatch({
      type: 'SEARCH_MOVIES_SUCCESS',
      payload: result.results
    }))
    .catch(error => dispatch({
      type: 'SEARCH_MOVIES_FAILURE',
      error: error
    }))
  };

  useEffect(() => fetchMovies('indiana'), [])

  const { movies, errorMessage, loading } = state;

  return (
    <div className="container px-0 pt-5">
      <Header 
        fetchMovies={fetchMovies}
      />
      <h2 className="text-center my-5">Movies List</h2>
      {loading && !errorMessage ?
        <div className="row justify-content-center mt-5"><Loader /></div> :
        <div className="card-deck row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {errorMessage ?
          <h2 style={{textAlign: 'center', margin: 'auto', color: 'red'}}>Fetch error: {errorMessage}</h2> :
          movies.map(movie => <Movie movie={movie}  key={movie.id} />)}
        </div>
      }
    </div>
  );
}

export default App;
