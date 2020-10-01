const { SECRET_KEY } = require('../config');
const jwt = require("jsonwebtoken");


// Make sure the user is logged in
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


// Make sure user is logged in and is accessing his/her own page (i.e. userID in token === userID in URL param)
// function ensureSameUser(req, res, next) {

// }
module.exports = {
    ensureUserLoggedIn
}