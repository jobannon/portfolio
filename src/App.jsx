import React from 'react';
import './App.scss';
import {
  Switch,
  Route,
} from 'react-router-dom';

import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
} from '@material-ui/core';

import Box from '@material-ui/core/Box';
import TopBar from './components/TopBar';
import About from './components/About';
import Project from './components/Project';
import Site from './components/Site';
import Resume from './components/Resume';
import Footer from './components/Footer';
import FloatingSnacker from './components/FloatingSnacker';
import SpeedDial from './components/SpeedDial';
import BlogPost from './components/BlogPost';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <>
      <Box id="container">
        <MuiThemeProvider theme={theme}>
          <Box id="main-content">
            <TopBar />
            <Switch>
              <Route path="/correspondence/:slug">
                <BlogPost />
              </Route>
              <Route path="/project">
                <Project />
              </Route>
              <Route path="/site">
                <Site />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route exact path="/">
                <About />
              </Route>
              {/* <Route path="/p/:page">
                <BlogHome />
              </Route> */}
            </Switch>
          </Box>
          <FloatingSnacker />
          <SpeedDial />
          <Footer />
        </MuiThemeProvider>

      </Box>
    </>
  );
}

export default (App);
