import React, { useEffect, useState } from 'react';

import Paper from '@material-ui/core/Paper';
import TextLoop from 'react-text-loop';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

function IssueScroller() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    left: {
      textAlign: 'left',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      backgroundColor: '#F0F9F4',
      borderRadius: '15px',
      // maxWidth: '30vw',
    },
  }));
  const classes = useStyles();
  const [githubIssues, setGithubIssues] = useState([]);
  const [cleanTitles, setCleanTitles] = useState([]);
  const [status, setStatus] = useState([]);

  function getGithubIssues() {
    fetch('https://api.github.com/repos/jobannon/fe-movie-superstar-redux/issues')
      .then((response) => response.json())
      .then((data) => {
        setGithubIssues(data);
      });
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
    </>
  );
}
export default IssueScroller;
