import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from './Movie'
// import { __await } from 'tslib';

// asynchronous: 비동기, 한 라인이 끝나든 말든 다음 라인 ㄱㄱ 그리고 promise, 시나리오 관리 가능

class App extends Component {

  state = {}

  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie =>{
      return <Movie 
        title={movie.title}
        poster={movie.medium_cover_image}
        genres = {movie.genres}
        synopsis = {movie.synopsis}
        key={movie.id} />
    })
    return movies
  } 

  _getMovies = async() => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }
  
  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    // .then(response => console.log(response))
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    const {movies} = this.state;
    return (
      <div className={ movies ? "App" : "App__loading"}>
        {movies ? this._renderMovies() : 'Loading..'}
      </div>
    );
  }
}

export default App;
