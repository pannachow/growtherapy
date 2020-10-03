var express = require('express');
const { ensureUserLoggedIn } = require('../middleware/guards');
const router = express.Router();

const bodyParser = require("body-parser");
const db = require("../model/helper");

/* GET home page. */
router.get('/growtherapy', function(req, res, next) {
  res.send({ message: 'Welcome to Growtherapy' });
});




/* 
* Authorization Server - Return secret for any logged in user
*/
router.get('/secret', ensureUserLoggedIn, function(req, res, next) {
    res.send({ message: 'Here is your secret' });
});

router.get('/plants', function(req, res, next) {
  db('SELECT * FROM plant_data;')
  .then(results => {
    res.send(results.data);
  })
  .catch(err => 
    res.status(500).send(err));
});

module.exports = router;
