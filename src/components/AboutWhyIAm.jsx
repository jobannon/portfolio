import React from 'react';
import {
  Grid, Box, Typography, Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Lottie from 'react-lottie';
import AboutWhyIAmCarousel from './AboutWhyIAmCarousel';
import heartData from '../lotties/pulsingHeart.json';

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
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  headerColorBox: {
    marginLeft: '10px',
    background: '#3f51b5',
    paddingLeft: '17px',
    paddingRight: '17px',
    paddingTop: '15px',
    paddingBottom: '15px',
    borderRadius: '25px',
    color: 'white',
  },
  headerText: {
    marginBottom: '100px',
  },
  greenBackground: {
    background: '#CEEDDB',
    textAlign: 'center',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '55px',
    paddingBottom: '55px',
  },
  underlineSubheaderRed: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottom: 'solid 9px',
    borderBottomColor: theme.palette.secondary.main,
    lineHeight: 1.5,
  },
}));

function AboutWhyIAm() {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="column"
      >
        <Grid item xs={12} className={classes.headerText}>
          <Typography className={classes.paper} variant="h1">
            <Box boxShadow={3} component="span" className={classes.headerColorBox}>
              Why I am
            </Box>
          </Typography>
          <Typography className={classes.paper} variant="h6">
            <Box boxShadow={3} style={{ padding: '1vh' }} component="span">
              [a programmer]
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.greenBackground}>
          <Box style={{ textAlign: 'center', marginBottom: '30px' }}>
            <Typography
              className={classes.underlineSubheaderRed}
              component="span"
              variant="h3"
            >
              I fell in
              <Box component="span" style={{ display: 'inline-block', marginLeft: '10px' }}>
                <Lottie
                  options={defaultOptionsReturn(heartData)}
                  height={50}
                  width={50}
                />
              </Box>
            </Typography>
          </Box>
          <Typography
            className={classes.paper}
            style={{ marginBottom: '20px' }}
            variant="h6"
          >
            [with programming]
          </Typography>
          <AboutWhyIAmCarousel />
          <Button
            href="http://www.jobannon.com/Project#"
            variant="contained"
            color="primary"
            style={{ marginTop: '30px' }}
          >
            See My Work...
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default AboutWhyIAm;
