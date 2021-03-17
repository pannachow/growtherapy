import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundImage: "url(home_header.jpg)",
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
        <Container >
          <Typography style={{color: "white", fontWeight: "bold"}} variant="h3" align="center" gutterBottom>
            THE&nbsp;&nbsp;PLANTS&nbsp;&nbsp;LOVER
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
              
            </Grid>
          </div>
        </Container>
      </div>
      <img src="home.svg" alt="plants" />
    </div>
  );
}
