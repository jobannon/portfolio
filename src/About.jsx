import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Lottie from 'react-lottie';
import TextLoop from 'react-text-loop';
import hiJoshData from './assets/hiJosh.json';
import downCaret from './assets/downCaret.json';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TopBar from './TopBar';
import AboutHello from './AboutHello'
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

function About() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <TopBar whereAt="About" />
      <AboutHello/>
      <AboutWhoIAm />
      <AboutHowIAm />
      <AboutWhyIAm />
      <h1>GET IN TOUCh</h1>
    </>
  );
}

export default About;
