// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Link from '@material-ui/core/Link'
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

// // function TabPanel(props) {
// //   const { children, value, index, ...other } = props;

// //   return (
// //     <div
// //       role="tabpanel"
// //       hidden={value !== index}
// //       id={`scrollable-auto-tabpanel-${index}`}
// //       aria-labelledby={`scrollable-auto-tab-${index}`}
// //       {...other}
// //     >
// //       {value === index && (
// //         <Box p={3}>
// //           <Typography>{children}</Typography>
// //         </Box>
// //       )}
// //     </div>
// //   );
// // }

// // TabPanel.propTypes = {
// //   children: PropTypes.node,
// //   index: PropTypes.any.isRequired,
// //   value: PropTypes.any.isRequired,
// // };

// // function a11yProps(index) {
// //   return {
// //     id: `scrollable-auto-tab-${index}`,
// //     'aria-controls': `scrollable-auto-tabpanel-${index}`,
// //   };
// // }

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     flexGrow: 1,
// //     width: '100%',
// //     backgroundColor: theme.palette.background.paper,
// //   },
// // }));

// // export default function ScrollableTabsButtonAuto() {
// //   const classes = useStyles();
// //   const [value, setValue] = React.useState(0);

// //   const handleChange = (event, newValue) => {
// //     setValue(newValue);
// //   };

// //   return (
// //     <div className={classes.root}>
// //       <AppBar position="static">
// //         <Tabs
// //           value={value}
// //           onChange={handleChange}
// //           indicatorColor="secondary"
// //           variant="scrollable"
// //           scrollButtons="auto"
// //           style={{alignSelf: 'center'}}
// //           aria-label="scrollable auto tabs example"
// //         >
// //           <Tab component={Link} label="Home" to="/" href="/" {...a11yProps(0)} />
// //           <Tab component={Link} label="About This Site" to="/Site" href="/Site" {...a11yProps(1)} />
// //           <Tab component={Link} label="My Work" to="/Project" href="/Project" {...a11yProps(2)} />
// //           <Tab component={Link} label="Professional Experience" to="/Resume" href="/Resume" {...a11yProps(3)} />
// //         </Tabs>
// //       </AppBar>
// //     </div>
// //   );
// // }













import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useLocation } from 'react-router-dom';
import Link from '@material-ui/core/Link'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();

  // const figureOutSelectedIndex = (location)=>{
  //   case location == '/Project' 
  //   case location == '/Project' 

  // }
  // const location = useLocation()
  // const selectedIndex = figureOutSelectedIndex(location)
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Tabs
          // value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          style={{alignSelf: 'center'}}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab component={Link} label="Home" to="/#" href="/#" {...a11yProps(0)} value={value} index={0}/>
          <Tab component={Link} label="About This Site" to="/Site#" href="/Site#" {...a11yProps(1)} value={value} index={1} />
          <Tab component={Link} label="My Work" to="/Project" href="/Project#" {...a11yProps(2)} value={value} index={2}/>
          <Tab component={Link} label="Professional Experience" to="/Resume#" href="/Resume#" {...a11yProps(3)} value={value} index={3}/>
        </Tabs>
      </AppBar>
      {/* <TabPanel value={value} index={0}>
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
      </TabPanel> */}
    </div>
  );
}
