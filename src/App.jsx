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
import About from './components/About';
import Project from './components/Project';
import Site from './components/Site';
import Resume from './components/Resume';
import Test from './components/Test';
import Footer from './components/Footer';

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
          <BrowserRouter>
            <Router>
              <Box id="main-content">
                <TopBar />
                <Box style={{ marginTop: '100px' }}>
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
                    <Route path="/test">
                      <Test />
                    </Route>
                    <Route path="/">
                      <About />
                    </Route>
                  </Switch>
                </Box>
              </Box>
            </Router>
            <Footer />
          </BrowserRouter>
        </MuiThemeProvider>

      </Box>
    </>
  );
}

// export default App
export default withStyles(styles)(App);
