import React, {
  useState, useEffect, useCallback, useMemo,
} from 'react';
import { useQuery, gql, ApolloConsumer } from '@apollo/client';
import { Query } from 'react-apollo';
import {
  CssBaseline, Link, Grid, Box, CircularProgress, makeStyles,
} from '@material-ui/core';
import FeaturedPost from './FeaturedPost';

require('dotenv').config();

const useStyles = makeStyles((theme) => ({
  linkStyle: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

export default function Writings() {
  const classes = useStyles();
  const POSTS_QUERY = gql`
    query GetBlogCollection {
      blogPostCollection {
        items {
          title
          heroImage {
            url
          }
          slug
          description
          publishDate
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(POSTS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <CssBaseline />
      <Box style={{ marginTop: '100px', margin: 'auto' }}>
        <Grid container direction="column" spacing={3}>
          {data.blogPostCollection.items.map((item) => (
            <Grid item style={{ margin: 'auto' }}>
              <Link
                to={`/${item.slug}`}
                href={`/writings/${item.slug}`}
                target="#"
                className={classes.linkStyle}
              >
                <Box>
                  <FeaturedPost
                    post={item}
                    disabled
                  />
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
