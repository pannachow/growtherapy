var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require('../config');
const db = require("../model/helper");

/*
 login route
    get email, password from body
    see if user exists and password is correct
    if not
        return login failed
    create token containing payload (i.e. userID)
    return token
*/

router.post('/login', async function(req, res, next) {
    let { email, password } = req.body;
    let results = await db(
        `SELECT * FROM individual_user WHERE email = '${email}'`
    );
    if (results.data.length === 0) {
      res.status(400).send({ error: 'Login failed' });
    } else {
      let row = results.data[0];
      let passwordsMatch = await bcrypt.compare(password, row.password);
      if (passwordsMatch) {
        let payload = { individual_userId: row.id };
        let token = jwt.sign(payload, SECRET_KEY);
        res.send({
            message: 'Loggin successful',
            token: token,
            individual_userId: row.id
        });
      } else {
        res.status(400).send({ error: 'Login failed' });
      }
    }
});

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let sql = 'SELECT email FROM individual_user ORDER BY email';
  try {
    let results = await db(sql);
    res.send(results.data);
  } catch (err) {
    next(err);
  }
});

/**
 * Get the user's profile page
 **/

module.exports = router;
