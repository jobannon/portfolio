import React, { useEffect, useState } from 'react';
import './App.scss';
import SearchBar from 'material-ui-search-bar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Pagination from '@material-ui/lab/Pagination';
import { CircularProgress } from '@material-ui/core';
import Movie from './Movie';

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

function Search() {
  const [page, setPage] = useState(1);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  function executeSearch() {
    let baseUrl = '';

    if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development') {
      baseUrl = 'movie-superstar.herokuapp.com';
    }
    // change if backend / frontend testing needed.
    //  else { baseUrl = "http://localhost:4000"}

    fetch(`https://${baseUrl}/api/v1/movies?s=${value}&page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setSearchedMovies(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function handleChange(event, superValue) {
    setPage(superValue);
  }

  useEffect(() => {
    executeSearch();
  }, [page]);

  useEffect(() => {
    if (searchedMovies.length > 0) { setHasSearched(true); }
  }, [searchedMovies]);

  function getCleanedMovies() {
    let cleanedMovies = [];
    const movieArray = searchedMovies;

    if (movieArray.length > 0) {
      cleanedMovies = (movieArray.map((movie) => (
        <Movie
          key={movie.imdbID}
          title={movie.Title}
          posterUrl={movie.Poster}
          year={movie.Year}
          type={movie.Type}
          imdbId={movie.imdbID}
          count={movie.count}
          details={movie.details}
        />
      )));
    }
    return cleanedMovies;
  }

  return (
    <>
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
          value={value}
          onChange={(newTerm) => setValue(newTerm)}
          onRequestSearch={() => { executeSearch(value); setLoading(true); }}
        />
      </Container>
      <Container>
        <Grid container direction="column" justify="center" spacing={-1} flexGrow={2} alignItems="center" m={5}>
          <Box m="20px">
            {hasSearched && (
            <Pagination
              count={10}
              onChange={handleChange}
              page={page}
              color="primary"
              size="large"
              shape="rounded"
            />
            )}
          </Box>
        </Grid>
      </Container>
      <Grid container direction="column" justify="center" spacing={3} alignItems="center">
        {
              ((loading) && (value.length > 0))
                ? <CircularProgress />
                : getCleanedMovies()
            }
      </Grid>
      <Grid container direction="column" justify="center" spacing={-1} flexGrow={2} alignItems="center" m={5}>
        <Box m="20px">
          {hasSearched
            && (
            <Pagination
              count={10}
              color="primary"
              size="large"
              shape="rounded"
              onChange={handleChange}
              page={page}
            />
            )}
        </Box>
      </Grid>
    </>
  );
}

export default withStyles(styles)(Search);
