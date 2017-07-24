// set up ======================================================================
var express = require('express');
var app = express(); 						// create our app w/ express
var mongoose = require('mongoose'); 				// mongoose for mongodb
var port = process.env.PORT || 8080; 				// set the port
var database_config = require('./config/database'); 			// load the database config
var zmq_config = require('./config/zmq'); 
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Configurazione per sviluppo locale (dev) o produzione (prod) (aka cluster)
database_config = database_config.prod;

// configuration ===============================================================
mongoose.connect(database_config.mongoUrl); 	// Connect to local MongoDB instance. A remoteUrl is also available (modulus.io)

app.use(express.static('./public')); 		// set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request


// routes ======================================================================
require('./app/routes.js')(app);


console.log("--- Stream Generator ---");
console.log("Replica set: " + database_config.rsName);
console.log("oplog URL: " + database_config.oplogUrl);
console.log("Mongo URL: " + database_config.mongoUrl);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);


var MongoOplog = require('mongo-oplog');
var oplog = MongoOplog(database_config.oplogUrl).tail();


// pubber.js 
var zmq = require('zeromq')
  , sock = zmq.socket('pub');
 
sock.bindSync('tcp://*:'+ zmq_config.PORT);
console.log('Publisher bound to port '+ zmq_config.PORT);
console.log();
require('./app/oplog.js')(oplog,sock);