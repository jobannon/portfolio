import Typewriter from 'typewriter-effect';
import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextLoop from 'react-text-loop';
import Lottie from 'react-lottie';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import codeSignalContribution from './assets/codeSignalContribution.png';
import codeSignalLogo from './assets/codeSignalLogo.png';
import githubLogo from './assets/GitHub-Mark-120px-plus.png';
import githubContribution from './assets/githubContribution.png';
import IssueScroller from './IssueScoller';
import GitHubCalendar from 'react-github-calendar';

const defaultOptions = {
  loop: true,
  autoplay: true,
  // animationData: earlyAgeBabyAnimData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
    opacity: '.85',
  },
  buttonStyle: {
    fontSize: 15,
    borderRadius: 15,
    color: theme.palette.primary.light,
  },
  how: {
    // height: '100vh',
  },
  headerText: {
    marginTop: '100px',
    marginBottom: '100px',
  },
  greenBackground: {
    background: '#CEEDDB',
    // borderRadius: '25px',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '55px',
    paddingBottom: '55px',
  },
  whiteBackground: {
    background: theme.palette.paper,
    borderRadius: '25px',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '100px',
    paddingBottom: '100px',
  },
  innerHeader: {
    textAlign: 'left',
  },
  innerText: {
    paddingRight: '250px',
  },
  bordered: {
  }
}));

const preventDefault = (event) => event.preventDefault();

function AboutHowIAm() {
  const classes = useStyles();
  return (
    <>
      <Grid container direction="column" className={classes.how}>
        <Grid container direction="row">
          <Grid item xs={12} className={classes.headerText}>
            <Typography className={classes.paper} variant="h1">
              <Box component="span" className={classes.colorBox}>
                How
              </Box>
              I am
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          className={classes.greenBackground}
          direction="row"
        >
          <Grid
            item
            xs={12}
          >
            <Typography
              className={classes.paper}
              variant="h3"
            >
              <Typewriter
                options={{
                  strings: ['I am iterative'],
                  autoStart: true,
                  loop: true,
                  cursor: " ",
                  pauseFor: 10000000000,
                }}
              />
            </Typography>
            <Typography
              className={classes.paper}
              variant="h5"
            >
              For example, I am continuously refactoring past projects and implementing new features 
              <Grid container direction="column">
                <Grid item>
                  <Button
                    href="https://github.com/jobannon/fe-movie-superstar-redux/issues"
                    variant="outlined"
                    className={classes.buttonStyle}
                  >
                    here
                  </Button>
                </Grid>
              </Grid>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
          >
            <Typography
              className={classes.paper}
              variant="h6"
            >
              <IssueScroller />
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          className={classes.whiteBackground}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography
              className={classes.paper}
              variant="h3"
            >
              <Typewriter
                options={{
                  strings: ['I am fully engaged in Growth Mindset'],
                  autoStart: true,
                  loop: true,
                  cursor: " ",
                  pauseFor: 10000000000,
                }}
              />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box style={{ marginTop: '50px' }}>
              <img src={githubLogo} alt="Github Logo" />
              <Typography
                className={classes.paper}
                variant="h6"
              >
                By Working on Code Weekly And Improving Daily
                <Button
                  href="https://github.com/jobannon"
                  variant="outlined"
                  className={classes.buttonStyle}
                >
                  Github Profile 
                </Button>
              </Typography>
            </Box>
            <Box className={classes.bordered} >
              <Chip label="Live" color="secondary"></Chip>
              <GitHubCalendar 
                username="jobannon"
                blockSize={15}
              />
            </Box>
            <Box
              style={{ marginTop: '50px' }}
            >
              <img src={codeSignalLogo} alt="Code Signal Logo" height="100px" />
              <Typography
                className={classes.paper}
                variant="h6"
              >
                By Working Code Challenges
                <Button
                  href="https://app.codesignal.com/coding-report/hXCXzwomgS5TABwR7-NECN2JFQz9t3JHWX6DhoERXT"
                  variant="outlined"
                  className={classes.buttonStyle}
                >
                  Latest Report
                </Button>
              </Typography>
            </Box>
            <Box>
              <img src={codeSignalContribution} alt="Code Signal Contrbution" />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default AboutHowIAm;
