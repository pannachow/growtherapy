import React from 'react';
import { withRouter } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
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

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(${theme.spacing(2)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
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

          <SearchIcon />
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
          {props.userId ? (
            <>
              <Link underline="none" component={RouterLink} to="/secret">Secret</Link>
              <Link underline="none" component={RouterLink} to={`/users/${props.userId}/profile`}>Profile</Link>
              <Avatar src="/broken-image.jpg" />
              {props.userId}
              <Link underline="none" component={RouterLink} to="/">
                <Button style={{ color: "#97CD80", fontWeight: "bold" }} onClick={logout}>LOGOUT</Button>
              </Link>
            </>
          ) : (
              <>
                <Link underline="none" component={RouterLink} to="/log-in">
                  <Button style={{ color: "#97CD80", fontWeight: "bold" }} >LOGIN</Button>
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
