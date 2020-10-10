const express = require('express');
const router = express.Router();
const db = require("../model/helper");
const TrefleApi = require('../helpers/TrefleApi');


// Properties to keep from Trefle plant object
const PLANT_KEYS = ['id', 'common_name', 'slug', 'scientific_name', 'family', 'native', 'year'];


/**********************************************************
 * Helper Functions
 **********************************************************/


/**
 * Remove/trim plant properties we don't need
 */

function trimPlants(plants) {
    let trimmed = plants.map((pobj) => {
        let tpobj = {};
        for (let key of PLANT_KEYS) {
            tpobj[key] = pobj[key];
        }
        return tpobj;
    });

    return trimmed;
}


/**
 * Add growtherapy (GT) fields from DB if available
 **/

async function addGtFields(trimmed) {
    // Get the IDs of all "trimmed" plants
    let ids = trimmed.map((p) => p.id);
    // Create SQL to SELECT those IDs
    let sql = `
        SELECT * FROM plant_data 
        WHERE trefle_plant_id IN (${ids.join(',')});
    `;

    let trimmedWithGt = [ ...trimmed ];  // copy trimmed array
    try {
        let results = await db(sql);
        let rows = results.data;
        // If any GT data was found, add it to trimmed plants
        if (rows.length > 0) {
            trimmedWithGt.forEach((p) => {
                // Get index of GT data in rows (if it exists)
                let gtIx = rows.findIndex((gt) => p.id === gt.trefle_plant_id);
                if (gtIx === -1) {
                    p.growtherapy = null;  // no GT data found
                } else {
                    p.growtherapy = rows[gtIx];  // add GT data to trimmed plant obj
                }
            });
        }
    } catch (err) {
        console.log('addGtFields() error:', err);
    }

    return trimmedWithGt;
}

// async function plantExist(id) {
//   let results = await db(`SELECT * FROM plant_data WHERE id = ${id}`);
//   return results.data.length === 1;
// }


/**********************************************************
 * Routes
 **********************************************************/

// router.get('/', function(req, res, next) {
//   db('SELECT * FROM plant_data;')
//   .then(results => {
//     res.send(results.data);
//   })
//   .catch(err => 
//     res.status(500).send(err));
// });



router.get('/', async function(req, res, next) {
    let response = await TrefleApi.getPlants();
    if (response.ok) {
        let plants = response.data.data;
        // Create "trimmed" plant objs with only the properties in PLANT_KEYS
        let trimmed = trimPlants(plants);
        // Add additional growtherapy (GT) fields if available
        let trimmedWithGt = await addGtFields(trimmed);
        // Return the GT plants
        res.send(trimmedWithGt);
    } else {
        res.status(response.status).send({ error: response.error });
    }
});

// router.get('/:id', async function(req, res, next) {
//   let { id } = req.params;

//   try {
//     if ( plantExist(id) === false ) {
//       res.status(404).send( {error: 'Not found'} );
//       return;
//     }
//     let sql = (`SELECT * FROM plant_data WHERE id = ${id}`);
//     let results = await db(sql);
//     res.send(results.data[0]);

//   } catch (err) {
//     res.status(500).send( {error: err} );
//   }
  
// });


router.get('/:id', async function(req, res, next) {
    let { id } = req.params;
    let response = await TrefleApi.getPlantById(id);
    if (response.ok) {
        // Create "trimmed" plant obj with only a few properties
        let trimmed = trimPlants([plant]);  // Note: trimPlants() expects an array
        // Add additional growtherapy (GT) fields if available
        let trimmedWithGt = await addGtFields(trimmed);
        // Return the GT plant (at array index 0)
        res.send(trimmedWithGt[0]);
    } else {
        res.status(response.status).send({ error: response.error });
    }
});


module.exports = router;