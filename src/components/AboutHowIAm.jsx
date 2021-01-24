import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import GitHubCalendar from 'react-github-calendar';
import Paper from '@material-ui/core/Paper';
import codeSignalLogo from '../assets/codeSignalLogo.png';
import githubLogo from '../assets/GitHub-Mark-120px-plus.png';
import IssueScroller from './IssueScoller';
import issuesScreenAlt from '../assets/issuesScreenAlt.png';

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
    borderRadius: '25px',
    color: 'white',
  },
  paperRed: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottom: 'solid 9px',
    borderBottomColor: theme.palette.secondary.main,
    lineHeight: '1.5',
  },
  buttonStyle: {
    marginTop: '10px',
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
  issuesScreenshot: {
    [theme.breakpoints.up('xs', 'sm', 'md')]: {
      height: '200px',
      marginTop: '10px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '400px',
      marginTop: '20px',
    },
  },
}));

function AboutHowIAm() {
  const classes = useStyles();
  return (
    <>
      <Grid container direction="column" className={classes.how}>
        <Grid container direction="row">
          <Grid item xs={12} className={classes.headerText}>
            <Typography className={classes.paper} variant="h1">
              <Box boxShadow={3} component="span" className={classes.colorBox}>
                How I am
              </Box>
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
            <Box style={{ textAlign: 'center', marginBottom: '30px' }}>
              <Typography
                className={classes.paperRed}
                component="span"
                variant="h3"
              >
                I am iterative
              </Typography>
            </Box>
            <Typography
              className={classes.paper}
              variant="h5"
            >
              For example, I am continuously refactoring past projects and implementing new features
              <Grid container direction="column">
                <Grid item>
                  <img src={issuesScreenAlt} alt="Issues Screenshoot" className={classes.issuesScreenshot} />
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
            <Box style={{ textAlign: 'center', marginBottom: '30px' }}>
              <Typography
                className={classes.paperRed}
                component="span"
                variant="h3"
              >
                I believe in Growth Mindset
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography
              className={classes.paper}
              variant="h6"
            >
              BY COMMITTING CODE DAILY
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img src={githubLogo} alt="Github Logo" />
          </Grid>
          <Grid item xs={12}>
            <Button
              href="https://github.com/jobannon"
              variant="outlined"
              target="#"
              className={classes.buttonStyle}
            >
              Github Profile
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Box className={classes.bordered}>
              <Chip label="Live" color="secondary" />
              <GitHubCalendar
                username="jobannon"
                blockSize={15}
              />
            </Box>
          </Grid>
          <Grid item xs={12} style={{ marginTop: '30px' }}>
            <Typography
              className={classes.paper}
              variant="h6"
            >
              BY WORKING CODE CHALLENGES
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box
              style={{ marginTop: '20px' }}
            >
              <img src={codeSignalLogo} alt="Code Signal Logo" height="100px" />
            </Box>
          </Grid>
          <Grid item xs={12} style={{ marginTop: '20px' }}>
            <Button
              href="https://app.codesignal.com/coding-report/hXCXzwomgS5TABwR7-NECN2JFQz9t3JHWX6DhoERXT"
              variant="outlined"
              target="#"
              className={classes.buttonStyle}
            >
              Latest Report
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default AboutHowIAm;
