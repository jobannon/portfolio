import React from "react"
import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Grid from '@material-ui/core/Grid';

import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';


function Movie(props){
  const vote = (direction, imdbId) => {
    setCount(count + direction)
    fetch(`http://localhost:4000/api/v1/votes?vote=${direction}&imdbid=${imdbId}`, {
    // fetch(`https://movie-superstar.herokuapp.com/api/v1/vote?v=${direction}`, {
      method: 'POST', 
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({vote: direction, imdbid: imdbId}),
      })
  }

  
  const [count, setCount] = useState(props.count);

  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(1),
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
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(7, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(3),
    },
    cardGrid: {
      paddingTop: theme.spacing(7),
      paddingBottom: theme.spacing(7),
    },
    card: {
      height: '99%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '55.25%', // 16:9
    },
    cardContent: {
      flexGrow: 0,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(5),
    },
  }));

  const classes = useStyles()

  return (
    <React.Fragment>
      <Grid item >
        <Card className={classes.card} variant="outlined" style={{height:"35vh", width: "25vh"}}>
          <CardMedia
            title={props.title}
            style={{height: 100, paddingTop: '56.25%'}}
            image={props.posterUrl}
          >
            {/* <img src={props.posterUrl} alt="movie title photo"></img> */}
          </CardMedia>
          <CardContent>
            <Typography gutterBottom wrap variant="h6" >
              <h4 class="title" >{props.title.toUpperCase()}</h4>
            </Typography>
            <Typography>
              <h3>{props.type.toUpperCase()}</h3>
              <h3>Date Published: {props.year}</h3>
              <h3>IMDB ID: {props.imdbId}</h3>
            </Typography>
          </CardContent>
          <CardActions className={classes.voteBox}>
            <ThumbUpIcon className={classes.thumbUp} size="large" color="primary" onClick={()=> vote(1, props.imdbId)}  />
            <ThumbDownIcon className={classes.thumbDown} size="large" color="primary" onClick={() => vote(-1, props.imdbId)} />
          </CardActions>
          <CardActions className={classes.countBox}>
            <Typography className={classes.voteCount} color="primary">
              Votes: {count}
            </Typography>
          </CardActions>
        </Card>
      </Grid>
    </React.Fragment>
  )
}

export default Movie