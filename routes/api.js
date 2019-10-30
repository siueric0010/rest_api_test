
const express = require('express');
const router = express.Router();



// get request: list of ninjas from database (only 1 that can be tested in browser bc browser only can send get requests)
router.get('/ninjas', function(req,res) {
  res.send({type:'GET'}); // sends object saying what request they made
});

// post request: add ninja to DB
router.post('/ninjas', function(req,res) {
  console.log(req.body);
  res.send({
    type:'POST',
    name: req.body.name,
    rank: req.body.rank}); // sends object saying what request they made
});

// update ninja in the db (id is a parameter that is required to get the right ninja)
router.put('/ninjas/:id', function(req,res) {
  res.send({type:'PUT'}); // sends object saying what request they made
});

// delete a ninja from the db
router.delete('/ninjas/:id', function(req,res) {
  res.send({type:'DELETE'}); // sends object saying what request they made
});

module.exports  = router; // exports the thing so it can be imported in another file (index.js)
