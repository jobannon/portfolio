import Typewriter from 'typewriter-effect';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Lottie from 'react-lottie';
import { Carousel } from 'react-responsive-carousel';
import earlyAgeBabyAnimData from './assets/earlyAge/earlyAgeAnimationLottie.json';
import earlyAgeAppleBasic from './assets/earlyAge/earlyAgeAppleBasic.png';
import earlyAgeBattleCry from './assets/earlyAge/earlyAgeBattleCry.png';
import earlyAgeTic from './assets/earlyAge/earlyAgeTic.png';
import earlyAgeTic2 from './assets/earlyAge/earlyAgeTic2.png';
import earlyAgeTic3 from './assets/earlyAge/earlyAgeTic3.png';
import earlyAgeTic4 from './assets/earlyAge/earlyAgeTic4.png';
import earlyAgeTic5 from './assets/earlyAge/earlyAgeTic5.png';
import './overrides.css';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: earlyAgeBabyAnimData,
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
    textAlign: 'left',
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
  why: {
    // height: '100vh',
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
}));

const preventDefault = (event) => event.preventDefault();

function AboutWhyIAm() {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        xs={12}
        direction="column"
        className={classes.why}
      >
        <Grid container direction="row">
          <Grid item xs={12} className={classes.headerText}>
            <Typography className={classes.paper} variant="h1">
              <Box component="span" className={classes.colorBox}>
                Why
              </Box>
              I am
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          spacing={3}
        >
          <Grid item xs={4}>
            <Box className={classes.carBox}>
              <Carousel
                showThumbs={false}
                renderItem={(item) => <div className={classes.paper}>{item}</div>}
                autoPlay
              >
                <div>
                  <img src={earlyAgeAppleBasic} alt="applesoft basic" style={{ borderRadius: '25px' }} />
                  <p className="legend">My First Programming Language</p>
                </div>
                <div>
                  <img src={earlyAgeBattleCry} alt="battlecry" style={{ borderRadius: '25px' }} />
                  <p className="legend">Second Game Built Like Astroids</p>
                </div>
                <div>
                  <img src={earlyAgeTic} alt="Tic Tac Toe" style={{ borderRadius: '25px' }} />
                  <p className="legend">Tic Tac Toe was the Gensis of my Journey</p>
                </div>
                <div>
                  <img src={earlyAgeTic2} alt="Tic Tac Toe" style={{ borderRadius: '25px' }} />
                  <p className="legend">Tic Tac Toe was the Gensis of my Journey</p>
                </div>
                <div>
                  <img src={earlyAgeTic3} alt="Tic Tac Toe" style={{ borderRadius: '25px' }} />
                  <p className="legend">Tic Tac Toe was the Gensis of my Journey</p>
                </div>
                <div>
                  <img src={earlyAgeTic4} alt="Tic Tac Toe" style={{ borderRadius: '25px' }} />
                  <p className="legend">Tic Tac Toe was the Gensis of my Journey</p>
                </div>
                <div>
                  <img src={earlyAgeTic5} alt="Tic Tac Toe" style={{ borderRadius: '25px' }} />
                  <p className="legend">Tic Tac Toe was the Gensis of my Journey</p>
                </div>
              </Carousel>
            </Box>
          </Grid>
          <Grid item xs={6} className={classes.greenBackground}>
            <Typography
              className={classes.paperLeft}
              variant="h3"
            >
              <Typewriter
                options={{
                  strings: ['I fell in love with programming from "go"'],
                  autoStart: true,
                  loop: true,
                  cursor: " ",
                  pauseFor: 100000000,
                }}
              />
            </Typography>
            <Typography
              className={classes.paperLeft}
              variant="h6"
            >
              My First Game was Tic-Tac-Toe
            </Typography>
            <Typography
              className={classes.paperLeft}
              variant="h6"
            >
              My Second Game was Space Invaders 
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default AboutWhyIAm;
