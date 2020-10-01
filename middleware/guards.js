const { SECRET_KEY } = require('../config');
const jwt = require("jsonwebtoken");

function ensureUserLoggedIn(req, res, next) {
    let token = req.headers['x-access-token'];
    try {
        let payload = jwt.verify(token, SECRET_KEY);
        next();
        // res.send({ message: 'Here is your secret' });
    } catch(err) {
        res.status(401).send({ error: 'Unauthorized' });
    } 
}

module.exports = {
    ensureUserLoggedIn
}