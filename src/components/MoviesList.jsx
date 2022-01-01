import React from 'react';


const MovieList = (props) => {
    const FavoriteComponent = props.favoriteComponent;
	return (
		<>
            <div className="d-flex flex-wrap justify-content-center">
                {props.movies.map((movie, index) => (
                    <div className='image-container' style={{margin: '10px', backgroundColor: 'black'}}>
                        <img className='mx-auto' src={movie.Poster} alt={movie.Title}></img>
                        <div
						onClick={() => props.handleFavoritesClick(movie)}
						className='overlay' 
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