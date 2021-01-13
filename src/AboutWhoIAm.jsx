import Typewriter from 'typewriter-effect';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Lottie from 'react-lottie';
import outdoorJosh from './outdoorJosh.jpg';
import thinkingDeveloperDataLight from './assets/thinkingDeveloperDataLight.json';
import turingFull from './assets/turingFull.png';
import turingFullAlt from './assets/turingFullAlt.png';
import codeForDenver from './assets/codeForDenver2.png'
import Button from '@material-ui/core/Button';
import { Brightness1 } from '@material-ui/icons';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: thinkingDeveloperDataLight,
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
  paperLeft: {
    padding: theme.spacing(2),
    textAlign: 'Left',
    color: theme.palette.text.secondary,
  },
  paperRight: {
    padding: theme.spacing(2),
    textAlign: 'Right',
    color: theme.palette.text.secondary,
  },
  outdoorJosh: {
    textAlign: 'right',
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
  greenColorBox: {
    marginLeft: '10px',
    background: '#85BAA1',
    paddingLeft: '17px',
    paddingRight: '17px',
    paddingTop: '15px',
    paddingBottom: '15px',
    borderRadius: '50px',
    color: 'white',
    opacity: '.85',
    alignText: 'center',
  },
  who: {
    // background: '#c7c3da'
    // height: '100vh',
  },
  buttonStyle: {
    fontSize: 15,
    borderRadius: 15,
    color: theme.palette.primary.light,
  },
  headerText: {
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
}));

const preventDefault = (event) => event.preventDefault();

function AboutWhoIAm() {
  const classes = useStyles();
  return (
    <>
      <Grid container direction="column" className={classes.who}>
        <Grid container direction="row">
          <Grid item xs={12} className={classes.headerText}>
            <Typography className={classes.paper} variant="h1">
              <Box component="span" className={classes.colorBox}>
                Who
              </Box>
              I am
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" className={classes.greenBackground} spacing={5}>
          <Grid item xs={4} className={classes.outdoorJosh}>
            <img src={outdoorJosh} height="400px" alt="Outdoor Josh" style={{ borderRadius: '25px' }} />
          </Grid>
          <Grid item xs={8}>
            <Typography
              className={classes.paperLeft}
              variant="h3"
            >
              <Typewriter
                options={{
                  strings: ['I am a fullstack developer'],
                  autoStart: true,
                  loop: true,
                  cursor: " ",
                  pauseFor: 10000000000,
                }}
              />
            </Typography>
            <Box className={classes.innerText}>
              <Typography
                className={classes.paperLeft}
                variant="h6"
              >
                I have a passion for software design. I was hooked on coding when only 16 years old creating tic-tac-toe in Applesoft BASIC.
                <p>I am interested in developing software and working in technologies that further and deepen meaningful online experiences and engagement with users and the communities they inhabit. Additionally, I am excited by technologies that enable workflows, greater efficiencies and drive the mission of the organization.I am collaborative, diligent, and conscientious.</p>
                <p>I desire to contribute to a diverse team on a challenging codebase with demanding user requirements. From my past experience in customer relations, I know the importance of "doing the right thing" for the user and the company as well as driving by metrics to deliver effectively.</p>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container direction="row" className={classes.whiteBackground}>
          <Grid item xs={6}>
            <Typography
              className={classes.paper}
              variant="h3"
            >
              <Typewriter
                options={{
                  strings: ['I am a thoughtful developer'],
                  autoStart: true,
                  loop: true,
                  cursor: " ",
                  pauseFor: 10000000000,
                }}
              />
            </Typography>
            <Box>
              <Typography
                className={classes.paper}
                variant="h4"
              >
                You can see my musings
                <Link
                  href="https://joshcodes.dev/posts"
                  className={classes.greenColorBox}
                >
                  Here
                </Link>
              </Typography>

            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box>
              <Lottie
                animationData={thinkingDeveloperDataLight}
                options={defaultOptions}
                height={400}
                width={400}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container direction="row" className={classes.greenBackground} spacing={3}>
          <Grid item xs={4} className={classes.paperRight}>
            <img src={turingFull} alt="Turing Logo" />
          </Grid>
          <Grid item xs={6}>
            <Typography
              className={classes.paperLeft}
              variant="h3"
            >
              <Typewriter
                options={{
                  strings: ['I am pay-it-forward developer'],
                  autoStart: true,
                  loop: true,
                  cursor: " ",
                  pauseFor: 100000000,
                }}
              />
            </Typography>
            <Box>
              <Typography
                className={classes.paperLeft}
                variant="h6"
              >
                The greatest obstacle to change is support to make that change.  When I decided to pursue coding as a full-time career having a mentor in my corner to explain the finer points of OOP was invaluable.
                <p>I have recently signed up to offer the same 6 week mentoring to incoming Turing Students.</p>
                <p>I would like to offer the same service back to others.</p>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container direction="row" className={classes.greenBackground} spacing={3}>
          <Grid item xs={4} className={classes.paperRight}>
            <img src={codeForDenver} alt="Code for Denver Logo" height='120px' />
          </Grid>
          <Grid item xs={6} className={classes.paperRight}>
            <Box>
              <Typography
                className={classes.paperLeft}
                variant="h6"
              >
                Open Source Software is the platform from which I built my career - I am giving back
                <p>I am giving back by working on a Denver Poverty Map data visualization and other civic minded projects</p>
                <Button 
                  variant='outlined'
                  href='https://codefordenver.org/#/#featured'
                  target="#"
                  className={classes.buttonStyle}
                >
                  site
                </Button>

              </Typography>
            </Box>
          </Grid>
        </Grid>

      </Grid>
    </>
  );
}

export default AboutWhoIAm;
