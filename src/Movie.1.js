import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// class Movie extends Component {

// 	static propTypes = {
// 		movieTitle: PropTypes.string.isRequire,
// 		movieImage: PropTypes.string.isRequire,
//   }

// 	render (){
// 		return (
// 			<div>
// 				<MoviePoster movieImage = {this.props.movieImage}/>
// 				<h1>{this.props.movieTitle}</h1>
// 			</div>	
// 		)
// 	}
// }

// class MoviePoster extends Component {

// 	static propTypes = {
// 		movieImage: PropTypes.string.isRequire
// 	}

// 	render(){
// 		return(
// 			<img src={this.props.movieImage} />
// 		)
// 	}
// }

function Movie({movieTitle ,movieImage}){
	return(
		<div>
			<MoviePoster movieImage = {movieImage}/>
			<h1>{movieTitle}</h1>
		</div>	
	)
}

function MoviePoster({movieImage}){
	return(
		<img src={movieImage} />
	)
}

Movie.propTypes = {
	movieTitle: PropTypes.string.isRequire,
	movieImage: PropTypes.string.isRequire
}

MoviePoster.propTypes = {
	movieImage: PropTypes.string.isRequire,
}

export default Movie;