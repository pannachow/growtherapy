import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import Navigation from './components/Navigation';
import Container from '@material-ui/core/Container';
import { PlayCircleFilledWhite } from '@material-ui/icons';

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
      </div>
    );
  }
}

export default App;
