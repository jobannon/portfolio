import React, { useState, useEffect } from 'react';
import Butter from 'buttercms';
import {
  useParams,
} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

export default function CorrespondencePost() {
  const [loaded, setLoaded] = useState(false);
  const [content, setContent] = useState([]);

  const { REACT_APP_BUTTER_ID: BUTTER_ID } = process.env;
  const butter = Butter(BUTTER_ID);
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
