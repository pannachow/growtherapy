import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import LocalFloristOutlinedIcon from '@material-ui/icons/LocalFloristOutlined';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded';

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
            <ListItemIcon><BusinessCenterRoundedIcon /></ListItemIcon>
            <ListItemText primary='About Us' />
          </ListItem>
          <ListItem button>
            <ListItemIcon><LocalFloristOutlinedIcon /></ListItemIcon>
            <ListItemText primary='Plants' />
          </ListItem>
          <ListItem button>
            <ListItemIcon><ContactSupportIcon /></ListItemIcon>
            <ListItemText primary='FAQs' />
          </ListItem>
          <ListItem button>
            <ListItemIcon><ContactMailIcon /></ListItemIcon>
            <ListItemText primary='Contact Us' />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}
