import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Lottie from 'react-lottie';
import Typography from '@material-ui/core/Typography';
import RotateRightIcon from '@material-ui/icons/RotateRight';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import Paper from '@material-ui/core/Paper';
import ReactCardFlip from 'react-card-flip';
import Chip from '@material-ui/core/Chip';
import '../overrides.css';

export default function ProjectCard(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      position: 'relative',
      maxWidth: 345,
      minHeight: 560,
      minWidth: 345,
    },
    chips: {
      display: 'flex',
      justifyContent: 'center',
      minHeight: '100px',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
    cardGroup: {
      marginTop: '5vh',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: theme.palette.primary.light,
    },
  }));

  const defaultOptionsReturn = (nameOf) => ({
    loop: true,
    autoplay: true,
    animationData: nameOf,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  });

  const {
    animationData, stacksUsed, highLights, title,
    avatarLabel, subheader, description, links,
    liveLink, gitHubLink, avatarLabelAria,
    disableButtonLive, disableButtonGithub,
  } = props;
  const classes = useStyles();
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleFlippedClick = useCallback((e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  });

  const mappedStacksUsed = stacksUsed.map((stack) => (<Chip variant="outlined" color="primary" label={stack} />));
  const mappedHightLights = highLights.map((term) => (<Chip variant="outlined" color="secondary" label={term} />));

  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <Box key="front">
          <Paper elevation={3}>
            <Card className={classes.root} variant="outlined">
              <CardHeader
                avatar={(
                  <Avatar aria-label={avatarLabelAria} className={classes.avatar}>
                    {avatarLabel}
                  </Avatar>
              )}
                title={title}
                subheader={subheader}
              />
              <CardMedia
                title={title}
              >
                <Lottie
                  options={defaultOptionsReturn(animationData)}
                  height={300}
                  width={300}
                />
              </CardMedia>
              <CardContent>
                <Typography>
                  {title}
                </Typography>
                <Typography component="p" variant="body2" color="textSecondary">
                  {description}
                </Typography>
                {links && (
                <Box style={{
                  position: 'absolute', left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', bottom: '30px', textAlign: 'center', paddingTop: '20px',
                }}
                >
                  <Button
                    variant="outlined"
                    href={liveLink}
                    color="primary"
                    target="#"
                    disabled={disableButtonLive}
                    style={{ marginRight: '5px' }}
                  >
                    View Live
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={handleFlippedClick}
                    color="primary"
                  >
                    More...
                    <RotateRightIcon className="rotating" />
                  </Button>
                </Box>
                )}
              </CardContent>
            </Card>
          </Paper>
        </Box>
        <div key="back">
          <Paper elevation={3}>
            <Card className={classes.root} variant="outlined">
              <CardHeader
                avatar={(
                  <Avatar aria-label={avatarLabelAria} className={classes.avatar}>
                    {avatarLabel}
                  </Avatar>
              )}
                title={title}
                subheader={subheader}
              />
              <CardContent>
                <Typography variant="h6" style={{ marginBottom: '20px' }}>
                  Tech Stack
                </Typography>
                <Box component="div" style={{ minHeight: '160px' }}>
                  <Typography component="p" variant="body2" color="textSecondary">
                    <div className={classes.chips}>{mappedStacksUsed}</div>
                  </Typography>
                </Box>
                <Typography variant="h6" style={{ marginBottom: '20px' }}>
                  Highlights
                </Typography>
                <Typography component="p" variant="body2" color="textSecondary">
                  <Box className={classes.chips}>{mappedHightLights}</Box>
                </Typography>
                <Typography component="p" variant="body2" color="textSecondary" />
                {links && (
                <Box style={{
                  position: 'absolute', left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', bottom: '30px', textAlign: 'center', paddingTop: '20px',
                }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    href={gitHubLink}
                    target="#"
                    disabled={disableButtonGithub}
                    style={{ marginRight: '5px' }}
                  >
                    View Github
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={handleFlippedClick}
                    color="primary"
                  >
                    Back
                    <RotateLeftIcon className="rotatingBack" />
                  </Button>
                </Box>
                )}
              </CardContent>
            </Card>
          </Paper>
        </div>
      </ReactCardFlip>
    </>
  );
}

ProjectCard.defaultProps = {
  links: true,
  height: 300,
  width: 300,
  stacksUsed: [],
  highLights: [],
};
ProjectCard.propTypes = {
  animationData: PropTypes.isRequired,
  stacksUsed: PropTypes.isRequired,
  highLights: PropTypes.isRequired,
  title: PropTypes.isRequired,
  avatarLabel: PropTypes.isRequired,
  avatarLabelAria: PropTypes.isRequired,
  // disableButtonGithub: PropTypes.IsOptional,
  // disableButtonLive: PropTypes.isOptional,
  subheader: PropTypes.isRequired,
  description: PropTypes.isRequired,
  links: PropTypes.isOptional,
  liveLink: PropTypes.isRequired,
  gitHubLink: PropTypes.isRequired,
};
