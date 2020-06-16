import React from 'react';
import './App.css';
import Movie from './Movie';
import MovieForm from './MovieForm';

class App extends React.Component {

  constructor( props ){
    super( props );
    this.state = {
      addQuery: {
        title: "",
        year: "",
        rating: ""
      },
      movies: [],
      apiUrl: 'http://localhost:8080',
      error: ""
    }
  }
  
  onQueryChange = (change) => {
    this.setState({
      addQuery: change.target.value
    });
  }

  handleAdd = () => {
    let url = this.state.apiUrl + this.state.addQuery;
    fetch(url, {
      method: "POST"
    }).then(res => {
      return res.json()
    })
    .then(resJSON => {
      this.setState({
        movies: resJSON
      });
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  componentDidMount(){
    let url = this.state.apiUrl
    fetch(url, {
      method: "GET"
    }).then((res) => {
      return res.json();
    }).then((resJSON) => {
      this.setState({
        movies: resJSON
      }).catch((err) => {
        error: err
      })
    })
  }

  render(){
    const { movies, addQuery } = this.state
    return (
      <div>
        <MovieForm
          title={ addQuery.title }
          year={ addQuery.year }
          rating={ addQuery.rating }
          onChange={ this.onQueryChange }
          add={ this.handleAdd }
        />
        <div>
          {movies.map((movie, index) => {
            return (
              <Movie
                key={ index }
                title={ movie.title }
                year={ movie.year }
                rating={ movie.rating }
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
