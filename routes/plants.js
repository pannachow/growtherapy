const express = require("express");
const router = express.Router();
const db = require("../model/helper");
const TrefleApi = require("../helpers/TrefleApi");

// Properties to keep from Trefle plant object
const PLANT_KEYS = ["id", "image_url", "common_name", "slug", "scientific_name", "family", "native", "year"];

/**********************************************************
 * Helper Functions
 **********************************************************/

/**
 * Remove/trim plant properties we don"t need
 */

function trimPlants(plants) {
  const trimmed = plants.map((pobj) => {
    const tpobj = {};
    for (let key of PLANT_KEYS) {
      tpobj[key] = pobj[key];
    }
    //no common_name in the data then use scientific_name
    if (tpobj.common_name === null) {
      tpobj.common_name = tpobj.scientific_name;
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
  const ids = trimmed.map((p) => p.id);
  // Create SQL to SELECT those IDs
  const sql = `
    SELECT * FROM plant_data 
    WHERE trefle_plant_id IN (${ids.join(",")});
  `;
  const trimmedWithGt = [...trimmed];  // copy trimmed array
  try {
    const results = await db(sql);
    const rows = results.data;
    // If any GT data was found, add it to trimmed plants
    trimmedWithGt.forEach((p) => {
      // Get index of GT data in rows (if it exists)
      let gtIx = rows.findIndex((gt) => p.id === gt.trefle_plant_id);
      if (gtIx === -1) {
        p.growtherapy = null;  // no GT data found
      } else {
        p.growtherapy = rows[gtIx];  // add GT data to trimmed plant obj
      }
    });
  } catch (err) {
    console.log("addGtFields() error:", err);
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

router.get("/", async function (req, res, next) {
  let response;
  if ("gt" in req.query) {
    let results = await db("SELECT trefle_plant_id FROM plant_data");
    let ids = results.data.map((row) => row.trefle_plant_id);
    response = await TrefleApi.getPlantsByIds(ids);
  } else {
    response = await TrefleApi.getPlants();
  }

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


router.get("/:id", async function (req, res, next) {
  let { id } = req.params;
  let response = await TrefleApi.getPlantById(id);
  if (response.ok) {
    let plant = response.data.data;
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
