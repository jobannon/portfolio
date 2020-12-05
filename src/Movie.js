import React, { useEffect, useRef } from "react"
import MovieDetails from './MovieDetails' 
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useParams } from "react-router-dom";
import smallstars from './smallstars.png'

import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Movie(props){

  const [hasImdb, setImdb] = useState(0);
  const [hasError, setErrors] = useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [moreDetails, setMoreDetails] = React.useState({moreDetails: []});

  const vote = (direction, imdbId) => {
    setCount(count + direction)

    var baseUrl = ""
    if(process.env.NODE_ENV === "production"){
      baseUrl = "https://movie-superstar.herokuapp.com"  
    } else {
      baseUrl = "http://localhost:4000"  
    }

    fetch(`${baseUrl}/api/v1/votes?vote=${direction}&imdbid=${imdbId}`, {
    // fetch(`https://movie-superstar.herokuapp.com/api/v1/vote?v=${direction}`, {
      method: 'POST', 
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({vote: direction, imdbid: imdbId}),
      })
  }

  const handleExpandClick = (imdbIdValue) => {
    setExpanded(!expanded);
  }

  const [count, setCount] = useState(props.count);

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

  const classes = useStyles()
  const photo = props.posterUrl === "N/A"? smallstars : props.posterUrl

  return (
    <React.Fragment>
      <Grid item >
        <Card className={classes.card} variant="outlined" >
          <CardMedia
            title={props.title}
            style={{height: 100, paddingTop: '56.25%'}}
            image={photo} 
          >
          </CardMedia>
          <CardContent>
            <Typography >
              <h2 className="title">{props.title.toUpperCase()} </h2>
            </Typography>
            <Typography>
              <h3>{props.type.toUpperCase()}</h3>
            </Typography>
          </CardContent>
          <CardActions className={classes.voteBox}>
          </CardActions>
          <CardActions className={classes.voteBox}>
            <ThumbUpIcon className={classes.thumbUp} color="primary" onClick={()=> vote(1, props.imdbId)}  />
            <ThumbDownIcon className={classes.thumbDown} color="primary" onClick={() => vote(-1, props.imdbId)} />
          </CardActions>
          <CardActions className={classes.countBox}>
            <Typography className={classes.voteCount} color="primary">
              Votes: {count}
            </Typography>
          </CardActions>
          <CardActions>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={()=> handleExpandClick(props.imdbId)}
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
              <h3>IMDB ID: {props.imdbId}</h3>
              <h3>Date Published: {props.year}</h3>
              <Typography >
                <h4>Actors:</h4> {props.details.Actors}
              </Typography>
              <Typography >
                <h4>Awards:</h4> {props.details.Awards}
              </Typography>
              <Typography >
                <h4>Box Office:</h4> {props.details.BoxOffice}
              </Typography>
              <Typography >
                <h4>Country:</h4> {props.details.Country}
              </Typography>
              <Typography >
                <h4>DVD:</h4> {props.details.DVD}
              </Typography>
              <Typography >
                <h4>Director:</h4> {props.details.Director}
              </Typography>
              <Typography >
                <h4>Genre:</h4> {props.details.Genre}
              </Typography>
              <Typography >
                <h4>Language:</h4> {props.details.Language}
              </Typography>
              <Typography >
                <h4>Metascore:</h4> {props.details.Metascore}
              </Typography>
              <Typography >
                <h4>Plot:</h4> {props.details.Plot}
              </Typography>
              <Typography >
                <h4>Production:</h4> {props.details.Production}
              </Typography>
              <Typography >
                <h4>Rated:</h4> {props.details.Rated}
              </Typography>
              <Typography >
                <h4>Released:</h4> {props.details.Released}
              </Typography>
              <Typography >
                <h4>Response:</h4> {props.details.Response}
              </Typography>
              <Typography >
                <h4>Runtime:</h4> {props.details.Runtime}
              </Typography>
              <Typography >
                <h4>Writer:</h4> {props.details.Writer}
              </Typography>
              <Typography >
                <h4>Year:</h4> {props.details.Year}
              </Typography>
              <Typography >
                <h4>Imdb Rating:</h4> {props.details.imdbRating}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    </React.Fragment>
  )
}

export default Movie