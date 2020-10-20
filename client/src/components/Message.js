import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from "react-router-dom";
import Typography from '@material-ui/core/Typography';

function Copyright() {
  return (
    <Typography variant="body2" style={{ color: "white" }} align="center">
      {'Copyright © '}
      <Link color="inherit" >
        GROWTHERAPY
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const background = {
    position: 'absolute',
    top: 50,
    width: '100%',
    zIndex: -1,
    opacity: 1,
  };

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    footer: {
        backgroundImage: "url(plants_footer.jpg)",
        padding: theme.spacing(6),
    }
  }));

function Message(props) {
    const classes = useStyles();
        return(
            <div>
            <img src="/plant-therapy.jpg" alt="background" style={background} />
                <div style={{ textAlign: "center" }}>
                <br />
                <Typography variant="h5" align="center" style={{ color: "#97CD80", fontWeight: "bold" }} gutterBottom>
                Registration complete! Welcome to Growtherapy
                </Typography>
                <br />
                <Link underline="none" component={RouterLink} to="/log-in">
                    <Button variant="contained" color="primary" >LOG IN</Button>
                </Link>
                </div>
            </div>
        )
    }
    


export default Message;