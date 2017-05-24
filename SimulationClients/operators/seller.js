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
		    		////console.log("CONFIRM SEL");
		    		var hrstart = process.hrtime();
	    			timings.makeRequest(requestID,hrstart);
		    		unirest.put(addresses.gateway+'/sedorders/confirmsalesorder')
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
	    	////console.log("ONAVAILABILITIES");
	    	var opnr = kwargs.opID.split('-')[1];
	    	if((opnr % lastvalue) == nr){
	    		timings.reactiveRequest(kwargs.opID);
		    	unirest.get('http://147.162.226.101:30008/sedavailabilities/currentavailabilities')
		        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
		        .send({ "simID": parameters.simulationID, "opID": sellers[nr]._id+'-'+sellers[nr]._reactOpCounter+'-R', "step" : 0})
		        .end(function(response){
		            ////console.log(response.body);
		        });
		       	sellers[nr]._reactOpCounter++;
	    	}
		};


		function onPurchasingOrders(args, kwargs) {
			////console.log("ONPURCHASINGORDERS")
	    	var opnr = kwargs.opID.split('-')[1];
	    	if((opnr % lastvalue) == nr){
	    		timings.reactiveRequest(kwargs.opID);
		    	unirest.get('http://147.162.226.101:30008/sedorders/currentpurchasingorders')
		        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
		        .send({ "simID": parameters.simulationID, "opID": sellers[nr]._id+'-'+sellers[nr]._reactOpCounter+'-R', "step" : 0})
		        .end(function(response){
		            ////console.log(response.body);
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
			sellers.push(new Seller());
		}
		
		lastvalue = newvalue;
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