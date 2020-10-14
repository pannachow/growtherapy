import React from 'react';
import { withRouter } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from './SideDrawer';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navigation(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    open: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, open: open });
  };

  function logout() {
    props.doLogout();
    props.history.push('/');
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={toggleDrawer(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Link underline="none" component={RouterLink} to="/" className={classes.title}>
            <Typography variant="h5" style={{ color: "white", fontWeight: "bold" }} >
              GROWTHERAPY
            </Typography>
          </Link>

          {props.userId ? (
            <>
              <Link underline="none" component={RouterLink} to="/secret">
                <Button style={{ color: "#97CD80", fontWeight: "bold" }}>My Plants</Button>
              </Link>

              <Link underline="none" component={RouterLink} to={`/users/${props.userId}/profile`}>
              <Button style={{ color: "#97CD80", fontWeight: "bold" }}>Profile</Button>
              </Link>

              {/* <Avatar src="/broken-image.jpg" /> */}
              {/* {props.userId} */}

              <Link underline="none" component={RouterLink} to="/">
                <Button style={{ color: "#97CD80", fontWeight: "bold" }} onClick={logout}>LOG OUT</Button>
              </Link>
            </>

          ) : (
              <>
                <Link underline="none" component={RouterLink} to="/log-in">
                  <Button style={{ color: "#97CD80", fontWeight: "bold" }} >LOG IN</Button>
                </Link>

                <Link underline="none" component={RouterLink} to="/sign-up">
                  <Button style={{ color: "#009472", fontWeight: "bold" }} >SIGN UP</Button>
                </Link>
              </>
            )}

        </Toolbar>
      </AppBar>
      <SideDrawer open={state.open} toggleDrawer={toggleDrawer} />
    </div>
  );
}

export default withRouter(Navigation);
