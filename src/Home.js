import React from "react"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import About from './About' 
import Search from './Search' 
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import superstarmed from './superstarmed.png'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Home() {
  const useStyles = makeStyles((theme) => ({
    buttonStyle: {
      fontSize: 20, 
      borderRadius: 15,
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles()

  return ( 
    <React.Fragment>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>

      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem 
            component={Link} to="/search"
            onClick={handleClose}
          >
            Search
          </MenuItem>
          <MenuItem 
            onClick={handleClose}
            component={Link} to="about"
          >
            About
          </MenuItem>
          <MenuItem 
            onClick={handleClose}
            component={Link} to="home"
          >
            Home
          </MenuItem>
        </Menu>
          <Typography variant="h6" color="inherit">
            Movie Superstar
          </Typography>
        </Toolbar>
      </AppBar>




      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item sm={6}>
          <Typography variant="h1" color="primary" align="center" fontWeight={1}>
            Movie Superstar
          </Typography>
        </Grid>

        <Grid item sm={3}>
            <img src={superstarmed} alt="movie title photo"></img>
        </Grid>
        <Grid item xs={3}>
          <Button href="/search" variant="contained" color="primary" className={classes.buttonStyle}>
            Find the Movie of the Stars...
          </Button>
        </Grid>   

      </Grid> 
    </React.Fragment>
  )
}

export default Home 