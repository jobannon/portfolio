import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CloudCircleRoundedIcon from '@material-ui/icons/CloudCircleRounded';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Box from '@material-ui/core/Box';

import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Lottie from 'react-lottie';
import nodeJs from './assets/nodeJs.png';
import Footer from './Footer';
import TopBar from './TopBar';
import reactLogoData from './lotties/reactLogoData.json';
import materialUI from './assets/materialUI.png';
import codePromptData from './lotties/codePromptData.json';
import codePromptFull from './lotties/codePromptFull.json';
import constructionData from './lotties/constructionData.json';
import plantGrowingData from './lotties/plantGrowingData.json';
import amazonLogoData from './lotties/amazonLogoData.json';

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
    maxWidth: '400px',
    maxHeight: '600px',
    minWidth: '400px',
    minHeight: '600px',
  },
  paperTimelineCard: {
    padding: '56px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <TopBar whereAt="About This Site" />
      <Grid
        container
        xs={12}
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: '30px' }}
      >
        <Grid item>
          <Paper elevation={3} className={classes.paperCard}>
            <Box style={{ width: '400px', height: '400px' }}>
              <img src={nodeJs} width="300" height="300" zIndex="-1" alt="NodeJS" />
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
              height={400}
              width={400}
            />
            <Typography variant="h6" component="h1">
              React
            </Typography>
            <Typography color="textSecondary">This application uses React hooks and functional components</Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper elevation={3} className={classes.paperCard}>
            <img src={materialUI} width="400" height="400" zIndex="-1" alt="materialUI" />
            <Typography variant="h6" component="h1">
              Material UI
            </Typography>
            <Typography color="textSecondary">Standarized Components from Google!</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid
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
                    <Typography>Handles the deployment of both the FrontEnd and BackEnd</Typography>
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
                    <Typography color="textSecondary">Allowing a auto-deploy from the Git repository to elastic beanstalk</Typography>
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
      </Grid>
      <Footer />
    </>
  );
}
