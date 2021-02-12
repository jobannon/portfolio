import React, { useEffect, useState } from 'react';
import {
  Paper, Chip, Box, makeStyles, Typography, Grid,
} from '@material-ui/core';
import TextLoop from 'react-text-loop';
import axios from 'axios';

function IssueScroller() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      backgroundColor: '#F0F9F4',
      borderRadius: '15px',
    },
  }));
  const classes = useStyles();
  const [githubIssues, setGithubIssues] = useState([]);
  const [cleanTitles, setCleanTitles] = useState([]);
  const [status, setStatus] = useState([]);

  async function getGithubIssues() {
    const options = {
      method: 'GET',
      url:
          'https://api.github.com/repos/jobannon/fe-movie-superstar-redux/issues',
      headers: {
      },
    };
    try {
      const response = await axios.request(options);
      setGithubIssues(response.data);
    } catch (error) {
      console.error('Error fetching Github issues for Superstar Repo', error);
    }
  }
  useEffect(() => {
    getGithubIssues();
  }, []);

  useEffect(() => {
    setCleanTitles(githubIssues.map((issue) => issue.title));
    setStatus(githubIssues.map((issue) => issue.milestone.title));
  }, [githubIssues.length > 0]);

  return (
    <>
      <Grid container direction="row" justify="center" style={{ minWidth: '300px' }}>
        <Grid item style={{ minWidth: '350px', maxWidth: '350px', overflow: 'hidden' }}>
          <Paper className={classes.paper}>
            {(cleanTitles.length > 0)
              ? (
                <Typography>
                  <Box component="p">
                    <TextLoop>{cleanTitles}</TextLoop>
                  </Box>
                </Typography>
              )
              : ' ' }
            {(cleanTitles.length > 0)
              ? (
                <Box>
                  <Chip label={<TextLoop>{status}</TextLoop>} color="secondary" />
                </Box>
              )
              : ' ' }
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
export default IssueScroller;
