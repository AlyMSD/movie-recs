import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardOverlay, MDBCardImage } from 'mdb-react-ui-kit';


const MovieList = (props) => {
    const FavoriteComponent = props.favoriteComponent;
	return (
		<>
            <div className="d-flex flex-wrap justify-content-center">
                {props.movies.map((movie, index) => (
                    <div className='image-container p-2'>
                        <img src={movie.Poster} alt='movie'></img>
                        <div onClick={() => props.handleFavoritesClick(movie)} 
                        className='overlay d-flex align-items-center justify-content-center text-white'>
                            <FavoriteComponent/>
                        </div>
                    </div>
                ))}
            </div>
		</>
	);
};

export default MovieList;