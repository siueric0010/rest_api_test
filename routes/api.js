
const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');



// get request: list of ninjas from database (only 1 that can be tested in browser bc browser only can send get requests)
router.get('/ninjas', function(req,res) {
  res.send({type:'GET'}); // sends object saying what request they made
});

// post request: add ninja to DB
router.post('/ninjas', function(req,res) {
  // var ninja = new Ninja(req.body);
  // ninja.save(); // saves to mongo database in ninja colection
  Ninja.create(req.body).then(function(ninja){

    res.send(ninja); // sends object saying what request they made
  }); // does the above two comments in one line; then only fires when action is complete
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
