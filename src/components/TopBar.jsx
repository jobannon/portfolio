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
import FavoriteIcon from '@material-ui/icons/Favorite';
import BoxingIcon from '@material-ui/icons/SportsMma';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@mdi/react';
import {
  mdiThoughtBubbleOutline, mdiShoePrint, mdiWall, mdiChefHat,
  mdiCoffee,
} from '@mdi/js';
import Lottie from 'react-lottie';
import officeJosh from '../assets/joshprofile_circle.resized.png';
// import mountainsData from '../lotties/mountainsData.json';

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
    marginTop: '60px',
  },
  subHeaderText: {
    borderBottom: 'solid 9px',
    borderBottomColor: theme.palette.secondary.main,
    fontWeight: 700,
  },
  large: {
    height: '50px',
    width: '50px',
  },
  medium: {
    height: '40px',
    width: '40px',
  },
  appName: {
    // alignSelf: 'center',
    marginLeft: '10px',
    marginRight: '10px',
    display: 'absolute',
    top: 0,
    left: 0,
  },
  topBarAvatar: {
  },
  colorBox: {
    marginLeft: '10px',
    background: '#3f51b5',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '15px',
    paddingBottom: '15px',
    borderRadius: '20px',
    color: 'white',
    justifyContent: 'left',
  },
  underlineSubheader: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottom: 'solid 4px',
    borderBottomColor: theme.palette.secondary.main,
    lineHeight: '1.5',
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = useCallback((e, newValue) => {
    // debugger
    setValue(newValue);
  });

  const defaultOptionsReturn = (nameOf) => ({
    loop: true,
    autoplay: true,
    animationData: nameOf,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  });
  // const mountainsLottie = (
  //   <Lottie
  //     animationData={mountainsData}
  //     options={defaultOptionsReturn(mountainsData)}
  //     height={80}
  //     width={240}
  //     className={classes.hi}
  //   />
  // );

  const location = useLocation();
  const currentTab = location.pathname;

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Box className={classes.topBarAvatar}>
          <Box display="flex" style={{ padding: '5px' }}>
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
          <Tab component={Link} value="/Project" label="Work" to="/Project" href="/Project#" {...a11yProps(2)} index={1} />
          <Tab component={Link} value="/Resume" label="Experience" to="/Resume#" href="/Resume#" {...a11yProps(3)} index={2} />
          {/* <Tab component={Link} value="/Blog" label="Writing" to="/Blog" href="/Blog#" {...a11yProps(2)} index={3} /> */}
          <Tab component={Link} value="/Site" label="Site" to="/Site#" href="/Site#" {...a11yProps(1)} index={4} />

        </Tabs>
        {/* <Box style={{display: 'absolute', right: '0', top: '0'}}>
            {mountainsLottie}
          </Box> */}
      </AppBar>

      {/* fixes spacing issue on fixed for appBar - mixin would not correct */}
      <Toolbar />
      <Grid container className={classes.toolbar}>
        <Grid item xs={12}>
          <Box component="div">
            <TabPanel value={currentTab} index="/Project">
              <Typography variant="h4" className={classes.subHeader}>
                <Box boxShadow={3} component="span" className={classes.colorBox}>
                  Made With
                  <Box component="span" style={{ display: 'inline-block', marginLeft: '10px' }}>
                      <FavoriteIcon style={{ verticalAlign: '-7px', fontSize: 38 }} />
                    </Box>
                </Box>
              </Typography>
              <Typography style={{ marginTop: '25px' }}>
                <Box component="span" className={classes.underlineSubheader}>
                  And lots of
                  {' '}
                  <Icon path={mdiCoffee} title="Coffee Maker" size={1} style={{ verticalAlign: '-6px' }} />
                </Box>
              </Typography>
            </TabPanel>
            <TabPanel value={currentTab} index="/Resume">
              <Typography variant="h4" className={classes.subHeader}>
                <Box boxShadow={3} component="span" className={classes.colorBox}>
                  How I Got Here
                  {' '}
                  <Icon path={mdiShoePrint} title="Shoe print" size={2} style={{ verticalAlign: '-9px' }} />
                </Box>
              </Typography>
              <Typography style={{ marginTop: '25px' }}>
                <Box component="span" className={classes.underlineSubheader}>
                  Abridged, obviously.
                </Box>
              </Typography>
            </TabPanel>
            <TabPanel value={currentTab} index="/Blog">
              <Typography variant="h4" className={classes.subHeader}>
                <Box boxShadow={3} component="span" className={classes.colorBox}>
                  A Penny For Your
                  {' '}
                  <Icon path={mdiThoughtBubbleOutline} title="Thought" size={2} style={{ verticalAlign: '-9px' }} />
                </Box>
              </Typography>
              <Typography style={{ marginTop: '25px' }}>
                <Box component="span" className={classes.underlineSubheader}>
                  A dollar seemed too much...
                </Box>
              </Typography>
            </TabPanel>
            <TabPanel value={currentTab} index="/Site">
              <Typography variant="h4" className={classes.subHeader}>
                <Box boxShadow={3} component="span" className={classes.colorBox}>
                  <Icon path={mdiChefHat} title="Thought" size={2} style={{ verticalAlign: '-9px' }} />
                  {' '}
                  Built From "Scratch"
                </Box>
              </Typography>
              <Typography style={{ marginTop: '25px' }}>
                <Box component="span" className={classes.underlineSubheader}>
                  On 1000's of source contributions
                </Box>
                <br />
                <Box component="span" className={classes.underlineSubheader}>
                  Powering the web
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
