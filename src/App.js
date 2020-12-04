import React, {Component} from "react"
import { Card } from '@material-ui/core';
import './App.scss';
import Movie from './Movie' 
import SearchBar from "material-ui-search-bar";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Pagination from "react-js-pagination";
import { SatelliteSharp } from "@material-ui/icons";

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
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            activePage: 1,
            searchedMovies: [],
            term: "",
            value: "",
            hasSearched: false
        }
    }
    
    handlePageChange(pageNumber) {
      this.setState({activePage: pageNumber}, function() {this.executeSearch()});
    }

    executeSearch(){
        // this.setState({term: term_value})
        // fetch(`https://movie-superstar.herokuapp.com/api/v1/movies?s=${term}`)
        console.log(`from state ${this.state.activePage}`)

        fetch(`http://localhost:4000/api/v1/movies?s=${this.state.value}&page=${this.state.activePage}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    searchedMovies: data,
                    hasSearched: true
                })
            })
    }

    render() {
        const { classes } = this.props;
        var movie_array = this.state.searchedMovies

        if(movie_array.length > 0){
          var cleanedMovies = movie_array.map((movie, i) =>
            <Movie 
              key={i}
              title={movie.Title} 
              posterUrl={movie.Poster} 
              year={movie.Year} 
              type={movie.Type} 
              imdbId={movie.imdbID} 
              count={movie.count}
              />
          );
        }

      return (
        <React.Fragment>
          <CssBaseline />
          <Container>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
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
              onRequestSearch={() => this.executeSearch(this.state.value)}
            />
          </Container>
          <Container>
          {this.state.hasSearched && 
              <Pagination 
                firstPageText='first'
                lastPageText='last'
                activePage={(this.state.activePage)}
                itemsCountPerPage={10}
                totalItemsCount={100}
                pageRangeDisplayed={10}
                onChange={this.handlePageChange.bind(this)}
              />
          }
          </Container>
          {/* <img src = {props.posterUrl}></img> */}
          <Grid container direction="column" justify="center" spacing={3} alignItems="center">
            {cleanedMovies}
          </Grid>
          <Container>
          {this.state.hasSearched && 
              <Pagination 
                prevPageText='prev'
                nextPageText='next'
                firstPageText='first'
                lastPageText='last'
                activePage={(this.state.activePage)}
                itemsCountPerPage={10}
                totalItemsCount={100}
                pageRangeDisplayed={10}
                onChange={this.handlePageChange.bind(this)}
              />
          }
          </Container>
        </React.Fragment>
      );
    }
}


// export default App
export default withStyles(styles)(App);