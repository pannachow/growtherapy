import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import Navigation from './components/Navigation';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#b9f6ca',
    },
    secondary: {
      main: '#43a047',
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
        <img src="indoor-plants.jpg" alt="indoor-plants" />
      </ThemeProvider>
      </div>
    );
  }
}

export default App;
