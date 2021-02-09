import React from 'react';
import { useQuery, gql } from '@apollo/client';
import {
  CssBaseline, Link, Grid, Box, makeStyles, withStyles,
} from '@material-ui/core';
import FeaturedPost from './FeaturedPost';

const useStyles = makeStyles(() => ({
  linkStyle: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

const NormalizedGridContainer = withStyles((theme) => ({
  root: {
    width: '100%',
    margin: '0px',
    padding: `${(theme.spacing / 2) * 8}px`,
  },
}))(Grid);

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
        <NormalizedGridContainer container direction="column" spacing={3}>
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
        </NormalizedGridContainer>
      </Box>
    </>
  );
}
