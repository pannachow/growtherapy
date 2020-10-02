import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
            THE PLANTS LOVER
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            CHECK OUT OUR PLANTS
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Link underline="none" component={RouterLink} to="/plants">
                  <Button variant="contained" color="primary">
                    ALL OUR PLANTS
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Link underline="none" color="secondary" component={RouterLink} to="/about-us">
                  <Button variant="outlined" color="secondary">
                    ABOUT US
                </Button>
                </Link>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <img src="plants.svg" alt="plants" />
    </div>
  );
}
