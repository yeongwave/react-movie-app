import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from './Movie'


// Render: componentWillMount() -> render() -> componentDidMount()

// Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()



class App extends Component {

  state = {}

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          // ...this.state.movies,
          {
            movieTitle: "Pogba",
            movieImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3C60EAWsovxk9t_6kcoZiNP7rISGdwonobEnG7oYWgnxtn0qN"
          },
          {
            movieTitle: "Ronaldo",
            movieImage: "https://cdn.newsapi.com.au/image/v1/26cebf396ab187617a05356a674e530a"
          },
          {
            movieTitle: "Messi",
            movieImage: "https://img.timesnownews.com/story/1541397989-lionelmessibarcelona-AP.jpg?d=600x450"
          },
          {
            movieTitle: "Hazard",
            movieImage: "https://images.performgroup.com/di/library/GOAL/b0/8a/eden-hazard-chelsea_1kznm90y6aigk1qd33g9ud94lx.jpg?t=394192326&quality=90&w=1280"
          },
          {
            movieTitle: "modric",
            movieImage: "https://www.calcioefinanza.it/wp-content/uploads/2017/11/modric.jpg"
          }
          // , ...this.state.movies
        ]
      })
    }, 3000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) =>{
      return <Movie movieTitle={movie.movieTitle} movieImage={movie.movieImage} key={index} />
    })
    return movies
  } 

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading..'}
      </div>
    );
  }
}

export default App;
