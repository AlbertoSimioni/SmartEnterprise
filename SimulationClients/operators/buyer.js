var datetime = require('node-datetime');
var unirest = require('unirest');
var autobahn = require('autobahn');

var parameters = require('../config/parameters');      // load the database config
var addresses = require('../config/addresses');


Math.log = (function() {
  var log = Math.log;
  return function(n, base) {
    return log(n)/(base ? log(base) : 1);
  };
})();


var method = Buyer.prototype;
var usersCounter = 0;
var maxUsers = 15;





function Buyer() {

	this._id = 'buy'+usersCounter;
	var nr = usersCounter;
	usersCounter = usersCounter +1;
	var connection = new autobahn.Connection({
         url: addresses.crossbarUrl,
         realm: 'realm1'
      });


	this._connection = connection;
	this._connection.onopen = onOpen;
    this._connection.open();
    this._activeOpCounter = 0;
    this._reactOpCounter = 0;
    this._operationsCounter = 0;
    this._activestep = 0;

    //Autonomous operations
    function timeout() {
	    setTimeout(function () {
	    	if(buyers[nr]._operationsCounter % 7 < 5){
	    		//NEW CATALOG
	    		if(buyers[nr]._activestep == 0){
		    		unirest.post('http://147.162.226.101:30008/pudavailabilities/newavailability')
			        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
			        .send({ "simID": parameters.simulationID, "opID": buyers[nr]._id+'-'+buyers[nr]._activeOpCounter+'-A', "step" : 0})
			        .end(function(response){
			            console.log(response.body);
			        });
			        buyers[nr]._activestep++;
		    	}
		    	else if(buyers[nr]._activestep > 0 && buyers[nr]._activestep <10){
		    		unirest.put('http://147.162.226.101:30008/pudavailabilities/addavailability/lol')
			        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
			        .send({ "simID": parameters.simulationID, "opID": buyers[nr]._id+'-'+buyers[nr]._activeOpCounter+'-A', "step" : 0})
			        .end(function(response){
			            console.log(response.body);
			        });
			        buyers[nr]._activestep++;
		    	}
		    	else{
		    		unirest.get('http://147.162.226.101:30008/pudavailabilities/currentavailabilities')
			        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
			        .send({ "simID": parameters.simulationID, "opID": buyers[nr]._id+'-'+buyers[nr]._activeOpCounter+'-A', "step" : 0})
			        .end(function(response){
			            console.log(response.body);
			        });
		    		buyers[nr]._activestep = 0;
		    		buyers[nr]._operationsCounter++;
		    	}
	    	}
	    	else{
	    		//ORDERS
				if(buyers[nr]._activestep == 0){
		    		unirest.post('http://147.162.226.101:30008/pudorders/newpurchasingorder')
			        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
			        .send({ "simID": parameters.simulationID, "opID": buyers[nr]._id+'-'+buyers[nr]._activeOpCounter+'-A', "step" : 0})
			        .end(function(response){
			            console.log(response.body);
			        });
			        buyers[nr]._activestep++;
		    	}
		    	else if(buyers[nr]._activestep > 0 && buyers[nr]._activestep <10){
		    		unirest.put('http://147.162.226.101:30008/pudorders/addpurchasingorder/lol')
			        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
			        .send({ "simID": parameters.simulationID, "opID": buyers[nr]._id+'-'+buyers[nr]._activeOpCounter+'-A', "step" : 0})
			        .end(function(response){
			            console.log(response.body);
			        });
			        buyers[nr]._activestep++;
		    	}
		    	else if(buyers[nr]._activestep == 9){
		    		unirest.put('http://147.162.226.101:30008/pudorders/confirmpurchasingorder/lol')
			        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
			        .send({ "simID": parameters.simulationID, "opID": buyers[nr]._id+'-'+buyers[nr]._activeOpCounter+'-A', "step" : 0})
			        .end(function(response){
			            console.log(response.body);
			        });
			        buyers[nr]._activestep++;
		    	}
		    	else{
		    		unirest.get('http://147.162.226.101:30008/pudorders/currentpurchasingorders')
			        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
			        .send({ "simID": parameters.simulationID, "opID": buyers[nr]._id+'-'+buyers[nr]._activeOpCounter+'-A', "step" : 0})
			        .end(function(response){
			            console.log(response.body);
			        });
		    		buyers[nr]._activestep = 0;
		    		buyers[nr]._operationsCounter++;
		    	}
	    	}
	    	console.log(buyers[nr]._id+'-'+buyers[nr]._activeOpCounter+'-A');
	        buyers[nr]._activeOpCounter++;
	        timeout();
	    }, parameters.requestsFrequency);
	}

	timeout();

	//asynch operations
	function onOpen(session, details) {
		console.log(buyers[nr]._id);

		function onSalesOrders(args, kwargs) {
	    	var opnr = kwargs.opID.split('-')[1];
	    	if((opnr % lastvalue) == nr){
		    	unirest.get('http://147.162.226.101:30008/pudorders/currentsalesorders')
		        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
		        .send({ "simID": parameters.simulationID, "opID": buyers[nr]._id+'-'+buyers[nr]._reactOpCounter+'-R', "step" : 0})
		        .end(function(response){
		            console.log(response.body);
		        });
		        console.log(buyers[nr]._id+'-'+buyers[nr]._reactOpCounter+'-R');
		       	buyers[nr]._reactOpCounter++;
	    	}
		};
	    session.subscribe('salesorders', onSalesOrders);
	    buyers[nr]._session = session;
	};



}


var buyers = [];
var lastvalue = 0;

function tick(counter){
	var newvalue;
	if(parameters.type == "lin")
		newvalue = Math.floor(counter*parameters.b);
	else if(parameters.type == "log")
		newvalue = Math.floor(Math.log(counter,parameters.b));
	else if(parameters.type == "exp")
		newvalue = Math.floor(Math.pow(parameters.b,counter));
	var newusers = newvalue - lastvalue;
	if(newusers > 0 && lastvalue <  maxUsers){
		for (var i = 0; i < newusers  && lastvalue + i < maxUsers; i++) {
			buyers.push(new Buyer());
		}
		
		lastvalue = newvalue;
	}
	console.log("buyers = "+counter+" - users = "+lastvalue);
}

module.exports.tick = tick;