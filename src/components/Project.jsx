import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CssBaseline } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import movieReelData from '../lotties/movieReel.json';
import codeGearsData from '../lotties/codeGrearsData.json';
import weatherData from '../lotties/weatherData.json';
import coffeeData from '../lotties/coffeeData.json';
import dripCoffeeData from '../lotties/dripCoffeeData.json'
import mapData from '../lotties/mapData.json';
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
      <CssBaseline />
      <Typography className={classes.paper} variant="h1" styles={{ marginTop: '30px' }}>
        My Work
      </Typography>
      <Grid container className={classes.cardGroup} direction="row" justify="center" alignItems="center" spacing={8} xs={12}>
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
            chipHighlightList=" "
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
            description="Rosetta is a language translation service using web scraping and machine learning"
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
            description="Upvote is a interactive voting platform using micro-services"
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
            animationData={dripCoffeeData}
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
