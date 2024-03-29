const cluster = require('cluster');
const http = require('http');

var routesBodies = require('./app/routesBodies.js');

if (cluster.isMaster) {
	console.log(`Master ${process.pid} is running`);

	cluster.fork();  
	// set up ======================================================================
	var express = require('express');
	var app = express();            // create our app w/ express
	var port = process.env.PORT || 8080;        // set the port
	var morgan = require('morgan');
	var bodyParser = require('body-parser');
	var methodOverride = require('method-override');

	app.use(express.static('./public'));    // set the static files location /public/img will be /img for users
	app.use(morgan('dev')); // log every request to the console
	app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
	app.use(bodyParser.json()); // parse application/json
	app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
	app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request

	// routes ======================================================================
	require('./app/routes.js')(app);

	// listen (start app with node server.js) ======================================
	app.listen(port);
	console.log("Microservice listening on port " + port);


  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
	 process.on('message', (msg) => {
	 	routesBodies(msg);
	  });  
}





