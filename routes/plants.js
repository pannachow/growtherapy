var express = require('express');
var router = express.Router();
const db = require('../model/helper');
const fetch = require('node-fetch');

//Helper functions_________________________________________________


async function plantExist(id) {
  let results = await db(`SELECT * FROM plant_data WHERE id = ${id}`);
  return results.data.length === 1;
}

//_________________________________________________________________

// GET /plants
router.get('/search', async function(req, res, next) {
  //   search Trefle API for plants; store in plant_results
  let plant_results = fetch(`https://trefle.io/api/v1/plants/search?token=2_7ir7W0G4vcNeyPivAfaXhat4T2D7HFlD42-zsWitY`);
  
  //   make an array of Trefle plant IDs from plant_results
  const trefle_plant_ids = [plant_results.id];

  //   do a SELECT on your DB table, looking for plant IDs in the trefle_plant_id field
  db(`SELECT plant_id WHERE trefle_plant_id = ${trefle_plants_ids}`);

  //   for each plant returned from your table, add additional GT data to plant_results


  //   return plant_results

});


router.get('/', function(req, res, next) {
  db('SELECT * FROM plant_data;')
  .then(results => {
    res.send(results.data);
  })
  .catch(err => 
    res.status(500).send(err));
});

router.get('/:id', async function(req, res, next) {
  let { id } = req.params;

  try {
    if ( plantExist(id) === false ) {
      res.status(404).send( {error: 'Not found'} );
      return;
    }
    let sql = (`SELECT * FROM plant_data WHERE id = ${id}`);
    let results = await db(sql);
    res.send(results.data[0]);

  } catch (err) {
    res.status(500).send( {error: err} );
  }
  
});

router.get('/:id', async function(req, res, next) {
  let { id } = req.params;

  try {
    if ( plantExist(id) === false ) {
      res.status(404).send( {error: 'Not found'} );
      return;
    }
    let sql = (`SELECT * FROM plant_data WHERE id = ${id}`);
    let results = await db(sql);
    res.send(results.data[0]);

  } catch (err) {
    res.status(500).send( {error: err} );
  }
  
});



module.exports = router;