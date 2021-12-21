import React from 'react';

const MovieListHeading = (props) => {
	return (
		<div className='d-flex align-items-center justify-content-center'>
			<h1>{props.heading}</h1>
		</div>
	);
};

export default MovieListHeading;