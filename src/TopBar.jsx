import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
// import Search from './Search';
// import About from './About';

function TopBar(props) {
  const useStyles = makeStyles(() => ({
    buttonStyle: {
      fontSize: 30,
      borderRadius: 15,
    },
  }));

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
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
              to="/Project"
              onClick={handleClose}
            >
              Project
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={Link}
              to="/About"
            >
              About This Dev
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={Link}
              to="/Site"
            >
              About Site
            </MenuItem>
          </Menu>
          <Typography variant="h6" color="inherit">
            {props.whereAt}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default TopBar;
