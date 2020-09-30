import React from 'react';
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import Navigation from './components/Navigation';
import Container from '@material-ui/core/Container';
import { PlayCircleFilledWhite } from '@material-ui/icons';
import LoginForm from './components/LoginForm.js';
import SignUpIndividual from './components/SignUpIndividual.js';
import SignUpPlantShop from './components/SignUpPlantShop.js';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#b9f6ca',
    },
    secondary: {
      main: '#006400',
    },
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <Navigation />
          <br/>
          <Container >
            <img src="plants.svg" alt="indoor-plants" />
          </Container>
        </ThemeProvider>
        <BrowserRouter>
          <Routes />  
        </BrowserRouter>
      </div>
    );
  }
}

class Routes extends React.Component {
  render() {
      return (

          <Switch>

              <Route path="/" exact>

              </Route>

              <Route path="/about">

              </Route>

              <Route path="/login">
                  <LoginForm />
              </Route>

              <Route path="/signUp">
                  <SignUpIndividual />
              </Route>
          </Switch>

      )
  }
}

export default App;
