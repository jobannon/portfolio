// import React from 'react'

// function Site() {
//   return (
//     <>
//       hi
//     </>
//   );
// }
// export default Site;

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
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Lottie from 'react-lottie';
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
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        xs={12}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid
          container
          xs={6}
          alignItems="right"
          justify="right"
          textAlign="right"
        >
          <Grid item>
            <Timeline align="alternate">
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="body2" color="textSecondary">
                    Infrastructure
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot>
                    <Lottie
                      options={defaultOptionsReturn(amazonLogoData)}
                      height={40}
                      width={40}
                    />
                    {/* <CloudCircleRoundedIcon /> */}
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
            dfsdf
          </Grid>
        </Grid>
        <Grid container xs={6}>
          <Grid item>
            <Timeline align="alternate">
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="body2" color="textSecondary">
                    Infrastructure
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot>
                    <Lottie
                      options={defaultOptionsReturn(amazonLogoData)}
                      height={40}
                      width={40}
                    />
                    {/* <CloudCircleRoundedIcon /> */}
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
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
