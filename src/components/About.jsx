import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TopBar from './TopBar';
import AboutHello from './AboutHello';
import AboutWhoIAm from './AboutWhoIAm';
import AboutWhyIAm from './AboutWhyIAm';
import AboutHowIAm from './AboutHowIAm';
import Footer from './Footer';

function About() {
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
