import React, { useEffect, useState } from 'react';

import TextLoop from 'react-text-loop';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

function IssueScroller(props) {
  const useStyles = makeStyles(theme => ({
    left: {
      textAlign: 'left'
    }
  }))
  const classes = useStyles();
  const [githubIssues, setGithubIssues] = useState([]);
  const [cleanTitles, setCleanTitles] = useState([]);
  const [status, setStatus] = useState([]);
  const [githubIssuesClean, setGithubIssuesClean] = useState({});

  function getGithubIssues() {
    fetch('https://api.github.com/repos/jobannon/fe-movie-superstar-redux/issues')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGithubIssues(data);
      })
      .catch((error) => {
        // console.error('Error:', error);
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
      <Box>
        {(cleanTitles.length > 0) ? <h1><TextLoop children={cleanTitles} /></h1> : ' ' }
      </Box>
      <Box>
        {(cleanTitles.length > 0) ? <Chip label={<TextLoop children={status} />}  color="secondary" /> : ' ' }
      </Box>
    </>
  );
}
export default IssueScroller;
