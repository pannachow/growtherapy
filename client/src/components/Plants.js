import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


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
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    backgroundSize: 'contain',
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundImage: "url(plants_footer.jpg)",
    padding: theme.spacing(6),
  },
  search: {
    position: 'center',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(${theme.spacing(1)}px)`,
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

export default function Plants() {
  const classes = useStyles();
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState('');
  // Fetch plants from backend
  // https://reactjs.org/docs/hooks-intro.html
  // https://www.robinwieruch.de/react-hooks-fetch-data
  useEffect(() => {
    async function fetchPlants() {
      const result = await fetch("http://localhost:5000/plants/?gt=1");
      const data = await result.json();
      setPlants(data);
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

  return (
    <>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>

          <Container>
            <Typography component="h1" variant="h2" align="center" style={{ color: "white" }} gutterBottom>
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
                inputProps={{ 'aria-label': 'search' }}
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
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>

                    {/* Fetch the back-end plant name here */}
                    <Typography color="secondary" gutterBottom variant="h5" component="h2">
                      {plant.common_name}
                    </Typography>

                    {/* Fetch the back-end plant content here */}
                    <Typography color="textSecondary"> Scientific Name: <span style={{ color: "#009472" }}>{plant.scientific_name}</span> </Typography>
                    <Typography color="textSecondary"> Family: <span style={{ color: "#009472" }}>{plant.family} </span> </Typography>
                    <Typography color="textSecondary"> Year: <span style={{ color: "#009472" }}>{plant.year} </span> </Typography>

                  </CardContent>
                  <CardActions>
                    <Link component={RouterLink} to={`/plant-view/${plant.id}`}>
                      <Button size="small" color="primary">
                        View
                      </Button>
                    </Link>

                    <Button size="small" color="primary">
                      Add
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <footer className={classes.footer}>
        <Typography style={{ color: "white" }} variant="h6" align="center" gutterBottom>
          Don't Forget to Water the Plants!
        </Typography>
        <Copyright />
      </footer>
    </>
  );
}

