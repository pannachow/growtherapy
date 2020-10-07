import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
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
import PlantView from "./components/PlantView";
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#013F2B',
    },
    secondary: {
      main: '#009572',
    },
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  login(username, password) {
    this.setState({
      user: {
        username: username
      }
    })
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Navigation
            user={this.state.user}
           />
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
              <LogIn login={this.login.bind(this)}/>
            </Route>

            <Route path="/sign-up" exact>
              <SignUp />
            </Route>

            <Route path="/plant-view" exact>
              <PlantView />
            </Route>

          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
