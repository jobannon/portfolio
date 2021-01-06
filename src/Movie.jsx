import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Grid from '@material-ui/core/Grid';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import smallstars from './smallstars.png';

const Movie = (props) => {
  const {
    voteCount, imdbId, posterUrl, title, type, year,
  } = props;

  const {
    Actors, Awards, BoxOffice,
    Country, DVD, Director, Genre, Language,
    Metascore, Plot, Production, Rated, Released, Response, Runtime,
    Writer, Year, imdbRating,
  } = props.details;

  const [count, setCount] = useState(voteCount);

  const [expanded, setExpanded] = useState(false);

  const vote = (direction, incomingImdbId) => {
    setCount(count + direction);

    let baseUrl = '';
    if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development') {
      baseUrl = 'be-movie-superstar-redux.herokuapp.com';
    }
    // change if backend / frontend testing needed.
    //  else { baseUrl = "http://localhost:4000" }

    fetch(`https://${baseUrl}/api/v1/votes?vote=${direction}&imdbid=${incomingImdbId}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ vote: direction, imdbid: incomingImdbId }),
    });
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    thumbUp: {
      marginLeft: theme.spacing(1),
      fontSize: 50,
    },
    thumbDown: {
      marginLeft: theme.spacing(1),
      fontSize: 50,
    },
    countBox: {
      margin: 'auto',
    },
    voteBox: {
      margin: 'auto',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      height: '150',
      width: '25vh',
    },
    cardMedia: {
      paddingTop: '55.25%', // 16:9
    },
    cardContent: {
      flexGrow: 0,
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Grid item>
        <Card className={classes.card} variant="outlined">
          <CardMedia
            title={title}
            style={{ height: 100, paddingTop: '56.25%' }}
            image={posterUrl === 'N/A' ? smallstars : posterUrl}
          />
          <CardContent>
            <Typography>
              <h2 className="title">
                {title.toUpperCase()}
                {' '}
              </h2>
            </Typography>
            <Typography>
              <h3>{type.toUpperCase()}</h3>
            </Typography>
          </CardContent>
          <CardActions className={classes.voteBox} />
          <CardActions className={classes.voteBox}>
            <ThumbUpIcon className={classes.thumbUp} color="primary" onClick={() => vote(1, imdbId)} />
            <ThumbDownIcon className={classes.thumbDown} color="primary" onClick={() => vote(-1, imdbId)} />
          </CardActions>
          <CardActions className={classes.countBox}>
            <Typography className={classes.voteCount} color="primary">
              Votes:
              {' '}
              {count}
            </Typography>
          </CardActions>
          <CardActions>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={() => handleExpandClick(imdbId)}
              aria-expanded={expanded}
              aria-label="show more"
              color="primary"
              size="medium"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <h3>
                IMDB ID:
                {imdbId}
              </h3>
              <h3>
                Date Published:
                {year}
              </h3>
              <Typography>
                <h4>Actors:</h4>
                {' '}
                {Actors}
              </Typography>
              <Typography>
                <h4>Awards:</h4>
                {' '}
                {Awards}
              </Typography>
              <Typography>
                <h4>Box Office:</h4>
                {' '}
                {BoxOffice}
              </Typography>
              <Typography>
                <h4>Country:</h4>
                {' '}
                {Country}
              </Typography>
              <Typography>
                <h4>DVD:</h4>
                {' '}
                {DVD}
              </Typography>
              <Typography>
                <h4>Director:</h4>
                {' '}
                {Director}
              </Typography>
              <Typography>
                <h4>Genre:</h4>
                {' '}
                {Genre}
              </Typography>
              <Typography>
                <h4>Language:</h4>
                {' '}
                {Language}
              </Typography>
              <Typography>
                <h4>Metascore:</h4>
                {' '}
                {Metascore}
              </Typography>
              <Typography>
                <h4>Plot:</h4>
                {' '}
                {Plot}
              </Typography>
              <Typography>
                <h4>Production:</h4>
                {' '}
                {Production}
              </Typography>
              <Typography>
                <h4>Rated:</h4>
                {' '}
                {Rated}
              </Typography>
              <Typography>
                <h4>Released:</h4>
                {' '}
                {Released}
              </Typography>
              <Typography>
                <h4>Response:</h4>
                {' '}
                {Response}
              </Typography>
              <Typography>
                <h4>Runtime:</h4>
                {' '}
                {Runtime}
              </Typography>
              <Typography>
                <h4>Writer:</h4>
                {' '}
                {Writer}
              </Typography>
              <Typography>
                <h4>Year:</h4>
                {' '}
                {Year}
              </Typography>
              <Typography>
                <h4>Imdb Rating:</h4>
                {' '}
                {imdbRating}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    </>
  );
};

export default Movie;

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  Actors: PropTypes.string.isRequired,
  Awards: PropTypes.string.isRequired,
  BoxOffice: PropTypes.string.isRequired,
  Country: PropTypes.string.isRequired,
  DVD: PropTypes.string.isRequired,
  Director: PropTypes.string.isRequired,
  Genre: PropTypes.string.isRequired,
  Language: PropTypes.string.isRequired,
  Plot: PropTypes.string.isRequired,
  Production: PropTypes.string.isRequired,
  Rated: PropTypes.string.isRequired,
  Released: PropTypes.string.isRequired,
  Response: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  Writer: PropTypes.string.isRequired,
  Metascore: PropTypes.number.isRequired,
  Runtime: PropTypes.number.isRequired,
  voteCount: PropTypes.number.isRequired,
  imdbId: PropTypes.number.isRequired,
  imdbRating: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  details: PropTypes.array.isRequired,
};
