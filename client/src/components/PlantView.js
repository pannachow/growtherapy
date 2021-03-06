import React from "react";
import { withRouter } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Calendar from "./Calendar";
import Typography from "@material-ui/core/Typography";
import Auth from "../helpers/Auth";
import Api from "../helpers/Api";

const sunlight = {
  1: "Low to indirect sunlight.",
  2: "Bright indirect sunlight.",
  3: "Full direct sunlight."
};

const watering = {
  1: "Water thoroughly once a month.",
  2: "Water thoroughly every 2 - 3 weeks.",
  3: "Water thoroughly once a week."
};

const wateringInterval = {
  1: 28,
  2: 14,
  3: 7,
};

class PlantView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plantData: null
    };
  }

  // Fetch plantData from backend
  async componentDidMount() {
    // https://stackoverflow.com/questions/54114416/how-to-access-this-props-match-params-along-with-other-props
    const result = await Api.request("GET", `/plants/${this.props.match.params.id}`);
    this.setState({ plantData: result.data })
  }

  render() {
    const plantData = this.state.plantData;
    if (!plantData) {
      return <Container>No plant data found.</Container>
    }

    const wateringSchedule = {
      start: new Date(),
      interval: wateringInterval[plantData.growtherapy.water_needs],
      text: "Time to water this bad boy",
    };

    return (
      <Container>
        <br />
        <br />

        <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
          <img src={plantData.growtherapy.image_url} alt="plant" style={{ width: "90%" }} />
          <div style={{ display: "grid", gridTemplateRows: "50% 50%" }}>

            <div style={{ display: "grid", gridTemplateColumns: "auto auto", columnGap: "5px" }}>

              <Typography color="primary" variant="body1" style={{ fontSize: 15 }}>
                Name:
              </Typography>
              
              <Typography color="secondary" variant="body1" style={{ fontSize: 15 }}>
                {plantData.common_name}
              </Typography>

              <Typography color="primary" variant="body1" style={{ fontSize: 15 }}>
                Botanical name:
              </Typography>

              <Typography color="secondary" variant="body1" style={{ fontSize: 15 }}>
                {plantData.scientific_name}
              </Typography>

              <Typography color="primary" variant="body1" style={{ fontSize: 15 }}>
                Family:
              </Typography>

              <Typography color="secondary" variant="body1" style={{ fontSize: 15 }}>
                {plantData.family}
              </Typography>

              <Typography color="primary" variant="body1" style={{ fontSize: 15 }}>
                Year:
              </Typography>

              <Typography color="secondary" variant="body1" style={{ fontSize: 15 }}>
                {plantData.year}
              </Typography>

              <Typography color="primary" variant="body1" style={{ fontSize: 15 }}>
                Water Needs:
              </Typography>
              <Typography color="secondary" variant="body1" style={{ fontSize: 15 }}>
                {watering[plantData.growtherapy.water_needs]}
              </Typography>

              <Typography color="primary" variant="body1" style={{ fontSize: 15 }}>
                Light Needs:
              </Typography>
              <Typography color="secondary" variant="body1" style={{ fontSize: 15 }}>
                {sunlight[plantData.growtherapy.light_needs]}
              </Typography>

              <Typography color="primary" variant="body1" style={{ fontSize: 15 }}>
                Notes:
              </Typography>
              <Typography color="secondary" variant="body1"style={{ fontSize: 15 }}>
                {plantData.growtherapy.notes}
              </Typography>
            </div>
            
            {Auth.getUserId() ? (
              <Calendar schedule={wateringSchedule} />
            ) : <></>}
          </div>
        </div>

      </Container>
    )
  }
}

export default withRouter(PlantView);
