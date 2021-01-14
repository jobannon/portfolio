import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Lottie from 'react-lottie';
import TextLoop from 'react-text-loop';
import hiJoshData from '../assets/hiJosh.json';
import downCaret from '../assets/downCaret.json';

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
  animatingHi: {
    [theme.breakpoints.up('xs', 'sm', 'md')]: {
      float: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      float: 'right',
    },
  },
  animatingTextBox: {
    [theme.breakpoints.up('xs', 'sm', 'md')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'left',
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
    justifyContent: 'left',
  },
}));

function AboutHello() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid
          container
          style={{ height: '100vh' }}
          alignItems="center"
          justify="center"
          variant="h1"
          spacing={1}
        >
          <Grid
            item
            xs={12}
            lg={6}
          >
            <Box className={classes.animatingHi}>
              <Lottie
                animationData={hiJoshData}
                options={defaultOptionsReturn(hiJoshData)}
                height={'30vh'}
                width={'40vh'}
                className={classes.hi}
              />
            </Box>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Box
              display="flex"
              className={classes.animatingTextBox}
            >
              <Typography
                className={classes.paper}
                variant="h2"
              >
                I am
                <Typography
                  className={classes.paper}
                  variant="h2"
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
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Lottie
              animationData={downCaret}
              options={defaultOptionsReturn(downCaret)}
              height={'25vh'}
              width={'25vh'}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
export default AboutHello;
