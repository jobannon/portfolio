import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CssBaseline } from '@material-ui/core';
import movieReelData from '../lotties/movieReel.json';
import codeGearsData from '../lotties/codeGrearsData.json';
import weatherData from '../lotties/weatherData.json';
import coffeeData from '../lotties/coffeeData.json';
import mapData from '../lotties/mapData.json';
import upvoteAltAltData from '../lotties/upvoteAltAltData.json';
import upvoteHeartData from '../lotties/upVoteHeartData.json';
import upvoteThumbData from '../lotties/upvoteThumbData.json';
import upvoteAwardData from '../lotties/upvoteAwardData.json';
import upvoteRocketAltData from '../lotties/upvoteRocketAltData.json';
import ProjectCard from './ProjectCard';

function Project() {
  const useStyles = makeStyles((theme) => ({
    root: {
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

  const classes = useStyles();

  return (
    <>
      <Typography className={classes.paper} variant="h1" styles={{ marginTop: '30px' }}>
        My Work
      </Typography>
      <Grid container className={classes.cardGroup} direction="row" justify="center" alignItems="center" style={{backgroundColor: 'red'}} spacing={8} xs={12} lg={6}>
        <Grid item>
          <ProjectCard
            avatarLabelAria="Denver Poverty Map"
            avatarLabel="DPM"
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
            avatarLabelAria="Upvote"
            avatarLabel="UV"
            title="Upvote"
            subheader="Recent"
            animationData={upvoteRocketAltData}
            height="50"
            width="50"
            description="Upvote is a interative voting platform using microservices"
            gitHubLink="https://github.com/jobannon/upvote_api"
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
            description="Coffee Town is a e-commerce platform selling everyone's favorite - coffee"
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
