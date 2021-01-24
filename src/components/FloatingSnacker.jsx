import React from 'react';
import Lottie from 'react-lottie';
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid';
import coffeeCupChat from '../lotties/levitatingCoffee.json';

export default function FloatingSnacker() {
  const defaultOptionsReturn = (nameOf) => ({
    loop: true,
    autoplay: true,
    animationData: nameOf,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  });

  return (
    <>
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <Grid item xs={12} style={{ textAlign: 'right' }}>
          <Box component="div" style={{float: 'right', marginRight: '40px'}}>
          <Lottie
            options={defaultOptionsReturn(coffeeCupChat)}
            height={100}
            width={100}
          /></Box>
        </Grid>
      </Grid>
    </>
  );
}
