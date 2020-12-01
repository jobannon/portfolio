import React from "react"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body1" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        https://www.joshcodes.dev
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Movie(props) {

  // const cards = {props.cards}
  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(1),
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
  const cards = [0, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
      <React.Fragment>
        <Grid item >
          <Card className={classes.card} variant="outlined" style={{height:"25vh", width: "15vh"}}>
            <CardMedia
              title={props.title}
              style={{height: 100, paddingTop: '56.25%'}}
              image={props.posterUrl}
            >
              {/* <img src={props.posterUrl} alt="movie title photo"></img> */}
            </CardMedia>
            {/* </CardMedia> */}
            <CardContent>
              <Typography gutterBottom wrap variant="h6" >
                <h4 class="title" >{props.title.toUpperCase()}</h4>
              </Typography>
              <Typography>
                <h3>Date Published: {props.year}</h3>
                <h3>{props.type.toUpperCase()}</h3>
                <h3>IMDB ID: {props.imdbid}</h3>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                View
              </Button>
              <Button size="small" color="primary">
                Edit
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </React.Fragment>
    )
}

export default Movie