import React from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const background = {
  position: "absolute",
  top: 70,
  width: "100%",
  zIndex: -1,
  opacity: 1,
};

function Message() {
  return (
    <div>
      <img src="/plant-therapy.jpg" alt="background" style={background} />
      <div style={{ textAlign: "center" }}>
        <br />
        <Typography
          variant="h6"
          align="center"
          style={{ color: "green", fontWeight: "bold" }}
          gutterBottom
        >
          Registration complete!
        </Typography>
        <br />
        <br />
        <Typography
          variant="h5"
          align="center"
          style={{ color: "#97CD80", fontWeight: "bold" }}
          gutterBottom
        >
          "Let"s root for each other and watch each other grow."
        </Typography>

        <br />
        <Link underline="none" component={RouterLink} to="/log-in">
          <Button variant="contained" color="primary">
            LOG IN
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Message;
