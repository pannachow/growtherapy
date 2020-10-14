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
<<<<<<< HEAD
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

=======
import { getPlants } from '../helpers/TrefleApi.Client';
>>>>>>> 944f8d01... no chnages

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
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
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
  useEffect(() => {
    async function fetchPlants() {
      const result = await fetch("http://localhost:5000/plants");
      const data = await result.json();
      console.log(data);
      setPlants(data);
    }
    fetchPlants();
  }, []);


  return (
    <React.Fragment>
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
            <div style={{ textAlign: "center" }}>
              <SearchIcon />
              <InputBase
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
<<<<<<< HEAD
            {plants.map((plant) => (
              <Grid item key={plant.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
=======
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card} 
                // key={(p) => this.getPlants(p.id)}
                >
>>>>>>> 944f8d01... no chnages
                  <CardMedia
                    className={classes.cardMedia}
                    image= //{(p) => this.getPlants(p.image_url)} 
                    "https://source.unsplash.com/random"
                    //title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
<<<<<<< HEAD

                    {/* Fetch the back-end plant name here */}
                    <Typography color="secondary" gutterBottom variant="h5" component="h2">
                      {plant.common_name}
=======
                    <Typography gutterBottom variant="h5" component="h2">
                      {/* {(p) => this.getPlants(p.common_name)} */}
                      Heading
                    </Typography>
                    <Typography>
                      {/* {(p) => this.getPlants(p.family)} */}
                      This is a media card. You can use this section to describe the content.
>>>>>>> 944f8d01... no chnages
                    </Typography>

                    {/* Fetch the back-end plant content here */}
                    <Typography color="textSecondary"> Scientific Name: <span style={{ color: "#009472" }}>{plant.scientific_name}</span> </Typography>
                    <Typography color="textSecondary"> Family: <span style={{ color: "#009472" }}>{plant.family} </span> </Typography>
                    <Typography color="textSecondary"> Year: <span style={{ color: "#009472" }}>{plant.year} </span> </Typography>

                  </CardContent>
                  <CardActions>

                    <Link component={RouterLink} to="/plant-view">
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
    </React.Fragment>
  );
}

