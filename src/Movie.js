import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
	render (){
		return (
			<div>
				<MoviePoster movieImage = {this.props.movieImage}/>
				<h1>{this.props.movieTitle}</h1>
			</div>	
		)
	}
}

class MoviePoster extends Component {
	render(){
		return(
			<img src={this.props.movieImage} />
		)
	}
}


export default Movie;