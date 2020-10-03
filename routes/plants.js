var express = require('express');
var router = express.Router();
const db = require('../model/helper');



// //Helper functions_________________________________________________


// async function plantExist(id) {
//   let results = await db(`SELECT * FROM plant_data WHERE id = ${id}`);
//   return results.data.length === 1;
// }

// //_________________________________________________________________


router.get('/plants', function(req, res, next) {
  db('SELECT * FROM plant_data;')
  .then(results => {
    res.send(results.data);
  })
  .catch(err => 
    res.status(500).send(err));
});

// router.get('/plants/:id', async function(req, res, next) {
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



module.exports = router;