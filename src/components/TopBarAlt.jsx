import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import {
  HashRouter,
  BrowserRouter,
  Route,
  Link,
  Switch,
  useLocation,
  Redirect,
} from 'react-router-dom';

import Resume from './Resume';
import About from './About';
import Project from './Project';

function TabPanel(props) {
  const {
    children, value, active, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== active}
      id={`tabs-router-${index}`}
      aria-labelledby={`tabs-router-${index}`}
      {...other}
    >
      {value === active && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `tabs-router-${index}`,
    'aria-controls': `tabs-router-${index}`,
  };
}

function MyTabs() {
  // If you provide an array of routes (which is the normal use case)
  // then you need to provide them in descendant order.
  // This means that if you have nested routes like users,
  // users/new, users/edit, etc.
  // Then the order would be ['users/add', 'users/edit', 'users'].
  // const routeMatch = useRouteMatch(["/inbox/:id", "/drafts", "/trash"]);
  // const currentTab = routeMatch?.path;
  const location = useLocation();
  const currentTab = location.pathname;
  return (
    <div>
      <AppBar position="static">
        <Tabs value={currentTab}>
          <Tab
            label="Home"
            value="/"
            to="/"
            component={Link}
            {...a11yProps(0)}
          />
          <Tab 
            label="Work"
            value="/Project"
            to="/Project"
            component={Link}
            {...a11yProps(0)}
          />
          <Tab
            label="Experience"
            value="/Resume"
            to="/Resume"
            component={Link}
            {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={currentTab} active="/" index={0}>
        <Typography>Home</Typography>
      </TabPanel>
      <TabPanel value={currentTab} active="/Experience" index={1}>
        <Typography>Drafts details</Typography>
      </TabPanel>
    </div>
  );
}

export default function TopBarAlt() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/Resume">
            <Resume />
          </Route>
          <Route path="/Project">
            <Project />
          </Route>
        </Switch>
        <MyTabs />
      </BrowserRouter>
    </div>
  );
}
