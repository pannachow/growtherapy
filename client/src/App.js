import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  HashRouter as Router,
  withRouter,
  Switch,
  Route,
} from "react-router-dom";

import Auth from "./helpers/Auth";
import Api from "./helpers/Api";

import Navigation from "./components/Navigation";
import PrivateRoute from "./components/PrivateRoute";

import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Plants from "./components/Plants";
import FAQ from "./components/FAQ";
import ContactUs from "./components/ContactUs";

import Login from "./components/Login";
import ProfileView from "./components/ProfileView";
import ErrorView from "./components/ErrorView";
import SignUp from "./components/SignUp";
import Message from "./components/Message";
import WelcomeBack from "./components/WelcomeBack";
import PlantView from "./components/PlantView";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#013F2B",
    },
    secondary: {
      main: "#009572",
    },
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: Auth.getUserId(),
      loginError: "",
    };
  }

  async doLogin(email, password) {
    const body = { email, password };
    const response = await Api.request("POST", "/users/login", body);
    if (response.ok) {
      Auth.loginUser(response.data.token, response.data.userId);
      this.setState({ userId: response.data.userId, loginError: "" });
    } else {
      this.setState({ loginError: response.error });
    }
    return response.ok;
  }

  doLogout() {
    Auth.logoutUser();
    this.setState({ userId: "" });
    this.props.history.push("/");
  }

  async doSignUp(newFirstName, newLastName, newEmail, newPassword) {
    const newUser = {
      first_name: newFirstName,
      last_name: newLastName,
      email: newEmail,
      password: newPassword,
    };
    console.log(newUser);

    try {
      const response = await Api.request("POST", "/users/register", newUser);
      if (response.ok) {
        console.log("Registration succeeded");
      } else {
        console.log(
          "Registration failed",
          response.status,
          response.statusText
        );
      }
      return response.ok;
    } catch (err) {
      console.log("Registration failed:", err.message);
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Navigation
            userId={this.state.userId}
            doLogout={(e) => this.doLogout()}
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
              <Login
                login={(e, p) => this.doLogin(e, p)}
                error={this.state.loginError}
              />
            </Route>

            <Route path="/sign-up" exact>
              <SignUp register={(f, l, e, p) => this.doSignUp(f, l, e, p)} />
            </Route>

            <PrivateRoute
              path="/users/:userId/profile"
              exact
              component={ProfileView}
            />

            <Route path="/welcome" exact>
              <Message />
            </Route>

            <Route path="/welcome-back" exact>
              <WelcomeBack />
            </Route>

            <Route path="/plant-view/:id" exact>
              <PlantView />
            </Route>

            <ErrorView code="404" text="Not Found" />
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default withRouter(App);
