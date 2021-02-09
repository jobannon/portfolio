import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import {
  Box, Grid, Typography, CssBaseline, makeStyles,
} from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import Image from 'material-ui-image';

require('dotenv').config();

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
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

export default function CorrespondencePost() {
  const classes = useStyles();

  const { slug } = useParams();
  const SIMPLE_LETTER_QUERY = gql`
    query GetCorrespondencePostBySlug {
      correspondencePostCollection(where: {slug:"${slug}"}) {
        items {
          title
          main
          coverImage {
            url
          }
        }
      }
    }
    `;

  const { loading, error, data } = useQuery(SIMPLE_LETTER_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <CssBaseline />
      <Box style={{ margin: 'auto', marginTop: '100px' }}>
        <Grid container direction="column" spacing={3}>
          {data.correspondencePostCollection.items.map((item) => (
            <Grid item style={{ margin: 'auto', maxWidth: '900px' }}>
              <img src={item.coverImage.url} height="200px" />
              <Typography variant="h2" className={classes.paper}>
                <Box component="span" className={classes.subheaderRedUnderline}>
                  {item.title}
                </Box>
              </Typography>
              <Box>
                <Typography variant="p">
                  <ReactMarkdown>
                    {item.main}
                  </ReactMarkdown>
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
