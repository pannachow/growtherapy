require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY || 'my weak (!!) secret key';
const BCRYPT_WORK_FACTOR = 12;
const TREFLE_TOKEN = '2_7ir7W0G4vcNeyPivAfaXhat4T2D7HFlD42-zsWitY';

module.exports = {
    SECRET_KEY,
    BCRYPT_WORK_FACTOR,
    TREFLE_TOKEN
};