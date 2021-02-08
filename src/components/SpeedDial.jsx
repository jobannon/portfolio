import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import Lottie from 'react-lottie';
import Link from '@material-ui/core/Link';
import Icon from '@mdi/react';
import {
  mdiLinkedin, mdiAt, mdiGoogle,
  mdiTwitter,
} from '@mdi/js';

import connectCoffee from '../lotties/connectCoffeeData.json';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 100,
    transform: 'translateZ(0px)',
    flexGrow: 1,
    marginRight: '5vw',
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const withLink = (href, children) => <Link href={href} target="#" style={{ display: 'flex' }}>{children}</Link>;

const actions = [
  { icon: withLink('https://twitter.com/jtobannon', <Icon path={mdiTwitter} title="Twitter" size={1} />), name: 'Tweet!' },
  { icon: withLink('https://calendly.com/joshcodes/', <Icon path={mdiGoogle} title="Google Meet" size={1} />), name: 'Meet/Calendly' },
  { icon: withLink('mailto:jtobannon@gmail.com', <Icon path={mdiAt} title="Email" size={1} />), name: 'Email' },
  { icon: withLink('https://www.linkedin.com/in/jtobannon', <Icon path={mdiLinkedin} title="Discord" size={1} />), name: 'LinkedIn' },
];

export default function SpeedDialTooltipOpen() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const defaultOptionsReturn = (nameOf) => ({
    loop: true,
    autoplay: true,
    animationData: nameOf,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  });

  const SpeedDialIconLottie = (
    <Lottie
      options={defaultOptionsReturn(connectCoffee)}
      height={100}
      width={100}
    />
  );

  return (
    <div className={classes.root}>
      <SpeedDial
        ariaLabel="SpeedDial Coffee"
        className={classes.speedDial}
        hidden={hidden}
        icon={SpeedDialIconLottie}
        onClose={handleClose}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
