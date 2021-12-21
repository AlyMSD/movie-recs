import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MoviesList';
import SearchBox from './components/SearchBox';
import MovieListHeading from './components/MovieListHeading';


const App = () => {
	const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieAPI = async (searchValue)=> {
    const api_key = "bfecc820";
    const api_url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${api_key}`;

    const response = await fetch(api_url);
    const dbJSON = await response.json();

    if (dbJSON.Search) {
			setMovies(dbJSON.Search);
		}
  };
  useEffect(() => {
		getMovieAPI(searchValue);
	}, [searchValue]);

	return (
		<div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<MovieList movies={movies} />
			</div>
		</div>
	);
};

export default App;