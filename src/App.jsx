import React from 'react';
import './App.scss';
import { withStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';

import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
} from '@material-ui/core';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { ViewColumnTwoTone } from '@material-ui/icons';
import TopBar from './components/TopBar';
import TopBarAlt from './components/TopBarAlt';
import About from './components/About';
import Project from './components/Project';
import Site from './components/Site';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Test from './components/Test';
import Footer from './components/Footer';
import FloatingSnacker from './components/FloatingSnacker';
import SpeedDial from './components/SpeedDial';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const styles = (theme) => ({
  root: {
    // flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});

function App() {
  return (
    <>
      <Box id="container">
        <MuiThemeProvider theme={theme}>
          <Box id="main-content">
            <TopBar />
            <Box style={{ marginTop: '75px' }}>
              <Switch>
                <Route path="/project">
                  <Project />
                </Route>
                <Route path="/site">
                  <Site />
                </Route>
                <Route path="/resume">
                  <Resume />
                </Route>
                <Route path="/blog">
                  <Blog />
                </Route>
                <Route path="/test">
                  <Test />
                </Route>
                <Route exact path="/">
                  <About />
                </Route>
              </Switch>
            </Box>
          </Box>
          <FloatingSnacker />
          <SpeedDial />
          <Footer />
        </MuiThemeProvider>

      </Box>
    </>
  );
}

// export default App
export default withStyles(styles)(App);
