import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CssBaseline } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import movieReelData from '../lotties/movieReel.json';
import codeGearsData from '../lotties/codeGrearsData.json';
import weatherData from '../lotties/weatherData.json';
import websiteData from '../lotties/websiteData.json';
import dripCoffeeData from '../lotties/dripCoffeeData.json';
import mapData from '../lotties/mapData.json';
import ticTacToeData from '../lotties/TicTacToeData.json';
import upvoteRocketAltData from '../lotties/upvoteRocketAltData.json';
import findSweepData from '../lotties/findSweepData.json';
import ProjectCard from './ProjectCard';

function Project() {
  const useStyles = makeStyles((theme) => ({
    root: {
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    cardGroup: {
      marginTop: '5vh',
      margin: 'auto',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    colorBox: {
      marginLeft: '10px',
      background: '#3f51b5',
      paddingLeft: '17px',
      paddingRight: '17px',
      paddingTop: '15px',
      paddingBottom: '15px',
      borderRadius: '25px',
      color: 'white',
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
    colorBox: {
      marginLeft: '10px',
      background: '#3f51b5',
      paddingLeft: '17px',
      paddingRight: '17px',
      paddingTop: '15px',
      paddingBottom: '15px',
      borderRadius: '50px',
      color: 'white',
    },
    headerText: {
      textAlign: 'center',
    },
  }));

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Grid container className={classes.cardGroup} direction="row" justify="center" alignItems="center" spacing={8} xs={12}>
        {/* <Grid item xs={12} className={classes.headerText}>
          <Typography className={classes.paper} variant="h1">
            <Box component="span" className={classes.colorBox}>
              Work
            </Box>
          </Typography>
        </Grid> */}
        <Grid item>
          <ProjectCard
            avatarLabelAria="Denver Poverty Map"
            avatarLabel="DPM"
            title="Denver Poverty Map"
            subheader="Working"
            stacksUsed={['vueJS', 'JS']}
            highLights={['Reel still being developed...']}
            animationData={mapData}
            description="I am working with Code For Denver on geo-visualization of Poverty Rates"
            disableButtonGithub
            gitHubLink=""
            liveLink="https://codefordenver.org"
            chipList=""
          />
        </Grid>
        <Grid item>
          <ProjectCard
            avatarLabelAria="Movie SuperStar"
            avatarLabel="MSS"
            title="Movie SuperStar"
            subheader="Latest"
            stacksUsed={['React', 'Rails', 'Ruby', 'Postgres', 'CircleCI', 'AWS', 'memcachier']}
            highLights={['Use of Caching', 'Microservice']}
            animationData={movieReelData}
            description="Movie SuperStar is an exercise in API design and testing"
            gitHubLink="https://github.com/MovieSuperStar"
            liveLink="https://fe-movie-superstar-redux.herokuapp.com"
            chipHighlightList=" "
            chipTechList=""
          />
        </Grid>
        <Grid item>
          <ProjectCard
            avatarLabelAria="Portfolio Site"
            avatarLabel="PS"
            title="Hi. I am Josh."
            subheader="Latest"
            stacksUsed={['React', 'NodeJS', 'MaterialUI', 'AWS']}
            highLights={['Professional Design', 'Interactive Storytelling']}
            animationData={websiteData}
            description="This portfolio site.  Built to show personality and interactivity."
            gitHubLink="https://github.com/jobannon/portfolio"
            liveLink="http://www.jobannon.com"
            chipHighlightList=" "
            chipTechList=" "
          />
        </Grid>
        <Grid item>
          <ProjectCard
            avatarLabelAria="FindSweeps.com"
            avatarLabel="R"
            title="FindSweeps.com"
            subheader="Recent"
            disableButton
            stacksUsed={['Ruby', 'Rails', 'Sass', 'Postgres']}
            highLights={['Dynamic CSS styling', 'Commercial Production App']}
            animationData={findSweepData}
            description="FindSweeps is a sweepstake aggregator.  The site is no longer in service, but was built during my tenure at Bang Equals Development "
            disableButtonGithub
            gitHubLink="https://www.findsweeps.com"
            liveLink="https://www.findsweeps.com"
            chipList=" "
          />
        </Grid>
        <Grid item>
          <ProjectCard
            avatarLabelAria="Rosetta"
            avatarLabel="R"
            title="Rosetta"
            subheader="Recent"
            stacksUsed={['React', 'Sass', 'GraphQL', 'Apollo', 'Python', 'BeautifulSoup', 'SpaCy', 'Redux', 'JS', 'Apollo', 'pytest', 'jest', 'CircleCI']}
            highLights={['Machine Learning', 'Webscrapping']}
            animationData={codeGearsData}
            description="Rosetta is a language translation service using web scraping and machine learning"
            gitHubLink="https://github.com/rosetta-team"
            liveLink="https://rosetta-fe.herokuapp.com/"
            chipList=" "
          />
        </Grid>
        <Grid item>
          <ProjectCard
            avatarLabelAria="Upvote"
            avatarLabel="UV"
            title="Upvote"
            subheader="Recent"
            stacksUsed={['JS', 'Sinatra', 'Ruby', 'Rails', 'jQuery', 'TravisCI', 'Shoulda Matchers', 'RSpec', 'Postgres']}
            highLights={['Microservice Architecture', '"Live" DOM monitoring using classic JS']}
            animationData={upvoteRocketAltData}
            height="50"
            width="50"
            description="Upvote is a interactive voting platform using micro-services"
            gitHubLink="https://github.com/jobannon/upvote_api"
            liveLink="https://upvote-ideas-ui.herokuapp.com"
            chipList=" "
          />
        </Grid>
        <Grid item>
          <ProjectCard
            avatarLabelAria="Sweater Weather"
            avatarLabel="SW"
            title="Sweater Weather"
            subheader="Recent"
            stacksUsed={['Capybara', 'Rails', 'RSpec', 'Ruby', 'Postgres']}
            highLights={['API Design', 'Multiple API Endpoint Consumption', 'DarkSky API', 'Google API']}
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
            subheader="Historic Snapshot-Waypoint"
            stacksUsed={['Capybara', 'Rails', 'RSpec', 'Ruby', 'Postgres', 'Factory Bot']}
            highLights={['100% Coverage (backend)', 'User Multitenancy', 'Authentication', 'Authorization', 'Session-Management']}
            animationData={dripCoffeeData}
            description="Coffee Town is a e-commerce platform selling everyone's favorite - coffee"
            gitHubLink="https://github.com/jobannon/monster_shop_individual_coupon"
            liveLink="https://agile-brushlands-23238.herokuapp.com"
            chipList=" "
          />
        </Grid>
        <Grid item>
          <ProjectCard
            disableButtonLive
            disableButtonGithub
            avatarLabelAria="Tic Tac Toe"
            avatarLabel="TTT"
            title="Tic Tac Toe"
            subheader="Historic Snapshot-Waypoint"
            stacksUsed={['React']}
            highLights={['Remembering The Journey...', 'Joy of Coding and Creating']}
            animationData={ticTacToeData}
            description="Sentimentally, the start of my programmatic journey into software. Also, the perennial React beginners app."
            gitHubLink="https://github.com/jobannon/monster_shop_individual_coupon"
            liveLink="https://agile-brushlands-23238.herokuapp.com"
            chipList=" "
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Project;
