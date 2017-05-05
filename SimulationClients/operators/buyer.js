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
		    		unirest.post('http://147.162.226.101:30008/pudavailabilities/newavailability')
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
		    		unirest.put('http://147.162.226.101:30008/pudavailabilities/addavailability/lol')
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
		    		unirest.get('http://147.162.226.101:30008/pudavailabilities/currentavailabilities')
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
		    		unirest.post('http://147.162.226.101:30008/pudorders/newpurchasingorder')
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
		    		unirest.put('http://147.162.226.101:30008/pudorders/addpurchasingorder/lol')
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
		    		////console.log("CONFIRM PUD");
		    		unirest.put('http://147.162.226.101:30008/pudorders/confirmpurchasingorder')
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
		    		unirest.get('http://147.162.226.101:30008/pudorders/currentpurchasingorders')
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
	    	////console.log(buyers[nr]._id+'-'+buyers[nr]._activeOpCounter+'-A');
	        buyers[nr]._activeOpCounter++;
	    	if(!buyers[nr]._terminate){

	        	timeout();
	    	}
	    }, parameters.requestsFrequency);
	}

	timeout();

	//asynch operations
	function onOpen(session, details) {
		////console.log(buyers[nr]._id);

		function onSalesOrders(args, kwargs) {
			////console.log("ONSALESORDER");
	    	var opnr = kwargs.opID.split('-')[1];
	    	if((opnr % lastvalue) == nr){
		    	unirest.get('http://147.162.226.101:30008/pudorders/currentsalesorders')
		        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
		        .send({ "simID": parameters.simulationID, "opID": buyers[nr]._id+'-'+buyers[nr]._reactOpCounter+'-R', "step" : 0})
		        .end(function(response){
		            ////console.log(response.body);
		        });
		        ////console.log(buyers[nr]._id+'-'+buyers[nr]._reactOpCounter+'-R');
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
	//////console.log("buyers = "+counter+" - users = "+lastvalue);
}

function terminate(){
	for (var i = 0; i < buyers.length; i++) {
		buyers[i]._terminate = true;
		buyers[i]._connection.close();
	}
}

module.exports.terminate = terminate;
module.exports.tick = tick;