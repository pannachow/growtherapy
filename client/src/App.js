import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from './components/Navigation';
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Plants from "./components/Plants";
import FAQ from "./components/FAQ";
import ContactUs from "./components/ContactUs";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import './App.css';

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
      <ThemeProvider theme={theme}>
        <Router>
          <Navigation />
          <br />
          <Container>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>

              <Route path="/about-us" exact>
                <AboutUs />
              </Route>

              <Route path="/plants" exact>
                <Plants />
              </Route>

              <Route path="/FAQ" exact>
                <FAQ />
              </Route>

              <Route path="/contact-us" exact>
                <ContactUs />
              </Route>

              <Route path="/log-in" exact>
                <LogIn />
              </Route>

              <Route path="/sign-up" exact>
                <SignUp />
              </Route>

            </Switch>
          </Container>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
