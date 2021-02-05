import React, {
  useState, useEffect, useCallback, useMemo,
} from 'react';
import { useQuery, gql, ApolloConsumer } from '@apollo/client';
import { Query } from 'react-apollo';
import { useParams } from 'react-router-dom';
import {
  Box, Grid, Link, Typography, CssBaseline,
} from '@material-ui/core';
import FeaturedPost from './FeaturedPost';
import ReactMarkdown from 'react-markdown';

require('dotenv').config();

export default function WritingsPost() {
  const accessToken = 'lskcNHk-XOra9XrdSIxgzBprlkN4iN9fH8FFf2tTqvQ';
  const spaceID = '52xx7e8krtto';

  const { slug } = useParams();
  console.log(slug);
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
      <Box style={{margin: 'auto', marginTop: '100px' }}>
        <Grid container direction="column" spacing={3}>
          {data.blogPostCollection.items.map((item) => (
            <Grid item style={{ margin: 'auto', maxWidth: '800px' }}>
                <Typography variant="h3" style={{marginBottom: '25px'}}>
                  {item.title}
                </Typography>
                <Box >
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
