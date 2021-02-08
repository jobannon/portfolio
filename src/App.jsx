import React from 'react';
import './App.scss';
import {
  Switch,
  Route,
} from 'react-router-dom';

import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
} from '@material-ui/core';

import Box from '@material-ui/core/Box';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { ApolloClient, ApolloProvider } from '@apollo/client';

import TopBar from './components/TopBar';
import About from './components/About';
import Project from './components/Project';
import Site from './components/Site';
import Resume from './components/Resume';
import Footer from './components/Footer';
import FloatingSnacker from './components/FloatingSnacker';
import SpeedDial from './components/SpeedDial';
import CorrespondencePost from './components/CorrespondencePost';
import Writings from './components/Writings';
import WritingsPost from './components/WritingsPost';

require('dotenv').config();

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const { REACT_APP_SPACE_ID: SPACE_ID, REACT_APP_ACCESS_TOKEN: ACCESS_TOKEN } = process.env;

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) => console.log(
          `[GraphQL error]: ${ACCESS_TOKEN} Message: ${message}, Location: ${locations}, Path: ${path}`,
        ));
      }
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`,
      credentials: 'same-origin',
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }),
  ]),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <Box id="container">
        <ApolloProvider client={client}>
          <MuiThemeProvider theme={theme}>
            <Box id="main-content">
              <TopBar />
              <Switch>
                <Route path="/correspondence/:slug">
                  <CorrespondencePost/>
                </Route>
                <Route path="/project">
                  <Project />
                </Route>
                <Route path="/writings/:slug">
                  <WritingsPost />
                </Route>
                <Route exact path="/writings">
                  <Writings />
                </Route>
                <Route path="/site">
                  <Site />
                </Route>
                <Route path="/resume">
                  <Resume />
                </Route>
                <Route exact path="/">
                  <About />
                </Route>
              </Switch>
            </Box>
            <FloatingSnacker />
            <SpeedDial />
            <Footer />
          </MuiThemeProvider>
        </ApolloProvider>
      </Box>
    </>
  );
}

export default (App);
