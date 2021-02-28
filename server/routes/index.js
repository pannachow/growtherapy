const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const { ensureUserLoggedIn } = require("../middleware/guards");

router.use(bodyParser.json());

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send({ message: "Welcome to Growtherapy" });
});

/*
* Authorization Server - Return secret for any logged in user
*/
router.get("/secret", ensureUserLoggedIn, function(req, res, next) {
  res.send({ message: "Here is your secret" });
});

module.exports = router;
