import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Paper, Typography, Button, MobileStepper,
} from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import earlyAgeAppleBasic from '../assets/earlyAge/earlyAgeAppleBasic.png';
import earlyAgeTic from '../assets/earlyAge/earlyAgeTic.png';
import earlyAgeTic2 from '../assets/earlyAge/earlyAgeTic2.png';
import earlyAgeTic3 from '../assets/earlyAge/earlyAgeTic3.png';
import earlyAgeTic4 from '../assets/earlyAge/earlyAgeTic4.png';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const photoSteps = [
  {
    label: 'My First Programming Language - AppleSoftBasic',
    imgPath:
      earlyAgeAppleBasic,
  },
  {
    label: 'Tic Tac Toe was the Genesis of my Journey',
    imgPath:
    earlyAgeTic,
  },
  {
    label: 'Using Algebra in one of my first applications',
    imgPath:
    earlyAgeTic2,
  },
  {
    label: 'More TicTacToe',
    imgPath:
    earlyAgeTic3,
  },
  {
    label: 'More Algebra being used for early games',
    imgPath:
     earlyAgeTic4,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('xs', 'sm')]: {
      maxWidth: 400,
    },
    [theme.breakpoints.up('md', 'lg')]: {
      maxWidth: 800,
    },
    flexGrow: 1,
    margin: 'auto',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: '#F0F9F4',
  },
  stepperBottom: {
    backgroundColor: '#F0F9F4',
  },
  imgSize: {
    [theme.breakpoints.up('xs', 'sm')]: {
      maxWidth: 400,
    },
    [theme.breakpoints.up('md', 'lg')]: {
      maxWidth: 800,
    },
    height: 'auto',
    display: 'block',
    overflow: 'hidden',
    width: '100%',
  },
}));

export default function AboutWhyIAmCarousel() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = photoSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{photoSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {photoSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.imgSize} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        className={classes.stepperBottom}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={(
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        )}
        backButton={(
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        )}
      />
    </div>
  );
}
