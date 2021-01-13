
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Lottie from 'react-lottie';
import TextLoop from 'react-text-loop';
import hiJoshData from './assets/hiJosh.json';
import downCaret from './assets/downCaret.json';

const defaultOptionsReturn = (nameOf) => {
	return {
		loop: true,
		autoplay: true,
		animationData: nameOf,
		rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
		},
	}
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  hi: {
    zIndex: -1,
  },
  scroller: {
    height: '300px',
    overflowY: 'scroll',
    scrollSnapType: 'y mandatory',
    section: {
      scrollSnapAlign: 'start',
    },
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


function AboutHello() {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        xs={12}
        direction="column"
        alignItems="center"
      >
        <Grid
          container
          maxWidth="1600px"
          xs={7}
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
                  options={defaultOptionsReturn(hiJoshData)}
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
                <Typography
                  className={classes.paper}
                  variant="h1"
                >
                  <Box component="span" className={classes.fName}>
                    <TextLoop>
                      <Box component="span">Josh</Box>
                      <Box component="span">a Developer</Box>
                      <Box component="span">a Life-long Learner</Box>
                      <Box component="span">a Turing Alumni</Box>
                      <Box component="span">Growth Oriented</Box>
                      <Box component="span">Team Oriented</Box>
                      <Box component="span">Open...</Box>
                    </TextLoop>
                  </Box>
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Lottie
                animationData={downCaret}
                options={defaultOptionsReturn(downCaret)}
                height={400}
                width={400}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
export default AboutHello