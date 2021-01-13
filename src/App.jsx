import React, { useEffect } from 'react';
import './App.scss';
import { withStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import About from './About';
import Project from './Project';
import Search from './Search';
import Home from './Home';
import Site from './Site';
import PanelSnap from 'panelsnap'

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

  // const [activePanelName, setActivePanelName] = userState(undefined)

  // useEffect(() => {
  //   const panelSpanInstance = new PanelSnap({
  //     panelSelector: '> #root > #app > section'
  //   })
  // }, []);
  
  return (
    <>
      <Router>
        <Switch>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/site">
            <Site />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

// export default App
export default withStyles(styles)(App);
