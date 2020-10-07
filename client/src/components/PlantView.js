import React from 'react';
import Container from '@material-ui/core/Container';
import Calendar from './Calendar';

export default class PlantView extends React.Component {
  render() {
    return (
      <Container>
        <br />
        <Calendar />
      </Container>
    )
  }
}
