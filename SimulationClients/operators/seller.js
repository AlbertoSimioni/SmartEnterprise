var datetime = require('node-datetime');
var unirest = require('unirest');
var autobahn = require('autobahn');

var parameters = require('../config/parameters');      // load the database config
var addresses = require('../config/addresses');

var timings = require('../timings');


Math.log = (function() {
  var log = Math.log;
  return function(n, base) {
    return log(n)/(base ? log(base) : 1);
  };
})();


var poolOption = { maxSockets: 100 }
var method = Seller.prototype;
var usersCounter = 0;
var maxUsers = 30;


function Seller() {

	this._id = 'sel'+usersCounter;
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
    this._operationsCounter = (nr*6)%11;
    this._activestep = 0;
    this._terminate = false;

    //Autonomous operations
    function timeout() {
	    setTimeout(function () {
    		var requestID = sellers[nr]._id+'-'+sellers[nr]._activeOpCounter+'-A';
	    	
	    	if(sellers[nr]._operationsCounter % 11 < 8){
	    		//NEW CATALOG
	    		timings.newRequest();
	    		if(sellers[nr]._activestep == 0){
	    			var hrstart = process.hrtime();
	    			timings.makeRequest(requestID,hrstart);
	    			
		    		unirest.post(addresses.gateway+'/sedcatalogs/newcatalog')
		    		.pool(poolOption)
			        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
			        .send({ "simID": parameters.simulationID, "opID": requestID, "step" : 0})
			        .end(function(response){
			        	var hrend = process.hrtime(hrstart);
        				var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
			            timings.addTiming("POST-sedcatalogs/newcatalog",msElapsed,requestID);
			        });
			        sellers[nr]._activestep++;
		    	}
		    	else if(sellers[nr]._activestep > 0 && sellers[nr]._activestep <10){
		    		var hrstart = process.hrtime();
	    			
		    		unirest.put(addresses.gateway+'/sedcatalogs/addcatalog/lol')
		    		.pool(poolOption)
			        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
			        .send({ "simID": parameters.simulationID, "opID": requestID, "step" : 0})
			        .end(function(response){
			            var hrend = process.hrtime(hrstart);
        				var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
			            timings.addTiming("PUT-sedcatalogs/addcatalog",msElapsed,requestID);
			        });
			        sellers[nr]._activestep++;
		    	}
		    	else{
		    		var hrstart = process.hrtime();
	    			
		    		unirest.get(addresses.gateway+'/sedcatalogs/currentcatalogs')
		    		.pool(poolOption)
			        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
			        .send({ "simID": parameters.simulationID, "opID": requestID, "step" : 0})
			        .end(function(response){
			            var hrend = process.hrtime(hrstart);
        				var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
			            timings.addTiming("GET-sedcatalogs/currentcatalogs",msElapsed,requestID);
			        });
		    		sellers[nr]._activestep = 0;
		    		sellers[nr]._operationsCounter++;
		    	}
	    	}
	    	else{
	    		//ORDERS
	    		timings.newRequest();
				if(sellers[nr]._activestep == 0){
					var hrstart = process.hrtime();
	    			timings.makeRequest(requestID,hrstart);
		    		unirest.post(addresses.gateway+'/sedorders/newsalesorder')
		    		.pool(poolOption)
			        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
			        .send({ "simID": parameters.simulationID, "opID": requestID, "step" : 0})
			        .end(function(response){
			            var hrend = process.hrtime(hrstart);
        				var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
			            timings.addTiming("POST-sedorders/newsalesorder",msElapsed,requestID);
			        });
			        sellers[nr]._activestep++;
		    	}
		    	else if(sellers[nr]._activestep > 0 && sellers[nr]._activestep <9){
		    		var hrstart = process.hrtime();
	    			
		    		unirest.put(addresses.gateway+'/sedorders/addsalesorder/lol')
		    		.pool(poolOption)
			        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
			        .send({ "simID": parameters.simulationID, "opID": requestID, "step" : 0})
			        .end(function(response){
			            var hrend = process.hrtime(hrstart);
        				var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
			            timings.addTiming("PUT-sedorders/addsalesorder",msElapsed,requestID);
			        });
			        sellers[nr]._activestep++;
		    	}
		    	else if(sellers[nr]._activestep == 9){
		    		var hrstart = process.hrtime();
	    			timings.makeRequest(requestID,hrstart);
		    		unirest.put(addresses.gateway+'/sedorders/confirmsalesorder')
		    		.pool(poolOption)
			        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
			        .send({ "simID": parameters.simulationID, "opID": requestID, "step" : 0})
			        .end(function(response){
			            var hrend = process.hrtime(hrstart);
        				var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
			            timings.addTiming("PUT-sedorders/confirmsalesorder",msElapsed,requestID);
			        });
			        sellers[nr]._activestep++;
		    	}
		    	else{
		    		var hrstart = process.hrtime();
	    			
		    		unirest.get(addresses.gateway+'/sedorders/currentsalesorders')
		    		.pool(poolOption)
			        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
			        .send({ "simID": parameters.simulationID, "opID": requestID, "step" : 0})
			        .end(function(response){
			            var hrend = process.hrtime(hrstart);
        				var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
			            timings.addTiming("GET-sedorders/currentsalesorders",msElapsed,requestID);
			        });
		    		sellers[nr]._activestep = 0;
		    		sellers[nr]._operationsCounter++;
		    	}
	    	}
	        sellers[nr]._activeOpCounter++;
	        if(!sellers[nr]._terminate){
	        	timeout();
	    	}
	    }, parameters.requestsFrequency);
	}

	timeout();

	//asynch operations
	function onOpen(session, details) {

	    function onAvailabilities(args, kwargs) {
	    	var opnr = kwargs.opID.split('-')[1];
	    	if((opnr % sellers.length) == nr){
	    		timings.reactiveRequest(kwargs.opID);
		    	unirest.get('http://147.162.226.101:30008/sedavailabilities/currentavailabilities')
		    	.pool(poolOption)
		        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
		        .send({ "simID": parameters.simulationID, "opID": sellers[nr]._id+'-'+sellers[nr]._reactOpCounter+'-R', "step" : 0})
		        .end(function(response){
		        });
		       	sellers[nr]._reactOpCounter++;
	    	}
		};


		function onPurchasingOrders(args, kwargs) {
	    	var opnr = kwargs.opID.split('-')[1];
	    	if((opnr % sellers.length) == nr){
	    		timings.reactiveRequest(kwargs.opID);
		    	unirest.get('http://147.162.226.101:30008/sedorders/currentpurchasingorders')
		    	.pool(poolOption)
		        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
		        .send({ "simID": parameters.simulationID, "opID": sellers[nr]._id+'-'+sellers[nr]._reactOpCounter+'-R', "step" : 0})
		        .end(function(response){
		        });
		       	sellers[nr]._reactOpCounter++;
	    	}
		};
	    session.subscribe('availabilities', onAvailabilities);
	    session.subscribe('purchasingorders', onPurchasingOrders);
	    sellers[nr]._session = session;
	};



}


var sellers = [];

function tick(){

	if(sellers.length <  maxUsers){
		sellers.push(new Seller());
		return true;
	}
	else{
		return false;
	}
}


function terminate(){
	for (var i = 0; i < sellers.length; i++) {
		sellers[i]._terminate = true;
		sellers[i]._connection.close();
	}
}

module.exports.terminate = terminate;
module.exports.tick = tick;