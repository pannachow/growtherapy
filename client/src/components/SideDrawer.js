import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SideDrawer(props) {
  const classes = useStyles();

  return (
    <Drawer anchor='left' open={props.open} onClose={props.toggleDrawer(false)}>
      <div
      className={clsx(classes.list, {
        [classes.fullList]: false,
      })}
      role="presentation"
      onClick={props.toggleDrawer(false)}
      onKeyDown={props.toggleDrawer(false)}
    >
      <List>
        <ListItem button>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
          <ListItem button>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary='Mail' />
          </ListItem>
      </List>
    </div>
    </Drawer>
  );
}
