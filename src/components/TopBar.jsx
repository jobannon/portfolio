import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useLocation } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { getByDisplayValue } from '@testing-library/react';
import { CssBaseline } from '@material-ui/core';
import { SlowMotionVideoOutlined } from '@material-ui/icons';
import OutdoorJosh from '../assets/outdoorJosh.jpg';
import officeJosh from '../assets/joshprofile_circle.resized.png';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  toolbar: {
    marginTop: '25px',
    position: 'static',
    textAlign: 'center',
    backgroundColor: theme.palette.background.default,
  },
  subHeader: {
    color: theme.palette.text.secondary,
    marginTop: '15px'
  },
  subHeaderText: {
    borderBottom: 'solid 3px',
    borderBottomColor: theme.palette.secondary.main,
    fontWeight: 700,
  },
  large: {
    height: '50px',
    width: '50px',
  },
  appName: {
    alignSelf: 'center',
    marginLeft: '10px',
    marginRight: '10px',
  },
  topBarAvatar: {
    display: 'absolute',
    left: 0,
    top: 0,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = useCallback((e, newValue) => {
    // debugger
    setValue(newValue);
  });

  const location = useLocation();
  const currentTab = location.pathname;

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Box className={classes.topBarAvatar}>
          <Box display="flex" style={{padding: '5px', }}>
            <Avatar alt="joshua obannon" src={officeJosh} className={classes.large} />
            <Typography variant="h6" className={classes.appName}>Joshua O'bannon</Typography>
          </Box>
        </Box>
        <Tabs
          value={currentTab}
          onChange={handleChange}
          indicatorColor="secondary"
          style={{ alignSelf: 'center' }}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs"
        >
          <Tab component={Link} value="/" label="Home" to="/#" href="/#" {...a11yProps(0)} index={0} />
          <Tab component={Link} value="/Project" label="Work" to="/Project" href="/Project#" {...a11yProps(2)} index={2} />
          <Tab component={Link} value="/Resume" label="Past" to="/Resume#" href="/Resume#" {...a11yProps(3)} index={3} />
          <Tab component={Link} value="/Site" label="Site" to="/Site#" href="/Site#" {...a11yProps(1)} index={1} />
        </Tabs>
      </AppBar>

      <Toolbar />
      <Grid container className={classes.toolbar}>
        <Grid item xs={12}>

          <Box component="div">
            <TabPanel value={currentTab} index="/Project">
              <Typography variant="h3" className={classes.subHeader}>
                <Box component="span" className={classes.subHeaderText}>
                  My Past Work...
                </Box>
              </Typography>
            </TabPanel>
            <TabPanel value={currentTab} index="/Resume">
              <Typography variant="h3" className={classes.subHeader}>
                <Box component="span" className={classes.subHeaderText}>
                  How I Got Here...
                </Box>
              </Typography>
            </TabPanel>
            <TabPanel value={currentTab} index="/Site">
              <Typography variant="h3" className={classes.subHeader}>
                <Box component="span" className={classes.subHeaderText}>
                  From The Ground Up
                </Box>
              </Typography>
            </TabPanel>
            <TabPanel value={currentTab} index="/" />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
