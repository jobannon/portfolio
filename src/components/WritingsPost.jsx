import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import {
  Box, Grid, Typography, CssBaseline, makeStyles,
} from '@material-ui/core';
import ReactMarkdown from 'react-markdown';

require('dotenv').config();

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  subheaderRedUnderline: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottom: 'solid 9px',
    borderBottomColor: theme.palette.secondary.main,
    lineHeight: '1.5',
  },
}));

export default function WritingsPost() {
  const classes = useStyles();

  const { slug } = useParams();
  const SINGLE_POST_QUERY = gql`
    query GetPostBySlug {
      blogPostCollection(where: {slug:"${slug}"}) {
        items {
          title
        body
        }
      }
    }
    `;

  const { loading, error, data } = useQuery(SINGLE_POST_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <CssBaseline />
      <Box style={{ margin: 'auto', marginTop: '100px' }}>
        <Grid container direction="column" spacing={3}>
          {data.blogPostCollection.items.map((item) => (
            <Grid item style={{ margin: 'auto', maxWidth: '900px' }}>
              <Typography variant="h2" className={classes.paper}>
                <Box component="span" className={classes.subheaderRedUnderline}>
                  {item.title}
                </Box>
              </Typography>
              <Box>
                <ReactMarkdown>
                  {item.body}
                </ReactMarkdown>
                {/* {item.body} */}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
