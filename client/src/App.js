import React from 'react';
import { withRouter } from 'react-router';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Auth from './helpers/Auth';
import Api from './helpers/Api';

import Navigation from './components/Navigation';
import PrivateRoute from './components/PrivateRoute';


import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Plants from "./components/Plants";
import FAQ from "./components/FAQ";
import ContactUs from "./components/ContactUs";

import LoginView from "./components/LoginView";
import SecretView from './components/SecretView';
import ProfileView from './components/ProfileView';
import ErrorView from './components/ErrorView';
import SignUp from "./components/SignUp";
import PlantView from "./components/PlantView";
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#008b8b',
    },
    secondary: {
      main: '#fcfcfc',
    },
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      loginError: ''
    }
  }

  async doLogin(email, password) {
    let body = { email, password };
    let response = Api.request('POST', '/users/login', body);
    if (response.ok) {
      Auth.loginUser(response.data.token, response.data.userId);
      this.setState({ userId: response.data.userId, loginError: '' });
      this.props.history.push('/');
    } else {
      this.setState({ loginError: response.error });
    }
  }

  doLogout() {
    Auth.logoutUser();
    this.setState({ userId: '' });
    this.props.history.push('/');
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Navigation userId={this.state.userId} doLogout={(e) => this.doLogout()} />
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
                <LoginView 
                    login={(e, p) => this.doLogin(e, p)} 
                    error={this.state.loginError} />
              </Route>

            <Route path="/sign-up" exact>
              <SignUp />
            </Route>

            <PrivateRoute
                path="/users/:userId/profile"
                exact
                component={ProfileView}
            />
            
            <PrivateRoute path="/secret" exact>
                <SecretView />
            </PrivateRoute>

            <Route path="/plant-view" exact>
              <PlantView />
            </Route>

              <ErrorView code="404" text="Not Found" />

            </Switch>
          {/* </Container> */}
        </Router>
      </ThemeProvider>
    );
  }
}

export default withRouter(App);
