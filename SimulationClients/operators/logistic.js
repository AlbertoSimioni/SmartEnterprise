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


var method = Logistic.prototype;
var usersCounter = 0;
var maxUsers = 20;





function Logistic() {

	this._id = 'log'+usersCounter;
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
    this._po = 0;
    this._so = 0,
    this._active = "";
    this._terminate = false;
    //Autonomous operations
    function timeout() {
	    setTimeout(function () {
	    	if(logistics[nr]._po + logistics[nr]._so > 0){

	    		var requestID = logistics[nr]._id+'-'+logistics[nr]._operationsCounter+'-A';
	    		if(logistics[nr]._po > 0 && logistics[nr]._active != "so"){
	    			timings.newRequest();
	    			//console.log("logistic so:" + nr);
	    			////console.log("so"+logistics[nr]._id);
	    			if(logistics[nr]._activestep == 0){
	    				var hrstart = process.hrtime();
	    				unirest.get(addresses.gateway+'/lodorders/currentpurchasingorders')
				        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
				        .send({ "simID": parameters.simulationID, "opID": requestID, "step" : 0})
				        .end(function(response){
				            var hrend = process.hrtime(hrstart);
	        				var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
				            timings.addTiming("GET-lodorders/currentpurchasingorders",msElapsed,requestID);
				        });
				        logistics[nr]._activestep++;
				        logistics[nr]._active = "po";
	    			}
	    			else if(logistics[nr]._activestep == 1){
	    				var hrstart = process.hrtime();
	    				unirest.post(addresses.gateway+'/lodtransports/newtrip')
				        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
				        .send({ "simID": parameters.simulationID, "opID": requestID, "step" : 0})
				        .end(function(response){
				            var hrend = process.hrtime(hrstart);
	        				var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
				            timings.addTiming("POST-lodtransports/newtrip",msElapsed,requestID);
				        });
	    				logistics[nr]._activestep++;
	    			}	
	    			else if(logistics[nr]._activestep > 1 && logistics[nr]._activestep < 11 ){
	    				var hrstart = process.hrtime();
	    				unirest.put(addresses.gateway+'/lodtransports/filltrip/lol')
				        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
				        .send({ "simID": parameters.simulationID, "opID": requestID, "step" : 0})
				        .end(function(response){
				            var hrend = process.hrtime(hrstart);
	        				var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
				            timings.addTiming("PUT-lodtransports/filltrip",msElapsed,requestID);
				        });
						logistics[nr]._activestep++;
	    			}   
	    			else if(logistics[nr]._activestep == 11){
	    				var hrstart = process.hrtime();
	    				unirest.put(addresses.gateway+'/lodtransports/confirmtrip/lol')
				        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
				        .send({ "simID": parameters.simulationID, "opID": requestID, "step" : 0})
				        .end(function(response){
				            var hrend = process.hrtime(hrstart);
	        				var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
				            timings.addTiming("PUT-lodtransports/confirmtrip",msElapsed,requestID);
				        });
	    				logistics[nr]._activestep++;
	    			}
	    			else if(logistics[nr]._activestep == 12){
	    				var hrstart = process.hrtime();
	    				unirest.get(addresses.gateway+'/lodwarehouses/currentwarehousesstate')
				        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
				        .send({ "simID": parameters.simulationID, "opID": requestID, "step" : 0})
				        .end(function(response){
				            var hrend = process.hrtime(hrstart);
	        				var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
				            timings.addTiming("GET-lodwarehouses/currentwarehousesstate",msElapsed,requestID);
				        });
	    				logistics[nr]._activestep = 0;
	    				logistics[nr]._po--;
	    				logistics[nr]._active = "";
	    			}	
	    			else{
	    				console.log("ERROR: "+"logistics[nr]._activestep PO" );
	    			}		    			 			
	    		}
	    		else if(logistics[nr]._so > 0 && logistics[nr]._active != "po"){
	    			timings.newRequest();
	    			//console.log("logistic po:" + nr);
	    			if(logistics[nr]._activestep == 0){
	    				var hrstart = process.hrtime();
	    				unirest.get(addresses.gateway+'/lodorders/currentsalesorders')
				        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
				        .send({ "simID": parameters.simulationID, "opID": requestID, "step" : 0})
				        .end(function(response){
				            var hrend = process.hrtime(hrstart);
	        				var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
				            timings.addTiming("GET-lodorders/currentsalesorders",msElapsed,requestID);
				        });
				        logistics[nr]._activestep++;
				        logistics[nr]._active = "so";
	    			}
	    			else if(logistics[nr]._activestep == 1){
	    				var hrstart = process.hrtime();
	    				unirest.post(addresses.gateway+'/lodtransports/newtrip')
				        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
				        .send({ "simID": parameters.simulationID, "opID": requestID, "step" : 0})
				        .end(function(response){
				            var hrend = process.hrtime(hrstart);
	        				var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
				            timings.addTiming("POST-lodtransports/newtrip",msElapsed,requestID);
				        });
	    				logistics[nr]._activestep++;
	    			}	
	    			else if(logistics[nr]._activestep > 1 && logistics[nr]._activestep < 11 ){
	    				var hrstart = process.hrtime();
	    				unirest.put(addresses.gateway+'/lodtransports/filltrip/lol')
				        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
				        .send({ "simID": parameters.simulationID, "opID": requestID, "step" : 0})
				        .end(function(response){
				            var hrend = process.hrtime(hrstart);
	        				var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
				            timings.addTiming("PUT-lodtransports/filltrip",msElapsed,requestID);
				        });
						logistics[nr]._activestep++;
	    			}   
	    			else if(logistics[nr]._activestep == 11){
	    				var hrstart = process.hrtime();
	    				////console.log("CONFIRMING");
	    				unirest.put(addresses.gateway+'/lodtransports/confirmtrip/lol')
				        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
				        .send({ "simID": parameters.simulationID, "opID": requestID, "step" : 0})
				        .end(function(response){
				            var hrend = process.hrtime(hrstart);
	        				var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
				            timings.addTiming("PUT-lodtransports/confirmtrip",msElapsed,requestID);
				        });
	    				logistics[nr]._activestep++;
	    			}
	    			else if(logistics[nr]._activestep == 12){
	    				var hrstart = process.hrtime();
	    				unirest.get(addresses.gateway+'/lodwarehouses/currentwarehousesstate')
				        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
				        .send({ "simID": parameters.simulationID, "opID": requestID, "step" : 0})
				        .end(function(response){
				            var hrend = process.hrtime(hrstart);
	        				var msElapsed = (hrend[0]*1000 + hrend[1]/1000000).toFixed(2);
				            timings.addTiming("GET-lodwarehouses/currentwarehousesstate",msElapsed,requestID);
				        });
	    				logistics[nr]._activestep = 0;
	    				logistics[nr]._so--;
	    				logistics[nr]._active = "";
	    			}
	    			else{
	    				console.log("ERROR: "+"logistics[nr]._activestep SO" );
	    			}		

	    		}
	    		logistics[nr]._operationsCounter++;
	    	}
	    	if(!logistics[nr]._terminate){
	        	timeout();
	    	}
	    }, parameters.requestsFrequency);
	}

	timeout();

	//asynch operations
	function onOpen(session, details) {
		////console.log(logistics[nr]._id);

		function onConfirmSalesOrder(args, kwargs) {
			//console.log("ONCONFIRMSALESORDER");
			var opnr = kwargs.opID.split('-')[1];
	    	if((opnr % lastvalue) == nr){
	    		logistics[nr]._so++;
	    	}
		};

		function onConfirmPurchasingOrder(args, kwargs) {
			//console.log("ONCONFIRMPURCHASINGORDER")
			var opnr = kwargs.opID.split('-')[1];
	    	if((opnr % lastvalue) == nr){
	    		logistics[nr]._po++;
	    	}
		};	
	    session.subscribe('confirmsalesorder', onConfirmSalesOrder);
	    session.subscribe('confirmpurchasingorder',onConfirmPurchasingOrder);
	    logistics[nr]._session = session;
	};



}


var logistics = [];
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
			logistics.push(new Logistic());
		}
		
		lastvalue = newvalue;
	}
	//////console.log("logistics = "+counter+" - users = "+lastvalue);
}

function terminate(){
	for (var i = 0; i < logistics.length; i++) {
		logistics[i]._terminate = true;
		logistics[i]._connection.close();
	}
}

module.exports.terminate = terminate;
module.exports.tick = tick;