import React from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from "react-router-dom";
import Typography from '@material-ui/core/Typography';

const background = {
    position: 'absolute',
    top: 70,
    width: '100%',
    zIndex: -1,
    opacity: 1,
  };

function WelcomeBack(props) {
        return(
            <div>
            <img src="/plant-therapy.jpg" alt="background" style={background} />
                <div style={{ textAlign: "center" }}>
                <br />
                <Typography variant="h7" align="center" style={{ color: "green", fontWeight: "bold" }} gutterBottom>
                Hello, stranger. We missed you!
                </Typography>
                <br />
                <br />
                <Link underline="none" component={RouterLink} to="/log-in">
                    <Button variant="contained" color="primary" >LOG IN</Button>
                </Link>
                <br />
                <br />

                <Button size="small" color="primary">
                    I forgot my password
                </Button>
                </div>
            </div>
        )
    }
    

export default WelcomeBack;