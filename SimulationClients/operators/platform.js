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
	    			timings.newRequest();
	    			console.log("platform:" + nr);
	    			if(platforms[nr]._activestep == 0){
		    			var hrstart = process.hrtime();	    				
	    				unirest.get('http://147.162.226.101:30008/pldplans/currentloadingplans')
				        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
				        .send({ "simID": parameters.simulationID, "opID": platforms[nr]._id+'-'+platforms[nr]._operationsCounter+'-A', "step" : 0})
				        .end(function(response){
				        	console.log("response");
				            var hrend = process.hrtime(hrstart);
	        				var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
				            timings.addTiming("GET-pldplans/currentloadingplans",msElapsed);
				        });
				        platforms[nr]._activestep++;
	    			}
	    			else if(platforms[nr]._activestep == 1){
	    				var hrstart = process.hrtime();
	    				unirest.post('http://147.162.226.101:30008/pldplans/newloadingplan')
				        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
				        .send({ "simID": parameters.simulationID, "opID": platforms[nr]._id+'-'+platforms[nr]._operationsCounter+'-A', "step" : 0})
				        .end(function(response){

				            var hrend = process.hrtime(hrstart);
	        				var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
				            timings.addTiming("POST-pldplans/newloadingplan",msElapsed);
				        });
	    				platforms[nr]._activestep++;
	    			}	
	    			else if(platforms[nr]._activestep > 1 && platforms[nr]._activestep < 9 ){
	    				var hrstart = process.hrtime();
	    				unirest.put('http://147.162.226.101:30008/pldplans/addloadingplan/lol')
				        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
				        .send({ "simID": parameters.simulationID, "opID": platforms[nr]._id+'-'+platforms[nr]._operationsCounter+'-A', "step" : 0})
				        .end(function(response){
				        	console.log("response");
				            var hrend = process.hrtime(hrstart);
	        				var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
				            timings.addTiming("PUT-pldplans/addloadingplan",msElapsed);
				        });
						platforms[nr]._activestep++;
	    			}   
	    			else if(platforms[nr]._activestep == 9){
	    				var hrstart = process.hrtime();
	    				unirest.put('http://147.162.226.101:30008/pldplans/confirmloadingplan/lol')
				        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
				        .send({ "simID": parameters.simulationID, "opID": platforms[nr]._id+'-'+platforms[nr]._operationsCounter+'-A', "step" : 0})
				        .end(function(response){
				            var hrend = process.hrtime(hrstart);
	        				var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
				            timings.addTiming("PUT-pldplans/confirmloadingplan",msElapsed);
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
		////console.log(platforms[nr]._id);


		function onConfirmTrip(args, kwargs) {
			//console.log("ONCONFIRMTRIP")
			var opnr = kwargs.opID.split('-')[1];
	    	if((opnr % lastvalue) == nr && Math.random() > 0.60){
	    		////console.log("Added");
	    		platforms[nr]._newopernr++;
	    	}
		};	
	    session.subscribe('confirmtrip',onConfirmTrip);
	    platforms[nr]._session = session;
	};



}


var platforms = [];
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
			platforms.push(new Platform());
		}
		
		lastvalue = newvalue;
	}
	//////console.log("platforms = "+counter+" - users = "+lastvalue);
}



function terminate(){
	for (var i = 0; i < platforms.length; i++) {
		platforms[i]._terminate = true;
		platforms[i]._connection.close();
	}
}

module.exports.terminate = terminate;
module.exports.tick = tick;