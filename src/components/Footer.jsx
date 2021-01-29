import { withStyles, makeStyles } from '@material-ui/core';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Lottie from 'react-lottie';
import Link from '@material-ui/core/Link';
import { mdiCopyright } from '@mdi/js';
import Icon from '@mdi/react';
import linkedInLogo from '../lotties/linkedInLogo.json';
import emailData from '../lotties/emailData.json';
import githubCatColorLogoData from '../lotties/githubCatLogoColored.json';
import calendarData from '../lotties/calendarData.json';

const NormalizedGridContainer = withStyles(theme => ({
  root: {
    width: '100%',
    margin: '0px',
    padding: `${(theme.spacing/2) * 8}px`
  }
}))(Grid);

function Footer() {
  const useStyles = makeStyles((theme) => ({
    boxBackground: {
      backgroundColor: theme.palette.primary.main,
      minHeight: '15vh',
      marginTop: '5vh',
      // position: 'absolute',
      // bottom: 0,
      // left: 0,
      // right: 0,
    },
    footerText: {
      color: 'white',
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
      <NormalizedGridContainer
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
        className={classes.boxBackground}
      >
        <Grid item>
          <Link
            href="https://www.linkedin.com/in/jtobannon/"
            target="#"
          >
            <Lottie
              options={defaultOptionsReturn(linkedInLogo)}
              height={75}
              width={75}
            />
          </Link>
        </Grid>
        <Grid item>
          <Link
            href="mailto:jtobannon@gmail.com"
            target="#"
          >
            <Lottie
              options={defaultOptionsReturn(emailData)}
              height={98}
              width={98}
            />
          </Link>
        </Grid>
        <Grid item>
          <Box component="p" style={{ marginTop: '14px', marginRight: '15px', marginLeft: '5px' }}>
            <Link
              href="https://github.com/jobannon"
              target="#"
            >
              <Lottie
                options={defaultOptionsReturn(githubCatColorLogoData)}
                height={35}
                width={35}
              />
            </Link>
          </Box>
        </Grid>
        <Grid item>
          <Box component="p" style={{ marginTop: '14px', marginLeft: '10px' }}>
            <Link
              href="https://calendly.com/joshcodes/"
              target="#"
            >
              <Lottie
                options={defaultOptionsReturn(calendarData)}
                height={56}
                width={56}
              />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box component="div" color='white' style={{textAlign:'center'}}>
            ...looking for work that touches, moves, and inspires...
          </Box>
        </Grid> 
        <Grid item xs={12}>
          <Box component="div" color='white' style={{textAlign:'center'}}>
            <Link color='white'>credits</Link>
          </Box>
        </Grid> 
        <Grid item xs={12}>
          <Box component="div">
            <Icon path={mdiCopyright} title="Copyright" color="white" size={1} style={{ verticalAlign: '-6px' }} />
            <Box component="span" className={classes.footerText}>
              2020 Joshua O'Bannon
            </Box>
          </Box>
        </Grid>
      </NormalizedGridContainer>
    </>
  );
}

export default Footer;
