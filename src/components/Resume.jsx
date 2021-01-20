import React, { useState } from 'react';
import {
  Document, Page, pdfjs, View,
} from 'react-pdf';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import turingFull from '../assets/turingFull.png';
import awsCloudBadge from '../assets/awsCloudBadge.png';
import hastingsCollegeLogo from '../assets/hastingsCollegeLogo.png';
import currentResume from '../assets/currentResume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// credentials
function Resume() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    colorBox: {
      marginLeft: '10px',
      background: '#3f51b5',
      paddingLeft: '17px',
      paddingRight: '17px',
      paddingTop: '15px',
      paddingBottom: '15px',
      borderRadius: '50px',
      color: 'white',
    },
    badge: {
      marginLeft: '10px',
      marginRight: '10px',
      padding: theme.spacing(2),
      maxWidth: '220px',
      minWidth: '220px',
      textAlign: 'center',
    },
    headerText: {
      marginBottom: '100px',
      textAlign: 'center',
    },
    credFormat: {
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
        margin: 'auto',
        justify: 'center',

      },
    },
    resumeFormat: {
      [theme.breakpoints.down('sm')]: {
        height: '80vh',
        width: '80vw',
      },
      [theme.breakpoints.up('lg')]: {
        display: 'flex',
        margin: 'auto',
        justify: 'center',
        height: '65vh',
        width: '25vw',
      },
      [theme.breakpoints.up('lg')]: {
        display: 'flex',
        margin: 'auto',
        justify: 'center',
        height: '75vh',
        width: '50vw',
      },
    },
  }));
  const classes = useStyles();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <>
      <CssBaseline />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: '15px' }}
        spacing={3}
      >
        <Grid item xs={12} className={classes.headerText}>
          <Typography className={classes.paper} variant="h1">
            <Box component="span" className={classes.colorBox}>
              Experience
            </Box>
          </Typography>
        </Grid>
        <Grid item>
          {/* <Box style={{ display: 'flex', marginTop: '20px' }}> */}
          <Paper className={classes.badge}>
            <img src={awsCloudBadge} alt="AWS Cloud Certified" height="200" />
            {' '}
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.badge}>
            <img src={turingFull} alt="Turing Alumni" height="200" />
            {' '}
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.badge}>
            <img src={hastingsCollegeLogo} alt="Hastings College" height="200" />
          </Paper>
        </Grid>
        {/* </Box> */}
      </Grid>
      <Box style={{ display: 'flex', marginTop: '30px', justifyContent: 'center' }}>
        <Document
          file={currentResume}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </Box>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: '15px' }}
        spacing={3}
      >
        <Link href="/currentResume.pdf" download>
          <Button variant="outlined" color="secondary">Download</Button>
        </Link>
      </Grid>
    </>
  );
}
export default Resume;
