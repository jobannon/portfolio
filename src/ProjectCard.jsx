import React from 'react';
import Grid from '@material-ui/core/Grid';
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
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CssBaseline } from '@material-ui/core';
import TopBar from './TopBar';

function ProjectCard(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      position: 'relative',
      maxWidth: 345,
      minHeight: 560,
      minWidth: 345,
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
  const { animationData, lottieHeight, lottieWidth } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
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
              href={props.gitHubLink}
              target="#"
              disabled={props.disableButton}
            >
              View Github
            </Button>
            <Button
              variant="outlined"
              href={props.liveLink}
              target="#"
              disabled={props.disableButton}
            >
              View Live
            </Button>
          </Box>
          )}
        </CardContent>
      </Card>
    </>
  );
}

ProjectCard.defaultProps = {
  links: true,
};
export default ProjectCard;
