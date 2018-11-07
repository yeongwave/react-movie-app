import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

const movies = [
  {
    id: 1,
    movieTitle: "Ronaldo",
    movieImage: "https://cdn.newsapi.com.au/image/v1/26cebf396ab187617a05356a674e530a"
  },
  {
    id: 2,
    movieTitle: "Messi",
    movieImage: "https://img.timesnownews.com/story/1541397989-lionelmessibarcelona-AP.jpg?d=600x450"
  },
  {
    id: 3,
    movieTitle: "Hazard",
    movieImage: "https://images.performgroup.com/di/library/GOAL/b0/8a/eden-hazard-chelsea_1kznm90y6aigk1qd33g9ud94lx.jpg?t=394192326&quality=90&w=1280"
  },
  {
    id: 4,
    movieTitle: "modric",
    movieImage: "https://www.calcioefinanza.it/wp-content/uploads/2017/11/modric.jpg"
  }
]



class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map(movie =>{
          return <Movie movieTitle={movie.movieTitle} movieImage={movie.movieImage} />
        })}
      </div>
    );
  }
}

export default App;
