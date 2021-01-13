import { makeStyles } from '@material-ui/core';
import { Palette, PlaylistAdd } from '@material-ui/icons';
import React from 'react';
import Grid from '@material-ui/core/Grid';

function Footer() {
  const useStyles = makeStyles((theme) => ({
    boxBackground: {
      backgroundColor: theme.palette.primary.main,
			minHeight: '10vh'
    },
  }));

  const classes = useStyles();
  return (
    <>
      <Grid xs={12} className={classes.boxBackground} />
    </>
  );
}

export default Footer;
