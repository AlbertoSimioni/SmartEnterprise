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


var method = Platform.prototype;
var usersCounter = 0;
var maxUsers = 15;





function Platform() {

	this._id = 'pla'+usersCounter;
	var nr = usersCounter;
	usersCounter = usersCounter +1;
	var connection = new autobahn.Connection({
         url: addresses.crossbarUrl,
         realm: 'realm1'
      });


	this._connection = connection;
	this._connection.onopen = onOpen;
    this._connection.open();
    this._operationsCounter = 0;
    this._activestep = 0;
    this._newopernr = 0;
    this._terminate = false;
    //Autonomous operations
    function timeout() {

	    setTimeout(function () {
	    	if(platforms[nr]._newopernr > 0){
	    			var requestID = platforms[nr]._id+'-'+platforms[nr]._operationsCounter+'-A';

	    			timings.newRequest();
	    			if(platforms[nr]._activestep == 0){
		    			var hrstart = process.hrtime();
	    			  				
	    				unirest.get(addresses.gateway+'/pldplans/currentloadingplans')
				        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
				        .send({ "simID": parameters.simulationID, "opID": requestID, "step" : 0})
				        .end(function(response){
				            var hrend = process.hrtime(hrstart);
	        				var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
				            timings.addTiming("GET-pldplans/currentloadingplans",msElapsed,requestID);
				        });
				        platforms[nr]._activestep++;
	    			}
	    			else if(platforms[nr]._activestep == 1){
	    				var hrstart = process.hrtime();
	    				timings.makeRequest(requestID,hrstart);
	    				unirest.post(addresses.gateway+'/pldplans/newloadingplan')
				        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
				        .send({ "simID": parameters.simulationID, "opID": requestID, "step" : 0})
				        .end(function(response){

				            var hrend = process.hrtime(hrstart);
	        				var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
				            timings.addTiming("POST-pldplans/newloadingplan",msElapsed,requestID);
				        });
	    				platforms[nr]._activestep++;
	    			}	
	    			else if(platforms[nr]._activestep > 1 && platforms[nr]._activestep < 9 ){
	    				var hrstart = process.hrtime();
	    			
	    				unirest.put(addresses.gateway+'/pldplans/addloadingplan/lol')
				        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
				        .send({ "simID": parameters.simulationID, "opID": requestID, "step" : 0})
				        .end(function(response){
				            var hrend = process.hrtime(hrstart);
	        				var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
				            timings.addTiming("PUT-pldplans/addloadingplan",msElapsed,requestID);
				        });
						platforms[nr]._activestep++;
	    			}   
	    			else if(platforms[nr]._activestep == 9){
	    				var hrstart = process.hrtime();
	    			timings.makeRequest(requestID,hrstart);
	    				unirest.put(addresses.gateway+'/pldplans/confirmloadingplan/lol')
				        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
				        .send({ "simID": parameters.simulationID, "opID": requestID, "step" : 0})
				        .end(function(response){
				            var hrend = process.hrtime(hrstart);
	        				var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
				            timings.addTiming("PUT-pldplans/confirmloadingplan",msElapsed,requestID);
				        });
	    				platforms[nr]._activestep = 0;
	    				platforms[nr]._newopernr--;
	    			}
	    			else{
	    				console.log("ERROR: "+"platforms[nr]._activestep" );
	    			}			    			 			
	    		platforms[nr]._operationsCounter++;
	    	}
			if(!platforms[nr]._terminate){
	        	timeout();
	        }
	    }, parameters.requestsFrequency);
	}

	timeout();

	//asynch operations
	function onOpen(session, details) {


		function onConfirmTrip(args, kwargs) {
			var opnr = kwargs.opID.split('-')[1];
	    	if((opnr % platforms.length) == nr && (Math.random() > 0.60)){
	    		timings.reactiveRequest(kwargs.opID);
	    		platforms[nr]._newopernr++;
	    	}
		};	
	    session.subscribe('confirmtrip',onConfirmTrip);
	    platforms[nr]._session = session;
	};

}


var platforms = [];

function tick(){

	if(platforms.length <  maxUsers){
		platforms.push(new Platform());
		return true;
	}
	else{
		return false;
	}
}



function terminate(){
	for (var i = 0; i < platforms.length; i++) {
		platforms[i]._terminate = true;
		platforms[i]._connection.close();
	}
}

module.exports.terminate = terminate;
module.exports.tick = tick;