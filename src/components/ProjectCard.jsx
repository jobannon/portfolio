import React, { useCallback } from 'react';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Lottie from 'react-lottie';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RotateRightIcon from '@material-ui/icons/RotateRight';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import Paper from '@material-ui/core/Paper';
import ReactCardFlip from 'react-card-flip';
import Chip from '@material-ui/core/Chip';

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

  // const {avatarLabel, } = props
  const { animationData, stacksUsed } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleFlippedClick = useCallback((e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  });

  const mappedStacksUsed = stacksUsed.map((stack) => (<Chip variant="outlined" color="primary" label={stack} />));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <Box key="front">
          <Paper elevation={3}>
            <Card className={classes.root} variant="outlined">
              <CardHeader
                avatar={(
                  <Avatar aria-label={props.avatarLabelAria} className={classes.avatar}>
                    {props.avatarLabel}
                  </Avatar>
              )}
                action={(
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
              )}
                title={props.title}
                subheader={props.subheader}
              />
              <CardMedia
                title={props.title}
              >
                <Lottie
                  options={defaultOptionsReturn(animationData)}
                  height={300}
                  width={300}
                />
              </CardMedia>
              <CardContent>
                <Typography>
                  {props.title}
                </Typography>
                <Typography component="p" variant="body2" color="textSecondary">
                  {props.description}
                </Typography>
                {props.links && (
                <Box style={{
                  position: 'absolute', left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', bottom: '30px', textAlign: 'center', paddingTop: '20px',
                }}
                >
                  <Button
                    variant="outlined"
                    href={props.liveLink}
                    color="primary"
                    target="#"
                    disabled={props.disableButtonLive}
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
                    <RotateRightIcon />
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
                  <Avatar aria-label={props.avatarLabelAria} className={classes.avatar}>
                    {props.avatarLabel}
                  </Avatar>
              )}
                action={(
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
              )}
                title={props.title}
                subheader={props.subheader}
              />
              <CardContent>
                <Typography variant="h6" style={{ marginBottom: '20px' }}>
                  Tech Stack
                </Typography>
                <Typography component="p" variant="body2" color="textSecondary">
                  <div className={classes.chips}>{mappedStacksUsed}</div>
                </Typography>
                <Typography variant="h6" style={{ marginTop: '20px', marginBottom: '20px' }}>
                  Open Issues
                </Typography>
                <Box display="flex">
                  <Button
                    variant="contained"
                    color="primary"
                    href={props.gitHubLink}
                    target="#"
                    disabled={props.disableButtonGithub}
                  >
                    View Github
                  </Button>
                </Box>
                <Typography component="p" variant="body2" color="textSecondary" />
                {props.links && (
                <Box style={{
                  position: 'absolute', left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', bottom: '30px', textAlign: 'center', paddingTop: '20px',
                }}
                >
                  <Button
                    variant="outlined"
                    onClick={handleFlippedClick}
                    color="primary"
                  >
                    Back
                    <RotateLeftIcon />
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
};
