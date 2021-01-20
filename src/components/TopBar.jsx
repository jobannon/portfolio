import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useLocation } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import OutdoorJosh from '../assets/outdoorJosh.jpg';

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
    setValue(newValue);
  });

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Box className={classes.topBarAvatar}>
          <Box display="flex">
            <Avatar alt="joshua obannon" src={OutdoorJosh} className={classes.large} />
            <Typography variant="h6" className={classes.appName}>Joshua O'bannon</Typography>
          </Box>
        </Box>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          style={{ alignSelf: 'center' }}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab component={Link} label="Home" to="/#" href="/#" {...a11yProps(0)} index={0} />
          <Tab component={Link} label="Work" to="/Project" href="/Project#" {...a11yProps(2)} index={2} />
          <Tab component={Link} label="Experience" to="/Resume#" href="/Resume#" {...a11yProps(3)} index={3} />
          <Tab component={Link} label="About Site" to="/Site#" href="/Site#" {...a11yProps(1)} index={1} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
