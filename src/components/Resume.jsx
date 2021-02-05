import React, { useState } from 'react';
import {
  CssBaseline, Paper, Grid, Button, Box, Chip, Link, Typography,
  makeStyles, withStyles,
} from '@material-ui/core';
import {
  Document, Page, pdfjs, View,
} from 'react-pdf';
import { SizeMe } from 'react-sizeme';
import turingFull from '../assets/turingFull.png';
import awsCloudBadge from '../assets/awsCloudBadge.png';
import hastingsCollegeLogo from '../assets/hastingsCollegeLogo.png';
import currentResume from '../assets/currentResume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const NormalizedGridContainer = withStyles((theme) => ({
  root: {
    width: '100%',
    margin: '0px',
    padding: `${(theme.spacing / 2) * 8}px`,
  },
}))(Grid);

function Resume() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    badgeBox: {
      marginLeft: '10px',
      marginRight: '10px',
      padding: theme.spacing(2),
      maxWidth: '220px',
      minWidth: '220px',
      textAlign: 'center',
    },
    underlineSubheaderRed: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
      borderBottom: 'solid 4px',
      borderBottomColor: theme.palette.secondary.main,
      lineHeight: '1.5',
    },
  }));
  const classes = useStyles();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const competencies = ['CSS', 'HTML', 'RAILS', 'JS', 'AWS', 'SALESFORCE', 'TDD', 'MVC', 'OOP', 'PYTHON', 'RSPEC', 'API DESIGN', 'CI/CD', 'AGILE', 'TDD', 'REST', 'RUBY', 'DB', 'DESIGN MICRO-SERVICES', 'REACT'];
  const softSkills = ['Six Sigma Familiar', 'Lean', 'Customer Triage', 'Account Management', 'Customer Service', 'Proactive Communication', 'Effective Followup'];

  const competenciesChipped = competencies.map((term) => (<Chip label={term} variant="outlined" color="primary" style={{ padding: '5px', margin: '3px' }} />));
  const softSkillsChipped = softSkills.map((term) => (<Chip label={term} variant="outlined" color="primary" style={{ padding: '5px', margin: '3px' }} />));

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <>
      <CssBaseline />
      <NormalizedGridContainer
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: '15px', marginLeft: 'auto', marginRight: 'auto' }}
        spacing={3}
      >
        <Grid item>
          <Paper className={classes.badgeBox}>
            <img src={awsCloudBadge} alt="AWS Cloud Certified" height="200" />
            {' '}
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.badgeBox}>
            <img src={turingFull} alt="Turing Alumni" height="200" />
            {' '}
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.badgeBox}>
            <img src={hastingsCollegeLogo} alt="Hastings College" height="200" />
          </Paper>
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography variant="h6">
            <Box mb={2} mt={3}>
              <Box component="span" className={classes.underlineSubheaderRed}>
                Technical Skillsets
              </Box>
            </Box>
          </Typography>
          <Paper className={classes.paper} style={{ maxWidth: '630px', margin: 'auto', padding: '15px' }}>
            {competenciesChipped}
          </Paper>
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography variant="h6" mb="10px">
            <Box mb={2} mt={3}>
              <Box component="span" className={classes.underlineSubheaderRed}>
                Competencies
              </Box>
            </Box>
          </Typography>
          <Paper className={classes.paper} style={{ maxWidth: '630px', margin: 'auto', padding: '15px' }}>
            {softSkillsChipped}
          </Paper>
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography variant="h6" mb="10px">
            <Box mt={3}>
              <Box component="span" className={classes.underlineSubheaderRed}>
                Resume
              </Box>
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link href="/currentResume.pdf" download>
            <Button variant="outlined" color="secondary">Download PDF</Button>
          </Link>
        </Grid>

        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Box style={{ maxWidth: '1080px', margin: 'auto' }}>
            <SizeMe>
              {({ size }) => (
                <Document
                  file={currentResume}
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <Page pageNumber={pageNumber} width={size.width ? size.width : 1} />
                </Document>
              )}
            </SizeMe>
          </Box>
        </Grid>
      </NormalizedGridContainer>
    </>
  );
}
export default Resume;
