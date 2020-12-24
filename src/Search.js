import React, {Component} from "react"
import './App.scss';
import Movie from './Movie' 
import SearchBar from "material-ui-search-bar";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Pagination from '@material-ui/lab/Pagination';
import { CircularProgress } from "@material-ui/core";

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});
class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            searchedMovies: [],
            term: "",
            value: "",
            hasSearched: false,
            page: 1
        }
    }
    
    handlePageChange(event, value) {
      this.setState({page: value}, function() {this.executeSearch()});
    }

    executeSearch(){
        // var baseUrl = ""
        // if(process.env.NODE_ENV === "production"){
        //   baseUrl = "https://movie-superstar.herokuapp.com"  
        // } else {
        //   baseUrl = "http://localhost:4000"  
        // }
        fetch(`https://movie-superstar.herokuapp.com/api/v1/movies?s=${this.state.value}&page=${this.state.page}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                  loading: false,
                  searchedMovies: data,
                  hasSearched: true
                })
            })
            .catch(error => {
                console.error('Error:', error);
            })
    }

    render() {
        var movieArray = this.state.searchedMovies
        // var errorFromMovie = this.state.searchedMovies
        // debugger 

        // if(errorFromMovie.length > 0){
        //   showErrorImage = true
        // }
        if(movieArray.length > 0){
          var cleanedMovies = movieArray.map((movie, i) =>
            <Movie 
              key={i}
              title={movie.Title} 
              posterUrl={movie.Poster} 
              year={movie.Year} 
              type={movie.Type} 
              imdbId={movie.imdbID} 
              count={movie.count}
              details={movie.details}
              />
          );
        }

      return (
        <React.Fragment>
          <CssBaseline />
          <Container>
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography variant="h6" color="inherit">
                Movie Superstar 
              </Typography>
            </Toolbar>
          </AppBar>
          </Container>
          <Container>
            <SearchBar
              value={this.state.value}
              onChange={(newTerm) => this.setState({ value: newTerm })}
              onRequestSearch={() => {this.executeSearch(this.state.value); this.setState({loading: true})}}
            />
          </Container>
          <Container>
            <Grid container direction="column" justify="center" spacing={-1} flexGrow={2} alignItems="center" m={5}>
              <Box m={'20px'}>
                {this.state.hasSearched && 
                    <Pagination 
                      count={10}
                      color='primary'
                      size='large'
                      shape='rounded'
                      onChange={this.handlePageChange.bind(this)}
                      page={(this.state.page)}
                    />
                }
                </Box>
              </Grid>
          </Container>
          <Grid container direction="column" justify="center" spacing={3} alignItems="center">
            {
              ((this.state.loading) && (this.state.value.length > 0)) ? 
                <CircularProgress />
                :
                cleanedMovies
            }
          </Grid>
          <Grid container direction="column" justify="center" spacing={-1} flexGrow={2} alignItems="center" m={5}>
            <Box m={'20px'}>
              {this.state.hasSearched && 
                  <Pagination 
                    count={10}
                    color='primary'
                    size='large'
                    shape='rounded'
                    onChange={this.handlePageChange.bind(this)}
                    page={(this.state.page)}
                  />
              }
              </Box>
          </Grid>
        </React.Fragment>
      );
    }
}

export default withStyles(styles)(Search);