import React from 'react';
import Container from '@material-ui/core/Container';
import Calendar from './Calendar';
import Typography from '@material-ui/core/Typography';

const plantData = {
  name: "Lemon Butter Fern",
  sun: "Your fern prefers bright indirect light. Find a south-facing window or the brightest alternative.",
  water: "Regular weekly watering is encouraged, and avoid drought conditions. Keep the soil moist but not soggy.",
  tips: "Bring your fern off the floor or table by using a plant stand or a plant hanger, or by placing it on a tall surface, to encourage the sprawling, trailing foliage to flourish.",
  waterInterval: 1,
};

export default class PlantView extends React.Component {
  render() {
    return (
      <Container>
        <br />
        <br />

        <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
          <img src="plant-view.svg" alt="plant" />
          <div style={{ display: "grid", gridTemplateRows: "50% 50%" }}>

            <div style={{ display: "grid", gridTemplateColumns: "auto auto", columnGap: "5px" }}>

              <Typography color="primary" variant="p">
                Name:
              </Typography>
              <Typography color="secondary" variant="p">
                {plantData.name}
              </Typography>

              <Typography color="primary" variant="p">
                Sun: 
              </Typography>
              <Typography color="secondary" variant="p">
                {plantData.sun}
              </Typography>

              <Typography color="primary" variant="p">
                Water: 
              </Typography>
              <Typography color="secondary" variant="p">
                {plantData.water}
              </Typography>

              <Typography color="primary" variant="p">
                Tips: 
              </Typography>
              <Typography color="secondary" variant="p">
                {plantData.tips}
              </Typography>
            </div>

            <Calendar />
          </div>
        </div>

      </Container>
    )
  }
}
