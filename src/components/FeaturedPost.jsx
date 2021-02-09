import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography, Grid, Card, CardContent, CardMedia, Hidden, Box,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    minWidth: '50vh',
    maxWidth: '300px',
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
  coverImage: {
    [theme.breakpoints.down('xs', 'sm')]: {
      display: 'none',
    },
  },
}));

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography variant="h6">
                <Box component="span" className={classes.cardHeaderUnderline}>
                  {post.title}
                </Box>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={post.heroImage.url}
              title={post.imageTitle}
            />
          </Hidden>
        </Card>
      </Grid>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.isRequired,
};
