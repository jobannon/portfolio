import React, {Component} from "react"
import './App.scss';
import About from './About' 
import Search from './Search' 
import Home from './Home' 
import LoadingAnimation from './LoadingAnimation'
import { withStyles } from "@material-ui/core/styles";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

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
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            activePage: 1,
            searchedMovies: [],
            value: "",
            hasSearched: false
        }
    }
    render() {
      return (
        <React.Fragment>
          <Router>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </React.Fragment>
      );
    }
}


// export default App
export default withStyles(styles)(App);