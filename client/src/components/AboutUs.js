import React from 'react';
import Typography from '@material-ui/core/Typography';

class AboutUs extends React.Component {

  render() {

    return (
      <div className="AboutUs">
        <br/>
        <br/>
        <br/>
        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
        We are homeplant lovers.
        </Typography>

        <Typography variant="h5"  align="center" color="textSecondary">
        Have fun discovering plants that suit your needs and your environment, get recommendations from us, and start watering your plant today!
        </Typography>
        <img src="background.svg" alt="background" />

      </div>
    );
  }

}

export default AboutUs;