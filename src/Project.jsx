import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Lottie from 'react-lottie';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CssBaseline } from '@material-ui/core';
import movieReelData from './lotties/movieReel.json';
import codePromptData from './lotties/codePromptData.json';
import codeGearsData from './lotties/codeGrearsData.json';
import weatherData from './lotties/weatherData.json';
import coffeeData from './lotties/coffeeData.json';
import mapData from './lotties/mapData.json';
import TopBar from './TopBar';
import ProjectCard from './ProjectCard';

function Project() {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      marginTop: '30px',
      color: theme.palette.text.secondary,
    },
    cardGroup: {
      marginTop: '5vh',
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
      backgroundColor: theme.palette.primary.light,
    },
  }));

  const defaultOptionsReturn = (nameOf) => ({
    loop: true,
    autoplay: true,
    animationData: nameOf,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  });

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <TopBar />
      <Typography className={classes.paper} variant="h1" styles={{marginTop: '30px'}}>
        My Work

      </Typography>
      <Grid container className={classes.cardGroup} direction="row" justify="center" alignItems="center" spacing={3} xs={12}>
        <Grid item>
          <ProjectCard
            avatarLabelAria="Denver Poverty Map"
            avatarLabel="CT"
            title="Denver Poverty Map"
            subheader="Working"
            animationData={mapData}
            description="I am working with Code For Denver on geo-visualization of Poverty Rates"
            disableButton
            gitHubLink="https://github.com/jobannon/monster_shop_individual_coupon"
            liveLink=""
            chipList=" "
          />
        </Grid>
        <Grid item>
          <ProjectCard
            avatarLabelAria="Movie SuperStar"
            avatarLabel="MSS"
            title="Movie SuperStar"
            subheader="Latest"
            animationData={movieReelData}
            description="Movie SuperStar is an exercise in API design and testing"
            gitHubLink="https://github.com/MovieSuperStar"
            liveLink=""
            chipHightlightList=" "
            chipTechList=" "
          />
        </Grid>
        <Grid item>
          <ProjectCard
            avatarLabelAria="Rosetta"
            avatarLabel="R"
            title="Rosetta"
            subheader="Recent"
            animationData={codeGearsData}
            description="Rosetta is a language translation service using webscraping and machine learning"
            gitHubLink="https://github.com/rosetta-team"
            liveLink=""
            chipList=" "
          />
        </Grid>
        <Grid item>
          <ProjectCard
            avatarLabelAria="Sweater Weather"
            avatarLabel="SW"
            title="Sweater Weather"
            subheader="Recent"
            animationData={weatherData}
            description="Sweater Weather is an backend API that returns weather related data"
            gitHubLink="https://github.com/jobannon/sweater_weather"
            liveLink=""
            chipList=" "
          />
        </Grid>
        <Grid item>
          <ProjectCard
            avatarLabelAria="Coffee Town"
            avatarLabel="CT"
            title="Coffee Town"
            subheader="Recent"
            animationData={coffeeData}
            description="Coffee Town is a e-commerce platform sell everyone's favorite - coffee"
            gitHubLink="https://github.com/jobannon/monster_shop_individual_coupon"
            liveLink=""
            chipList=" "
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Project;
