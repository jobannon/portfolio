import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    minWidth: '50vh',
    maxWidth: '330px',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: '16vh',
  },
  cardHeaderUnderline: {
    borderBottomColor: theme.palette.secondary.light,
    borderBottom: '1px solid',
  },
}));

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid container>
      <Grid item xs={12}>
        <CardActionArea component="a" href="#">
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  <Box component="span" className={classes.cardHeaderUnderline}>
                    {props.title}
                  </Box>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {props.date}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {props.description}
                </Typography>
                <Typography variant="subtitle1" color="primary" hidden={props.disabled}>
                  Continue reading...
                </Typography>
              </CardContent>
            </div>
            <Hidden xsDown>
              <CardMedia className={classes.cardMedia} image={props.image} title={props.imageTitle} />
            </Hidden>
          </Card>
        </CardActionArea>
      </Grid>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
