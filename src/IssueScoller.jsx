import React, { useEffect, useState } from 'react';
import TextLoop from 'react-text-loop';

function IssueScroller(props) {
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
      {(cleanTitles.length > 0) ? <h1><TextLoop children={status} /></h1> : ' ' }
      {(cleanTitles.length > 0) ? <h1><TextLoop children={cleanTitles} /></h1> : ' ' }

    </>
  );
}
export default IssueScroller;
