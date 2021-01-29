import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Box from '@material-ui/core/Box';

import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Lottie from 'react-lottie';
import nodeJs from '../assets/nodeJs.png';
import reactLogoData from '../lotties/reactLogoData.json';
import materialUI from '../assets/materialUI.png';
import codePromptFull from '../lotties/codePromptFull.json';
import constructionData from '../lotties/constructionData.json';
import plantGrowingData from '../lotties/plantGrowingData.json';
import amazonLogoData from '../lotties/amazonLogoData.json';

const defaultOptionsReturn = (nameOf) => ({
  loop: true,
  autoplay: true,
  animationData: nameOf,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
    backgroundColor: theme.palette.success.light,
  },
  paperCard: {
    padding: '6px 16px',
    maxWidth: '350px',
    maxHeight: '600px',
    minWidth: '350px',
    minHeight: '600px',
  },
  paperTimelineCard: {
    padding: '56px 16px',
    maxWidth: '350px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
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
  headerText: {
    marginBottom: '100px',
    textAlign: 'center',
  },
}));

// bug in MUI- see https://github.com/mui-org/material-ui/issues/7466
const NormalizedGridContainer = withStyles((theme) => ({
  root: {
    width: '100%',
    margin: '0px',
    padding: `${(theme.spacing / 2) * 8}px`,
  },
}))(Grid);

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <NormalizedGridContainer
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: '30px' }}
      >
        <Grid item>
          <Paper elevation={3} className={classes.paperCard}>
            <Box style={{ width: '350px', height: '350px' }}>
              <img src={nodeJs} zIndex="-1" alt="NodeJS" />
            </Box>
            <Typography variant="h6" component="h1">
              NodeJS
            </Typography>
            <Typography color="textSecondary">Never Leave Home without it!</Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper elevation={3} className={classes.paperCard}>
            <Lottie
              options={defaultOptionsReturn(reactLogoData)}
              height={350}
              width={350}
            />
            <Typography variant="h6" component="h1">
              React
            </Typography>
            <Typography color="textSecondary">This application uses React hooks and functional components</Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper elevation={3} className={classes.paperCard}>
            <img src={materialUI} width="350" height="350" zIndex="-1" alt="materialUI" />
            <Typography variant="h6" component="h1">
              Material UI
            </Typography>
            <Typography color="textSecondary">Components from Google!</Typography>
          </Paper>
        </Grid>
      </NormalizedGridContainer>
      <NormalizedGridContainer
        container
        direction="row"
        xs={12}
        justify="center"
        alignItems="center"
        style={{ marginTop: '30px', marginBottom: '30px' }}
      >
        <Grid item>
          <Paper elevation={3} className={classes.paperTimelineCard}>
            <Timeline align="alternate">
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="body2" color="textSecondary">
                    Infrastructure
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" variant="outlined">
                    <Lottie
                      options={defaultOptionsReturn(amazonLogoData)}
                      height={40}
                      width={40}
                    />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                      AWS
                    </Typography>
                    <Typography>This application is deployed to AWS cloud</Typography>
                    <Typography color="textSecondary">The power of the cloud!</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary" variant="outlined">
                    <Lottie
                      options={defaultOptionsReturn(plantGrowingData)}
                      height={40}
                      width={40}
                    />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                      Elastic Beanstalk
                    </Typography>
                    <Typography>Handles the deployment pipeline</Typography>
                    <Typography color="textSecondary">Autoscaling of capacity is built in using ...</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary" variant="outlined">
                    <Lottie
                      options={defaultOptionsReturn(constructionData)}
                      height={40}
                      width={40}
                    />
                  </TimelineDot>
                  <TimelineConnector className={classes.secondaryTail} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                      GitHub Actions
                    </Typography>
                    <Typography>Work in Progress</Typography>
                    <Typography color="textSecondary">Allowing a auto-deploy from the Git repository to Elastic Beanstalk</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary" variant="outlined">
                    <Lottie
                      options={defaultOptionsReturn(codePromptFull)}
                      height={40}
                      width={40}
                    />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                      Github
                    </Typography>
                    <Typography color="textSecondary">Of Course</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Paper>
        </Grid>
      </NormalizedGridContainer>
    </>
  );
}
