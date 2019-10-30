const express = require('express');
const bodyParser = require('body-parser');


const routes = require('./routes/api'); // knows it's js, so not need for .js
// set up express
const app = express();

// ****** Important to put body parser middleware above the routes middleware b/c we need access by this point
app.use(bodyParser.json())




// Initiliaze routes
app.use('/api', routes); // the app will use the route '/api' adds the api route
// or app.use('/api', require('./routes/api')) --> .use to use middleware
// (code that runs between request and response)







// Listen for requests
app.listen(process.env.port || 4000, function() {
  console.log("now listening for requests");

});
// Listen for port 4000 --> made up
// Heroku/ hosting service gives a environment variable: process.env.port

/*
// request paramter, response paramter
// request = info about the request
// response = info about the response to the client who made the get request
// /api is the route (localhost:4000/api)
// could get post/delete/put by using the app.
app.get('/api', function(req, res) {
  console.log("GET request");
  res.send({name: 'Name'})
});

*/
