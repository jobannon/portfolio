import React from 'react';
import './App.scss';
import { withStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
} from '@material-ui/core';

import About from './components/About';
import Project from './components/Project';
import Site from './components/Site';
import Resume from './components/Resume';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const styles = (theme) => ({
  root: {
    flexGrow: 1,
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
      <MuiThemeProvider theme={theme}>
        <Router>
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
            <Route path="/">
              <About />
            </Route>
          </Switch>
        </Router>
      </MuiThemeProvider>
    </>
  );
}

// export default App
export default withStyles(styles)(App);
