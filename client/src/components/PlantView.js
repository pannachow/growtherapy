import React from 'react';
import { withRouter } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Calendar from './Calendar';
import Typography from '@material-ui/core/Typography';

const sunlight = {
  1: "Low to indirect sunlight.",
  2: "Bright indirect sunlight.",
  3: "Full direct sunlight."
}

const watering = {
  1: "Water thoroughly once a month.",
  2: "Water thoroughly every 2 - 3 weeks.",
  3: "Water thoroughly once a week."
}

class PlantView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plantData: null
    };
  }

  // Fetch plantData from backend
  async componentDidMount() {
    const result = await fetch("http://localhost:5000/plants/1258091");
    // https://stackoverflow.com/questions/54114416/how-to-access-this-props-match-params-along-with-other-props
    // const result = await fetch(`http://localhost:5000/plants/${this.props.match.params.id}`);
    const data = await result.json();
    this.setState({plantData: data})
  } 

  render() {
    const plantData = this.state.plantData;
    if (!plantData) {
      return <Container>No plant data found.</Container>
    }

    const wateringSchedule = {
      start: new Date(),
      interval: plantData.growtherapy.water_needs * 7,
      text: "Time to water this bad boy",
    };

    return (
      <Container>
        <br />
        <br />

        <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
          <img src={plantData.growtherapy.image_url} alt="plant" style={{width: "90%"}}/>
          <div style={{ display: "grid", gridTemplateRows: "50% 50%" }}>

            <div style={{ display: "grid", gridTemplateColumns: "auto auto", columnGap: "5px" }}>

              <Typography color="primary" variant="body1">
                Name:
              </Typography>
              <Typography color="secondary" variant="body1">
                {plantData.common_name}
              </Typography>

              <Typography color="primary" variant="body1">
                Family:
              </Typography>
              <Typography color="secondary" variant="body1">
                {plantData.family}
              </Typography>

              <Typography color="primary" variant="body1">
                Water Needs:
              </Typography>
              <Typography color="secondary" variant="body1">
                {watering[plantData.growtherapy.water_needs]}
              </Typography>

              <Typography color="primary" variant="body1">
                Light Needs:
              </Typography>
              <Typography color="secondary" variant="body1">
                {sunlight[plantData.growtherapy.light_needs]}
              </Typography>

              <Typography color="primary" variant="body1">
                Notes:
              </Typography>
              <Typography color="secondary" variant="body1">
                {plantData.growtherapy.notes}
              </Typography>
            </div>

            <Calendar schedule={wateringSchedule} />
          </div>
        </div>

      </Container>
    )
  }
}

export default withRouter(PlantView);
