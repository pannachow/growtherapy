import React from 'react';
import emailjs from 'emailjs-com';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as RouterLink } from "react-router-dom";

function sendEmail(e) {
    e.preventDefault();

emailjs.sendForm("service_xj11pov", "template_9y9kauc", e.target, "user_J3m42A7J6CyNZsMpU2kLo")
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
  e.target.reset();
}

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          GROWTHERAPY
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  export default function SignUp() {
      
    const classes = useStyles();
  
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Contact us
          </Typography>
          <form onSubmit={(e) => sendEmail(e)} className={classes.form} noValidate>
            
            <Grid container spacing={2}>

            <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="subject"
                  label="Subject"
                  type="subject"
                  id="subject"
                  autoComplete="subject"
                />
              </Grid>

            <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="name"
                  label="Name"
                  type="name"
                  id="name"
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
                
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        rowsMax={20}
                        name="message"
                        label="Message"
                        type="message"
                        id="message"
                        auto-complete="message"  
                    />
                </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
            <Grid container justify="flex-end">
              <Grid item>

                <Link align="center" color="black" component={RouterLink} to="/">
                    <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    >Cancel</Button>
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }