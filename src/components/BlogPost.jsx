import React, { useState, useEffect } from 'react';
import Butter from 'buttercms';
import {
  useParams,
} from 'react-router-dom';
import SelectInput from '@material-ui/core/Select/SelectInput';
import Grid from '@material-ui/core/Grid';

export default function BlogPost() {
  const [loaded, setLoaded] = useState(false);
  const [content, setContent] = useState([]);

  const butter = Butter('31ea5a68e6738d99e452df58f9656819247fff89');
  const { slug } = useParams();

  useEffect(() => {
    butter.post.retrieve(slug).then((resp) => {
      setLoaded(true);
      setContent(resp.data.data.body);
    });
  }, []);

  return (
    <>
      <Grid container direction="row" justify="center" style={{ marginTop: '40px' }}>
        <Grid item xs={6}>
          {loaded
        && (
        <div>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        )}
          {!loaded
				&& (
					<div>
  Loading...
					</div>
				)}
        </Grid>
      </Grid>
    </>
  );
}
