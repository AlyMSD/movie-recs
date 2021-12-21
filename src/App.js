import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MoviesList';
import SearchBox from './components/SearchBox';
import MovieListHeading from './components/MovieListHeading';
import AddFavorites from './components/AddToFavorites';


const App = () => {
	document.body.style = 'background: #1e1e2f;';
	const [movies, setMovies] = useState([]);
  	const [searchValue, setSearchValue] = useState('');
  	const [favorites, setFavorites] = useState([]);

  	const getMovieAPI = async (searchValue)=> {
    const api_key = "bfecc820";
    const api_url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${api_key}`;

    const response = await fetch(api_url);
    const dbJSON = await response.json();

    if (dbJSON.Search) {
			setMovies(dbJSON.Search);
		}
  	};

  	const addFavoriteMovie = (movie) => {
	  const newFavoriteList =[...favorites, movie];
	  setFavorites(newFavoriteList);
  	};

  	useEffect(() => {
		getMovieAPI(searchValue);
	}, [searchValue]);

	return (
		<div className='container-fluid movie-app text-white'>
      <div className='row d-flex align-items-center justify-content-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<MovieList movies={movies} favoriteComponent={AddFavorites} handleFavoritesClick={addFavoriteMovie}/>
			</div>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Favorites'/>
			</div>
			<div className='row'>
				<MovieList movies={favorites} favoriteComponent={AddFavorites}/>
			</div>
		</div>
	);
};

export default App;