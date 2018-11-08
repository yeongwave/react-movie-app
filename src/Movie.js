import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'

function Movie({title, poster, genres, synopsis}){
	return(
		<div className="Movie">
			<div className="Movie__Columns">
				<MoviePoster poster = {poster}/>
			</div>
			<div className="Movie__Columns">
				<h1>{title}</h1>
				<div className="Movie__Genre">
					{genres.map((genres, index) => <MovieGenres genres={genres} key={index}/>)}
				</div>
				<p className="Movie__Synopsis">
					<LinesEllipsis 
						text={synopsis}
						maxLine='3'
						ellipsis=' ...'
						trimRight
						basedOn='letters'
					/>
				</p>
			</div>
			
		</div>	
	)
}

function MoviePoster({poster, alt}){
	return(
		<img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
	)
}

function MovieGenres({genres}){
	return(
		<span className="Movie__Genre">{genres} </span>
	)
}

Movie.propTypes = {
	title: PropTypes.string.isRequire,
	poster: PropTypes.string.isRequire,
	genres: PropTypes.array.isRequire,
	synopsis: PropTypes.string.isRequire
};

MoviePoster.propTypes = {
	poster: PropTypes.string.isRequire,
	alt: PropTypes.string.isRequire
};

MovieGenres.PropTypes = {
	genres: PropTypes.string.isRequired
}

export default Movie;