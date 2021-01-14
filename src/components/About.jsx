import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import hiJoshData from '../assets/hiJosh.json';
import downCaret from '../assets/downCaret.json';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TopBar from './TopBar';
import AboutHello from './AboutHello';
import AboutWhoIAm from './AboutWhoIAm';
import AboutWhyIAm from './AboutWhyIAm';
import AboutHowIAm from './AboutHowIAm';
import Footer from './Footer';

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
  },
}));

function About() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <TopBar whereAt="About" />
      <AboutHello />
      <AboutWhoIAm />
      <AboutHowIAm />
      <AboutWhyIAm />
      <Footer />
    </>
  );
}

export default About;
