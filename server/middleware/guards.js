const { SECRET_KEY } = require('../config');
const jwt = require("jsonwebtoken");

/**
* Guards are middleware that "protect" routes from unauthorized access.
**/


/** 
*Make sure the user is logged in
**/

function ensureUserLoggedIn(req, res, next) {
  let token = req.headers['x-access-token'];

  try {
    // Throws error on invalid/missing token
    jwt.verify(token, SECRET_KEY);
    // If we got here, valid token passed
    next();
    // res.send({ message: 'Here is your secret' });
  } catch (err) {
    res.status(401).send({ error: 'Unauthorized' });
  }
}


/** 
 * Make sure user is logged in and is accessing his/her own page.
 * (i.e. userId in token === userId in URL param)
**/

function ensureSameUser(req, res, next) {
  let token = req.headers['x-access-token'];

  try {
    // Throws error on invalid/missing token
    let payload = jwt.verify(token, SECRET_KEY);
    if (payload.userId !== Number(req.params.userId)) {
      res.status(401).send({ error: 'Unauthorized' });
    } else {
      next();
    }
  } catch (err) {
    res.status(401).send({ error: 'Unauthorized' });
  }
}

module.exports = {
  ensureUserLoggedIn,
  ensureSameUser
};
