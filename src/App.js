import React, {Component} from "react"
import { Card } from '@material-ui/core';
import './App.scss';
import Movie from './Movie' 
import SearchBar from "material-ui-search-bar";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {},
            searchedMovies: []
        }
    }
    
    componentDidMount() {

    }

    executeSearch(term){
        this.setState({loading: true})
        fetch(`https://movie-superstar.herokuapp.com/api/v1/movies?s=${term}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    searchedMovies: data['Search']
                })
            })
    }
    
    render() {
        var movie_array = this.state.searchedMovies

        var cleanedMovies = movie_array.map((movie) =>
          <Movie 
            title={movie.Title} 
            posterUrl={movie.Poster} 
            year={movie.Year} 
            type={movie.Type} 
            imdbid={movie.imdbID} 
            />
        );

      return (
        <React.Fragment>
          <CssBaseline />
          <Container>
            <SearchBar
              value={this.state.value}
              onChange={(newTerm) => this.setState({ value: newTerm })}
              onRequestSearch={() => this.executeSearch(this.state.value)}
            />
          </Container>
          {/* <img src = {props.posterUrl}></img> */}
          <Grid container direction="column" justify="center" spacing={3} alignItems="center"  >
            {cleanedMovies}
          </Grid>
        </React.Fragment>
      );
    }
}


export default App
