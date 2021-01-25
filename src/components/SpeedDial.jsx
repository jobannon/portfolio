import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Lottie from 'react-lottie';
import Link from '@material-ui/core/Link';
import Icon from '@mdi/react';
import {
  mdiLinkedin, mdiAt, mdiGoogle, mdiDiscord,
  mdiTwitter,
} from '@mdi/js';

import connectCoffee from '../lotties/connectCoffeeData.json';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 100,
    transform: 'translateZ(0px)',
    flexGrow: 1,
    marginRight: '5vw'
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const withLink = (href, children) => <Link href={href} target="#" style={{ display: 'flex' }}>{children}</Link>;

const actions = [
  // { icon: withLink("discordlink", <Icon path={mdiDiscord} title="Discord" size={1} />), name: 'Discord'},
  { icon: withLink('https://twitter.com/jtobannon', <Icon path={mdiTwitter} title="Twitter" size={1} />), name: 'Tweet!' },
  { icon: withLink('https://calendly.com/joshcodes/', <Icon path={mdiGoogle} title="Google Meet" size={1} />), name: 'Meet/Calendly' },
  { icon: withLink('mailto:jtobannon@gmail.com', <Icon path={mdiAt} title="Email" size={1} />), name: 'Email' },
  { icon: withLink('https://www.linkedin.com/in/jtobannon', <Icon path={mdiLinkedin} title="Discord" size={1} />), name: 'LinkedIn' },
];

export default function SpeedDialTooltipOpen() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleVisibility = () => {
    setHidden((prevHidden) => !prevHidden);
  };

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
      {/* <Backdrop open={open} /> */}
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
