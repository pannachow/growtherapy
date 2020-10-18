import React from 'react';
import Api from '../helpers/Api';
import ErrorView from './ErrorView';
import FaceIcon from '@material-ui/icons/Face';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

class ProfileView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      statusCode: 0,
      statusText: ''
    };
  }

  async componentDidMount() {
    let userId = this.props.match.params.userId;
    let response = await Api.request('GET', `/users/${userId}/profile`);
    if (response.ok) {
      this.setState({
        user: response.data,
        statusCode: 200,
        statusText: ''
      });
    } else {
      this.setState({
        user: null,
        statusCode: response.status,
        statusText: response.statusText
      });
    }
  }

  render() {
    if (this.state.statusCode !== 200) {
      return <ErrorView code={this.state.statusCode} text={this.state.statusText} />
    }

    if (!this.state.user) {
      return <h2>Loading...</h2>;
    }

    let u = this.state.user;

    const background = {
      position: 'absolute',
      top: 70,
      width: '100%',
      zIndex: -1,
      opacity: 0.5,
    };

    const classes = {
      root: {
        flexGrow: 1,
      },
      paper: {
        padding: '100px',
        textAlign: 'center',
        color: '#689875',
      },
    };

    return (
      <div className="ProfileView">

        <img src="/background-1.jpg" alt="background" style={background} />

        <div style={{ textAlign: "center" }}>
          <FaceIcon style={{ fontSize: 80, color: "#689875", marginTop: 50 }} />
          <h1 style={{ color: "#689875", fontWeight: "bold" }} >Welcome back, {u.first_name}!</h1>
          <h3 style={{ color: "#689875", fontWeight: "bold", marginBottom: 50  }} >Email: {u.email}</h3>
        </div>

        <Container>
        <div style={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper style={classes.paper}>Plant 1</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper style={classes.paper}>Plant 2</Paper>
            </Grid>
          </Grid>
        </div>
        </Container>

      </div>
    );
  }

}

export default ProfileView;