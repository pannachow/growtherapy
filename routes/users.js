var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require('../config');
const { ensureSameUser } = require('../middleware/guards');
const db = require("../model/helper");


/**
 * Helper functions 
 */

async function userExists(id) {
    let exists = false;
    try {
        let response = await db(`SELECT * FROM users WHERE id = ${id}`);
        if (response.data.length > 0) {
            exists = true;
        }
    } catch (err) {}
    return exists;
}

async function emailExists(email) {
    let exists = false;
    try {
        let response = await db(`SELECT * FROM users WHERE email = '${email}'`);
        if (response.data.length > 0) {
            exists = true;
        }
    } catch (err) {}
    return exists;
}

async function getUsersPlants() {
    let response = null;
    try {
        response = await db("SELECT * FROM users_plants");
    } catch (err) {}
        return response;
}

// Prevent users from adding the same plant to theirprofile.

async function plantExists(plant_id) {
    let exists = false;
    try {
        let response = await db(`SELECT * FROM users_plants WHERE plant_id = ${plant_id}`);
        if (response.data === 1) {
            exists = true;
        }
    } catch (err) {}
    return exists;
}

/**
* Get all users
**/

router.get('/', async function(req, res, next) {
    let sql = 'SELECT * FROM users ORDER BY id';
    try {
        let results = await db(sql);
        res.send(results.data);
    } catch (err) {
        next(err);
    }
  });

/**
* Register a user
**/

router.post('/register', async (req, res, next) => {
  let { first_name, last_name, email, password } = req.body;
//   console.log(password, BCRYPT_WORK_FACTOR);
  let hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

  if ((await emailExists(email)) === true) {
      res.status(400).send({ message: 'It appears you have an existing account with us.'});
      return;
  }

  try {
      let sql = `
          INSERT INTO users (first_name, last_name, email, password)
          VALUES ('${first_name}', '${last_name}', '${email}', '${hashedPassword}')
      `;
      await db(sql);
      res.send({ message: 'Registration succeeded' });
  } catch (err) {
      next(err);
  }
});

/**
 * Log in a user
 **/

router.post('/login', async (req, res, next) => {
  let { email, password } = req.body;

  try {
      let results = await db(`SELECT * FROM users WHERE email = '${email}'`);
      if (results.data.length === 0) {
          // Email not found
          res.status(400).send({ error: 'Login failed. Please try again.' });
      } else {
          let row = results.data[0];  // the user's row/record from the DB
          let passwordsEqual = await bcrypt.compare(password, row.password);
          if (passwordsEqual) {
              let payload = { userId: row.id };
              // Create & return token (and user ID, useful for the client)
              let token = jwt.sign(payload, SECRET_KEY);
              res.send({
                  message: 'Login succeeded',
                  token: token,
                  userId: row.id
              });
          } else {
              // Passwords don't match
              res.status(400).send({ error: 'Login failed' });
          }
      }
  } catch (err) {
      next(err);
  }
});

/**
 * Get the user's profile page.
 * A user can only see his/her own profile page.
 **/

router.get('/:userId/profile', ensureSameUser, async function(req, res, next) {
  let { userId } = req.params;
  let sql = 'SELECT * FROM users WHERE id = ' + userId;
  try {
      let results = await db(sql);
      let user = results.data[0];
      delete user.password;  // don't return the password
      res.send(user);
  } catch (err) {
      next(err);
  }
});

/**
 * Delete a user by id
 */

router.delete('/:userId', async (req, res) => {
    let id = req.params.userId;
    // Check for 404
    if ((await userExists(id)) === false) {
        res.status(404).send({ error: "Not Found" });
        return;
    }

    let sql = `DELETE FROM users WHERE id = ${id}`;

    try {
        let response = await db(sql); // DELETE
        // return all users
        response = await db("SELECT * FROM users ORDER BY id ASC;");
        res.send(response.data);
    } catch (err) {
        res.status(500).send({ error: err });
    }
 });

 /**
 * Get plants added by the user
 */

router.get('/:userId/favorites', ensureSameUser, async (req, res, next) => {
    let { userId } = req.params;
    let sql = 'SELECT plant_id FROM users_plants WHERE user_id = ' + userId;

    try {
        let response = await db(sql);
        res.send(response.data);
    } catch (err) {
        next(err);
    }
});

// Add plants to user's profile

router.post('/:userId/favorites', ensureSameUser, async (req, res, next) => {
    let { user_id, plant_id } = req.body;
    
    let sql = `INSERT INTO users_plants (user_id, plant_id) VALUES (${user_id}, ${plant_id})`;

    if ((await plantExists(plant_id)) === true) {
        res.status(400).send({ message: 'Plant already exists.'});
        return;
    }
    
    try {
        let response = await db(sql);
        response = await db('SELECT plant_id FROM users_plants WHERE user_id = ' + user_id);
        res.status(201).send(response.data);
    } catch (err) {
        res.status(500).send({ error: err.statusText });
    }
});

// Delete plants from user's profile

router.delete('/:userId/favorites/:plantId', ensureSameUser, async (req, res, next) => {
    let plant_id = req.params.plantId;

    let sql = `DELETE FROM users_plants WHERE plant_id = ${plant_id}`;

    try {
        let response = await db(sql); // DELETE
        // return all plants on the user's profile
        response = await getUsersPlants();
        res.send(response.data);
    } catch (err) {
        res.status(500).send({ error: err });
    }
});

module.exports = router;
