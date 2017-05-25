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
    this._operationsCounter = (nr*5)%7;
    this._activestep = 0;
    this._terminate = false;
    //Autonomous operations
    function timeout() {
	    setTimeout(function () {
	    	var requestID = buyers[nr]._id+'-'+buyers[nr]._activeOpCounter+'-A';
	    	if(buyers[nr]._operationsCounter % 7 < 5){
	    		//NEW CATALOG
	    		timings.newRequest();

	    		if(buyers[nr]._activestep == 0){
	    			var hrstart = process.hrtime();
	    			timings.makeRequest(requestID,hrstart);
		    		unirest.post(addresses.gateway+ '/pudavailabilities/newavailability')
			        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
			        .send({ "simID": parameters.simulationID, "opID": requestID, "step" : 0})
			        .end(function(response){
			            var hrend = process.hrtime(hrstart);
	        			var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
				        timings.addTiming("POST-pudavailabilities/newavailability",msElapsed,requestID);
			        });
			        buyers[nr]._activestep++;
		    	}
		    	else if(buyers[nr]._activestep > 0 && buyers[nr]._activestep <10){
		    		var hrstart = process.hrtime();
	    			
		    		unirest.put(addresses.gateway+ '/pudavailabilities/addavailability/lol')
			        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
			        .send({ "simID": parameters.simulationID, "opID": requestID, "step" : 0})
			        .end(function(response){
			            var hrend = process.hrtime(hrstart);
	        			var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
				        timings.addTiming("PUT-pudavailabilities/addavailability",msElapsed,requestID);
			        });
			        buyers[nr]._activestep++;
		    	}
		    	else{
		    		var hrstart = process.hrtime();
	    			
		    		unirest.get(addresses.gateway+ '/pudavailabilities/currentavailabilities')
			        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
			        .send({ "simID": parameters.simulationID, "opID": requestID, "step" : 0})
			        .end(function(response){
			            var hrend = process.hrtime(hrstart);
	        			var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
				        timings.addTiming("GET-pudavailabilities/currentavailabilities",msElapsed,requestID);
			        });
		    		buyers[nr]._activestep = 0;
		    		buyers[nr]._operationsCounter++;
		    	}
	    	}
	    	else{
	    		//ORDERS
	    		timings.newRequest();
				if(buyers[nr]._activestep == 0){
					var hrstart = process.hrtime();
	    			timings.makeRequest(requestID,hrstart);
		    		unirest.post(addresses.gateway+ '/pudorders/newpurchasingorder')
			        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
			        .send({ "simID": parameters.simulationID, "opID": requestID, "step" : 0})
			        .end(function(response){
			            var hrend = process.hrtime(hrstart);
	        			var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
				        timings.addTiming("POST-pudorders/newpurchasingorder",msElapsed,requestID);
			        });
			        buyers[nr]._activestep++;
		    	}
		    	else if(buyers[nr]._activestep > 0 && buyers[nr]._activestep <9){
		    		var hrstart = process.hrtime();
	    			
		    		unirest.put(addresses.gateway+ '/pudorders/addpurchasingorder/lol')
			        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
			        .send({ "simID": parameters.simulationID, "opID": requestID, "step" : 0})
			        .end(function(response){
			            var hrend = process.hrtime(hrstart);
	        			var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
				        timings.addTiming("PUT-pudorders/addpurchasingorder",msElapsed,requestID);
			        });
			        buyers[nr]._activestep++;
		    	}
		    	else if(buyers[nr]._activestep == 9){
		    		var hrstart = process.hrtime();
	    			timings.makeRequest(requestID,hrstart);
		    		unirest.put(addresses.gateway+ '/pudorders/confirmpurchasingorder')
			        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
			        .send({ "simID": parameters.simulationID, "opID": requestID, "step" : 0})
			        .end(function(response){
			            var hrend = process.hrtime(hrstart);
	        			var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
				        timings.addTiming("PUT-pudorders/confirmpurchasingorder",msElapsed,requestID);
			        });
			        buyers[nr]._activestep++;
		    	}
		    	else{
		    		var hrstart = process.hrtime();
	    			
		    		unirest.get(addresses.gateway+ '/pudorders/currentpurchasingorders')
			        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
			        .send({ "simID": parameters.simulationID, "opID": requestID, "step" : 0})
			        .end(function(response){
			            var hrend = process.hrtime(hrstart);
	        			var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
				        timings.addTiming("GET-pudorders/currentpurchasingorders",msElapsed,requestID);
			        });
		    		buyers[nr]._activestep = 0;
		    		buyers[nr]._operationsCounter++;
		    	}
	    	}
	        buyers[nr]._activeOpCounter++;
	    	if(!buyers[nr]._terminate){

	        	timeout();
	    	}
	    }, parameters.requestsFrequency);
	}

	timeout();

	//asynch operations
	function onOpen(session, details) {

		function onSalesOrders(args, kwargs) {
	    	var opnr = kwargs.opID.split('-')[1];
	    	if((opnr % buyers.length) == nr){
	    		timings.reactiveRequest(kwargs.opID);
		    	unirest.get(addresses.gateway+ '/pudorders/currentsalesorders')
		        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
		        .send({ "simID": parameters.simulationID, "opID": buyers[nr]._id+'-'+buyers[nr]._reactOpCounter+'-R', "step" : 0})
		        .end(function(response){
		        });
		       	buyers[nr]._reactOpCounter++;
	    	}
		};
	    session.subscribe('salesorders', onSalesOrders);
	    buyers[nr]._session = session;
	};



}


var buyers = [];

function tick(){
	if(buyers.length  < maxUsers){
		buyers.push(new Buyer());
		return true;
	}
	else{
		return false;
	}
}

function terminate(){
	for (var i = 0; i < buyers.length; i++) {
		buyers[i]._terminate = true;
		buyers[i]._connection.close();
	}
}

module.exports.terminate = terminate;
module.exports.tick = tick;