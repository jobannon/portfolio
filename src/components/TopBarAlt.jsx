import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import {
  BrowserRouter,
  Route,
  Link,
  useLocation,
  Redirect
} from "react-router-dom";

function TabPanel(props) {
  const { children, value, active, index, ...other } = props;

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
    "aria-controls": `tabs-router-${index}`
  };
}

function MyTabs() {
  // If you provide an array of routes (which is the normal use case)
  // then you need to provide them in descendant order.
  // This means that if you have nested routes like users,
  // users/new, users/edit, etc.
  // Then the order would be ['users/add', 'users/edit', 'users'].
  //const routeMatch = useRouteMatch(["/inbox/:id", "/drafts", "/trash"]);
  //const currentTab = routeMatch?.path;
  const location = useLocation();
  let currentTab = location.pathname;
  return (
    <div>
      <AppBar position="static">
        <Tabs value={currentTab}>
          <Tab
            label="Resume"
            value="/resume"
            to="/resume"
            component={Link}
            {...a11yProps(0)}
          />
          <Tab
            label="Drafts"
            value="/drafts"
            to="/drafts"
            component={Link}
            {...a11yProps(1)}
          />
          <Tab
            label="Trash"
            value="/trash"
            to="/trash"
            component={Link}
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={currentTab} active="/inbox/:id" index={0}>
        <Typography>Inbox 1 details</Typography>
      </TabPanel>
      <TabPanel value={currentTab} active="/drafts" index={1}>
        <Typography>Drafts details</Typography>
      </TabPanel>
      <TabPanel value={currentTab} active="/trash" index={2}>
        <Typography>Trash details</Typography>
      </TabPanel>
    </div>
  );
}

export default function TabsRouter() {
  return (
    <div>
      <BrowserRouter>
        <Route>
          {({ location }) => (
            <Typography gutterBottom>
              Current route: {location.pathname}
            </Typography>
          )}
        </Route>
        <Route exact path="/">
          <Redirect to="/inbox" />
        </Route>
        <MyTabs />
      </BrowserRouter>
    </div>
  );
}
