import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Lottie from 'react-lottie';
import hiJoshData from './assets/hiJosh.json';
import downCaret from './assets/downCaret.json';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TopBar from './TopBar';
import AboutWhoIAm from './AboutWhoIAm';
import AboutWhyIAm from './AboutWhyIAm';
import AboutHowIAm from './AboutHowIAm';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: hiJoshData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: downCaret,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  hi: {
    zIndex: -1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  fName: {
    marginLeft: '10px',
    background: '#3f51b5',
    paddingLeft: '17px',
    paddingRight: '17px',
    paddingTop: '15px',
    paddingBottom: '15px',
    borderRadius: '50px',
    color: 'white',
    opacity: '.85',
  },
  musings: {
    marginLeft: '10px',
    background: '#3f51b5',
    paddingLeft: '17px',
    paddingRight: '17px',
    paddingTop: '15px',
    paddingBottom: '15px',
    borderRadius: '50px',
    color: 'white',
    opacity: '.85',
  },
}));

function About() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <TopBar whereAt="About" />

      <Grid
        container
        xs={12}
        direction="column"
        alignItems="center"
      >
        <Grid
          container
          maxWidth="1600px"
          xs={9}
          alignItems="center"
          justify="center"
          variant="h1"
          spacing={1}
        >
          <Grid
            container
            style={{ height: '100vh' }}
            xs={9}
            alignItems="center"
            justify="center"
            variant="h1"
            spacing={1}
          >
            <Grid item xs={6}>
              <Box>
                <Lottie
                  animationData={hiJoshData}
                  options={defaultOptions}
                  height={800}
                  width={800}
                  className={classes.hi}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Typography
                className={classes.paper}
                variant="h1"
              >
                I am
                <Box component="span" className={classes.fName}>
                  Josh
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Lottie
                animationData={downCaret}
                options={defaultOptions2}
                height={400}
                width={400}
              />
            </Grid>
          </Grid>
          <AboutWhoIAm />
          <AboutWhyIAm />
          <AboutHowIAm />
        </Grid>
      </Grid>
    </>
  );
}

export default About;
