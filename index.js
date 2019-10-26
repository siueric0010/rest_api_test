const express = require('express');

// set up express
const app = express();

// request paramter, response paramter
// request = info about the request
// response = info about the response to the client who made the get request
// /api is the route (localhost:4000/api)
// could get post/delete/put by using the app.
app.get('/api', function(req, res) {
  console.log("GET request");
  res.send({name: 'Name'})
});



// Listen for requests
app.listen(process.env.port || 4000, function() {
  console.log("now listening for requests");

});
// Listen for port 4000 --> made up
// Heroku/ hosting service gives a environment variable: process.env.port
