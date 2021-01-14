import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TopBar from './TopBar';
import awsCloudBadge from './assets/awsCloudBadge.png';

// credentials
function Resume() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    badge: {
      padding: theme.spacing(2),
      maxWidth: '100px',
    },
  }));
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <TopBar />
      <Grid container direction="column">
        <Grid item={4}>
          <Paper className={classes.badge}>
            <img src={awsCloudBadge} alt="AWS Cloud Certified" height="300" />
          </Paper>
        </Grid>
      </Grid>
    </>

  );
}
export default Resume;
