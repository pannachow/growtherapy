import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class AboutUs extends React.Component {
  render() {
    return (
      <Container>
        <br />
        <br />
        <br />
        <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
          We are house plant lovers.
        </Typography>
        <br />
        <Typography variant="h6" align="left" color="textSecondary">
          Plant therapy – it might sound like a new fad, but in fact, the practice is ancient. Engaging with plants can have a relaxing, peaceful effect on many people. Have fun discovering plants that suit your needs and your environment, get recommendations from us, and start watering your plant today!
        </Typography>
        <br />
        <Typography variant="h7" align="left" color="textSecondary">
          WOW nice
        </Typography>
        <img src="background.svg" alt="background" />
      </Container>
    );
  }
}

export default AboutUs;