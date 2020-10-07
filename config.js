require("dotenv").config();


const SECRET_KEY = process.env.SECRET_KEY || 'my weak (!!) secret key';
const BCRYPT_WORK_FACTOR = 12;

module.exports = {
  SECRET_KEY,
  BCRYPT_WORK_FACTOR
};