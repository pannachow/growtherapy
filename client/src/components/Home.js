import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  hero: {
    display: "relative",
    width: "100%",
    height: "224px",
  },
  heroBackground: {
    position: "absolute",
    backgroundImage: "url(home_header.jpg)",
    width: "100%",
    height: "224px",
    zIndex: 1,
    opacity: 0.8,
  },
  heroContent: {
    position: "absolute",
    width: "100%",
    padding: theme.spacing(8, 0, 6),
    zIndex: 2,
    textShadow: "2px 2px #013F2B",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
    textAlign: "center",
  },
  image: {
    marginTop: "auto",
    paddingTop: "2px",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.hero}>
        <div className={classes.heroBackground}></div>

        <div className={classes.heroContent}>
          <Typography style={{ color: "white" }} variant="h3" align="center" gutterBottom>
            THE&nbsp;&nbsp;PLANTS&nbsp;&nbsp;LOVER
          </Typography>

          <div className={classes.heroButtons}>
            <Link underline="none" component={RouterLink} to="/plants">
              <Button variant="contained" color="primary">
                ALL OUR PLANTS
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Container className={classes.image}>
        <img src="home.svg" alt="plants" />
      </Container>
    </>
  );
}
