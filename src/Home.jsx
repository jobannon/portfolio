import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {
  BrowserRouter as
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Lottie from 'react-lottie';
import superStarImageMed from './superstarmed.png';
import circleMovieSuperstar from './circleMovieSuperstarCropped.png';
import animationData from './lotties/superStars.json';
import Search from './Search';
import About from './About';

function Home() {
  const useStyles = makeStyles(() => ({
    buttonStyle: {
      fontSize: 30,
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

  const classes = useStyles();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
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
              component={Link}
              to="/project"
              onClick={handleClose}
            >
              Project
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={Link}
              to="about"
            >
              About
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={Link}
              to="home"
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
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          style={{
            minHeight: '700px',
            maxHeight: '700px',
            maxWidth: '1020px',
            position: 'relative',
          }}
        >
          <Grid item style={{ position: 'absolute', top: '0' }}>
            <div style={{ opacity: '.2' }}>
              <Lottie
                options={defaultOptions}
                height={800}
                width={800}
              />
            </div>
          </Grid>
          <Grid item style={{ position: 'absolute', transform: 'rotate(1deg)', top: '0px' }}>
            <img src={circleMovieSuperstar} alt="app" height="400px" />
          </Grid>

          <Grid item style={{ position: 'absolute' }}>
            <img src={superStarImageMed} alt="movie title" />
          </Grid>

          <Grid
            item
            style={{ position: 'absolute', bottom: 0 }}
          >
            <Button
              href="/search"
              variant="contained"
              color="primary"
              className={classes.buttonStyle}
            >
              Find the Movie of the Stars...
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
