import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Lottie from 'react-lottie';
import Button from '@material-ui/core/Button';
import outdoorJosh from '../assets/outdoorJosh.jpg';
import thinkingDeveloperDataLight from '../assets/thinkingDeveloperDataLight.json';
import turingFull from '../assets/turingFull.png';
import codeForDenver from '../assets/codeForDenver2.png';

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
    [theme.breakpoints.up('xs')]: {
    },
  },
  codeForDenverImg: {
    height: '120px',
    [theme.breakpoints.down('xs')]: {
      height: '80px',
    },

  },
  outdoorJosh: {
    textAlign: 'right',
    [theme.breakpoints.up('xs')]: {
      float: 'center',
    },
  },
  colorBox: {
    marginLeft: '10px',
    background: '#3f51b5',
    paddingLeft: '17px',
    paddingRight: '17px',
    paddingTop: '15px',
    paddingBottom: '15px',
    borderRadius: '30px',
    color: 'white',
  },
  greenColorBox: {
    background: '#85BAA1',
  },
  greenColorBoxLink:{
    padding: '25px',
    borderRadius: '30px',
    color: 'white',
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

function AboutWhoIAm() {
  const classes = useStyles();
  return (
    <>
      <Grid container direction="row" className={classes.who}>
        <Grid item xs={12} className={classes.headerText}>
          <Typography className={classes.paper} variant="h1">
            <Box boxShadow={3} component="span" className={classes.colorBox}>
              Who I am
            </Box>
          </Typography>
        </Grid>
        <Grid container direction="row" justify="center" className={classes.greenBackground}>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <img src={outdoorJosh} height="300px" alt="Outdoor Josh" style={{ borderRadius: '25px' }} />
          </Grid>
          <Grid item xs={12} style={{ maxWidth: '1000px' }} className={classes.greenBackground}>
            <Typography
              className={classes.paper}
              variant="h3"
            >
              I am a fullstack developer
            </Typography>
            <Typography
              className={classes.paperLeft}
              variant="h6"
            >
              I have a passion for software design. I was hooked on coding when only 16 years old creating tic-tac-toe in AppleSoft BASIC.
              <p>I am interested in developing software and working in technologies that further and deepen meaningful online experiences and engagement with users and the communities they inhabit. Additionally, I am excited by technologies that enable workflows, greater efficiencies and drive the mission of the organization.I am collaborative, diligent, and conscientious.</p>
              <p>I desire to contribute to a diverse team on a challenging codebase with demanding user requirements. From my past experience in customer relations, I know the importance of "doing the right thing" for the user and the company as well as driving by metrics to deliver effectively.</p>

            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={12} lg={6} style={{ marginTop: '60px' }}>
            <Typography
              className={classes.paper}
              variant="h3"
            >
              I am a thoughtful developer
            </Typography>
            <Box>
              <Typography
                className={classes.paper}
                variant="h4"
              >
                You can see my musings
              </Typography>
              <Typography
                className={classes.paper}
                variant="h4"
              >
                <Box
                  component="span"
                  boxShadow={3}
                  className={classes.greenColorBox}
                >
                  <Link
                    href="https://joshcodes.dev/posts"
                    className={classes.greenColorBoxLink}
                  >
                    Here...
                  </Link>
                </Box>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box style={{ marginTop: '40px', marginBottom: '80px' }}>
            <Lottie
              animationData={thinkingDeveloperDataLight}
              options={defaultOptions}
              height={400}
              width={400}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container direction="column" justify="center" className={classes.greenBackground} spacing={3}>
        <Typography
          className={classes.paper}
          variant="h3"
        >
          I am a pay-it-forward developer
        </Typography>
        <Grid item xs={12} className={classes.paper}>
          <img src={turingFull} alt="Turing Logo" height="220px" />
        </Grid>
        <Grid item xs={12}>
          <Box component="p" style={{ maxWidth: '1000px', margin: 'auto' }}>
            <Typography
              className={classes.paperLeft}
            >
              The greatest obstacle to change is support to make that change.  When I decided to pursue coding as a full-time career having a mentor in my corner to explain the finer points of OOP was invaluable.
              <p>I am giving back by offering a 6-week mentorship to incoming Turing Students</p>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} lg={12} className={classes.paper}>
          <img src={codeForDenver} alt="Code for Denver Logo" className={classes.codeForDenverImg} />
        </Grid>
        <Grid item xs={12} lg={12} className={classes.paper}>
          <Box component="p" style={{ maxWidth: '1000px', margin: 'auto' }}>
            <Typography
              className={classes.paperLeft}
            >
              Open Source Software is the platform from which I built my career.
              <p>I am giving back by working on a Denver Poverty Map data visualization and other civic minded projects</p>
              <Button
                variant="outlined"
                href="https://codefordenver.org/#/#featured"
                target="#"
                className={classes.buttonStyle}
              >
                site
              </Button>
            </Typography>
          </Box>
        </Grid>

      </Grid>

    </>
  );
}

export default AboutWhoIAm;
