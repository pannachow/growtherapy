import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class AboutUs extends React.Component {
  render() {
    const background = {
      position: 'absolute',
      top: 0,
      width: '100%',
      zIndex: -1,
    };
    return (
      <>
        <br />
        <br />
        <Container>
          <br />
          <Typography variant="h3" align="center" style={{ color: "#97CD80", fontWeight: "bold" }} gutterBottom>
            We are house plant lovers
        </Typography>
          <br />
          <Typography variant="h6" align="left" style={{ color: "#009472", fontWeight: "bold" }} >
            Plant therapy – it might sound like a new fad, but in fact, the practice is ancient. Engaging with plants can have a relaxing, peaceful effect on many people. Have fun discovering plants that suit your needs and your environment, get recommendations from us, and start watering your plant today!
        </Typography>
          <br />
        </Container>
        <img src="about-us.jpg" alt="background" style={background} />

      </>
    );
  }
}

export default AboutUs;