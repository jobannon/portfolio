import { makeStyles } from '@material-ui/core';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Lottie from 'react-lottie';
import Link from '@material-ui/core/Link';
import linkedInLogo from '../lotties/linkedInLogo.json';
import emailData from '../lotties/emailData.json';
import githubCatColorLogoData from '../lotties/githubCatLogoColored.json';
import calendarData from '../lotties/calendarData.json';

function Footer() {
  const useStyles = makeStyles((theme) => ({
    boxBackground: {
      backgroundColor: theme.palette.primary.main,
      minHeight: '15vh',
      marginTop: '5vh',
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
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.boxBackground}
      >
        <Grid item xs={2} lg={1}>
          <Link
            href="https://www.linkedin.com/in/jtobannon/"
            target="#"
          >
            <Lottie
              options={defaultOptionsReturn(linkedInLogo)}
              height={50}
              width={50}
            />
          </Link>
        </Grid>
        <Grid item xs={2} lg={1}>
          <Link
            href="mailto:jtobannon@gmail.com"
            target="#"
          >
            <Lottie
              options={defaultOptionsReturn(emailData)}
              height={60}
              width={60}
            />
          </Link>
        </Grid>
        <Grid item xs={2} lg={1}>
          <Box component="p" style={{ marginTop: '12px' }}>
            <Link
              href="https://github.com/jobannon"
              target="#"
            >
              <Lottie
                options={defaultOptionsReturn(githubCatColorLogoData)}
                height={28}
                width={28}
              />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={2} lg={1}>
          <Box component="p" style={{ marginTop: '7px' }}>
            <Link
              href="https://calendly.com/joshcodes/"
              target="#"
            >
              <Lottie
                options={defaultOptionsReturn(calendarData)}
                height={35}
                width={35}
              />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
