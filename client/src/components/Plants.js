import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Auth from "../helpers/Auth";
import Api from "../helpers/Api";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundImage: "url(plants_header.jpg)",
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(7),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "100%",
    backgroundSize: "cover",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    marginTop: "auto",
    display: "relative",
    height: "146px",
    width: "100%",
  },
  footerBackground: {
    position: "absolute",
    backgroundImage: "url(plants_footer.jpg)",
    backgroundSize: "cover",
    zIndex: 1,
    opacity: 0.9,
    height: "146px",
    width: "100%",
  },
  footerContent: {
    padding: theme.spacing(6),
    position: "absolute",
    width: "100%",
    zIndex: 2,
    textShadow: "1px 1px #013F2B",
  },
}));

export default function Plants() {
  const classes = useStyles();
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");
  // Fetch plants from backend
  // https://reactjs.org/docs/hooks-intro.html
  // https://www.robinwieruch.de/react-hooks-fetch-data
  useEffect(() => {
    async function fetchPlants() {
      const result = await Api.request("GET", "/plants/?gt=1");
      setPlants(result.data);
    }
    fetchPlants();
  }, []);

  function filterSearch(plant) {
    // Either return true if you want the plant to be shown or otherwise false.
    if (plant.common_name.toUpperCase().includes(search.toUpperCase())) {
      return true;
    }
    return false;
  }

  function showLightIcon(light_needs) {
    if (light_needs === 3) {
      return <img src="./light_3.png" alt="Full direct sunlight." width="100px" />;
    }
    if (light_needs === 2) {
      return <img src="./light_2.png" alt="Bright indirect sunlight." width="100px" />;
    }
    if (light_needs === 1) {
      return <img src="./light_1.png" alt="Low to indirect sunlight." width="100px" />;
    }
    return "";
  }

  function showWaterIcon(water_needs) {
    if (water_needs === 3) {
      return <img src="./water_3.png" alt="Water thoroughly once a week." width="65px" />;
    }
    if (water_needs === 2) {
      return <img src="./water_2.png" alt="Water thoroughly every 2 - 3 weeks." width="65px" />;
    }
    if (water_needs === 1) {
      return <img src="./water_1.png" alt="Water thoroughly once a month." width="65px" />;
    }
    return "";
  }

  async function addPlant(userId, plantId) {
    const body = {
      user_id: userId,
      plant_id: plantId,
    };
    await Api.request("POST", `/users/${userId}/favorites`, body);
  }

  return (
    <>
      <main>
        <div className={classes.heroContent}>
          <Container>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              style={{ color: "white" }}
              gutterBottom
            >
              To love the beautiful homeplants
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Find plants and learn to care. Plants for beginners and more!
            </Typography>

            {/* need to search for the plant */}
            <div style={{ textAlign: "center" }}>
              <SearchIcon />
              <InputBase
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {plants.filter(filterSearch).map((plant) => (
              <Grid item key={plant.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={plant.growtherapy.image_url}
                    title={plant.common_name}
                  />
                  <CardContent className={classes.cardContent}>
                    {/* Fetch the back-end plant name here */}
                    <Typography color="secondary" gutterBottom variant="h6" component="h2">
                      {plant.common_name}
                    </Typography>
                    {showLightIcon(plant.growtherapy.light_needs)}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {showWaterIcon(plant.growtherapy.water_needs)}
                  </CardContent>

                  <CardActions>
                    <Link underline="none" component={RouterLink} to={`/plant-view/${plant.id}`}>
                      <Button size="small" color="primary">
                        View
                      </Button>
                    </Link>

                    {Auth.getUserId() ? (
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => addPlant(Auth.getUserId(), plant.growtherapy.id)}
                      >
                        Add
                      </Button>
                    ) : (
                      <></>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <footer className={classes.footer}>
        <div className={classes.footerBackground}></div>
        <Box className={classes.footerContent} color="white">
          <Typography variant="h6" align="center" gutterBottom>
            Don't Forget to Water the Plants!
          </Typography>
          <Typography variant="body2" align="center">
            Copyright © GROWTHERAPY {new Date().getFullYear()}.
          </Typography>
        </Box>
      </footer>
    </>
  );
}
