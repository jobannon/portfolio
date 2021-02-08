import React from 'react';
import {
  withStyles, makeStyles, Typography, Grid, Box,
} from '@material-ui/core';
import Lottie from 'react-lottie';
import TextLoop from 'react-text-loop';
import hiJoshData from '../assets/hiJosh.json';
import downCaret from '../assets/downCaret.json';

// bug in MUI- see https://github.com/mui-org/material-ui/issues/7466
const NormalizedGridContainer = withStyles((theme) => ({
  root: {
    width: '100%',
    margin: '0px',
    padding: `${(theme.spacing / 2) * 8}px`,
  },
}))(Grid);

const defaultOptionsReturn = (nameOf) => ({
  loop: true,
  autoplay: true,
  animationData: nameOf,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  animatingHi: {
    [theme.breakpoints.up('xs', 'sm', 'md')]: {
      float: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      float: 'right',
    },
  },
  positionTextBox: {
    display: 'flex',
    [theme.breakpoints.up('xs', 'sm', 'md')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'left',
    },
  },
  textLoopFirstName: {
    marginLeft: '10px',
    background: '#3f51b5',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '15px',
    paddingBottom: '15px',
    borderRadius: '25px',
    color: 'white',
    justifyContent: 'left',
  },
}));

function AboutHello() {
  const classes = useStyles();
  const getHeadingVariant = () => {
    if (window.screen.availWidth < 500) {
      return 'h2';
    }
    return 'h1';
  };
  return (
    <>
      <div className={classes.root}>
        <NormalizedGridContainer
          container
          style={{ height: '92vh' }}
          alignItems="center"
          justify="center"
          direction="row"
          variant="h1"
          spacing={1}
        >
          <Grid item xs={12} lg={6}>
            <Box className={classes.animatingHi}>
              <Lottie
                animationData={hiJoshData}
                options={defaultOptionsReturn(hiJoshData)}
                height="50vh"
                width="50vh"
                className={classes.hi}
              />
            </Box>
          </Grid>
          <Grid item lg={6} xs={12}>
            <NormalizedGridContainer
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Box component="div" className={classes.positionTextBox}>
                  <Typography
                    className={classes.paper}
                    variant="h2"
                  >
                    I am
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box component="div" className={classes.positionTextBox}>
                  <Typography
                    className={classes.paper}
                    variant={getHeadingVariant()}
                  >
                    <Box component="span" className={classes.textLoopFirstName} boxShadow={3}>
                      <TextLoop>
                        <Box component="span">Josh</Box>
                        <Box component="span">a Developer</Box>
                        <Box component="span">a Life-long Learner</Box>
                        <Box component="span">Goal Oriented</Box>
                        <Box component="span">Growth Oriented</Box>
                        <Box component="span">Team Oriented</Box>
                      </TextLoop>
                    </Box>
                  </Typography>
                </Box>
              </Grid>
            </NormalizedGridContainer>
          </Grid>
          <Grid item xs={12}>
            <Lottie
              animationData={downCaret}
              options={defaultOptionsReturn(downCaret)}
              height="20vh"
              width="20vh"
            />
          </Grid>
        </NormalizedGridContainer>
      </div>
    </>
  );
}
export default AboutHello;
