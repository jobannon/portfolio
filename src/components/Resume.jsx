import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TopBar from './TopBar';
import turingFull from '../assets/turingFull.png';
import awsCloudBadge from '../assets/awsCloudBadge.png';
import hastingsCollegeLogo from '../assets/hastingsCollegeLogo.png';
import currentResume from '../assets/currentResume.pdf';

// credentials
function Resume() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    badge: {
      marginLeft: '10px',
      marginRight: '10px',
      padding: theme.spacing(2),
      maxWidth: '220px',
    },
  }));
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <TopBar />
      <Grid
        container
        alignItems="center"
        justify="center"
      >
        <Grid item xs={12}>
          <Box style={{ display: 'flex', marginTop: '20px' }}>
            <Paper className={classes.badge}>
              <img src={awsCloudBadge} alt="AWS Cloud Certified" height="200" />
            </Paper>
            <Paper className={classes.badge}>
              <img src={turingFull} alt="Turing Alumni" height="200" />
            </Paper>
            <Paper className={classes.badge}>
              <img src={hastingsCollegeLogo} alt="Hastings College" height="200" />
            </Paper>
          </Box>
        </Grid>
      </Grid>
      <Box style={{ marginLeft: '45px', marginTop: '20px' }}>
        <embed src={currentResume} alt="AWS Cloud Certified" style={{ height: '70vh', width: '40vw' }} />
      </Box>
    </>

  );
}
export default Resume;
