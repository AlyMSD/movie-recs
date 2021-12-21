import React from 'react';


const MovieList = (props) => {
    const FavoriteComponent = props.favoriteComponent;
	return (
		<>
            <div className="d-flex flex-wrap justify-content-center">
                {props.movies.map((movie, index) => (
                    <div className='image-container p-2'>
                        <h5 className='d-flex align-items-center justify-content-center'>{movie.Title}</h5>
                        <img src={movie.Poster} alt={movie}></img>
                        <div
						onClick={() => props.handleFavoritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavoriteComponent />
					</div>
                    </div>
                ))}
            </div>
		</>
	);
};

export default MovieList;