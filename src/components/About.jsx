import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AboutHello from './AboutHello';
import AboutWhoIAm from './AboutWhoIAm';
import AboutWhyIAm from './AboutWhyIAm';
import AboutHowIAm from './AboutHowIAm';

function About() {
  return (
    <>
      <CssBaseline />
      <AboutHello />
      <AboutWhoIAm />
      <AboutHowIAm />
      <AboutWhyIAm />
    </>
  );
}

export default About;
