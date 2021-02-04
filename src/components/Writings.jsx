import React, { useState, useEffect } from 'react';
import { useQuery, gql, ApolloConsumer } from '@apollo/client';
import { Query } from 'react-apollo';
import Box from '@material-ui/core/Box';
import FeaturedPost from './FeaturedPost';

require('dotenv').config();

export default function Writings() {
  const [Entries, setEntries] = useState(undefined);
  const runQuery = gql`
		query GetBlogCollection {
			blogPostCollection {
				items {
					title
					slug
					description
					publishDate
				}
			}
		}
`;

  const accessToken = 'lskcNHk-XOra9XrdSIxgzBprlkN4iN9fH8FFf2tTqvQ';
  const spaceID = '52xx7e8krtto';

  const POSTS_QUERY = gql`
    query GetBlogCollection {
      blogPostCollection {
        items {
          title
          slug
          description
          publishDate
        }
      }
    }
  `;

  const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

  const { loading, error, data } = useQuery(POSTS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);

  function getPosts() {
    // setEntries(data);
  }

  if (data !== 'undefined') {
    var collection = data.blogPostCollection.items.map((item) => {
      <FeaturedPost
        title={item.title}
        date={item.publishDate}
        description={item.description}
        disabled
        // image={dryerPhoto}
        // onClick={withLink('/post', markedPost)}
      />;
    });
    console.log(collection);
  }

  return (
    <>
      <Box style={{ marginTop: '300px' }}>
          {collection}
        <ApolloConsumer>

          {(client) => {
            // <Query query={getPosts} />;
          }}
          {/* {Entries} */}
        </ApolloConsumer>
      </Box>
    </>
  );
}
