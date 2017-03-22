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
    this._queue = [];

    //Autonomous operations
    function timeout() {
	    setTimeout(function () {
	    	if(logistics[nr]._queue.length > 0){
	    		if(logistics[nr]._queue[0] == "PO"){
	    			if(logistics[nr]._activestep == 0){
	    				unirest.get('http://147.162.226.101:30008/lodorders/currentpurchasingorders')
				        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
				        .send({ "simID": parameters.simulationID, "opID": logistics[nr]._id+'-'+logistics[nr]._operationsCounter+'-A', "step" : 0})
				        .end(function(response){
				            console.log(response.body);
				        });
				        logistics[nr]._activestep++;
	    			}
	    			if(logistics[nr]._activestep == 1){
	    				unirest.post('http://147.162.226.101:30008/lodtransports/newtrip')
				        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
				        .send({ "simID": parameters.simulationID, "opID": logistics[nr]._id+'-'+logistics[nr]._operationsCounter+'-A', "step" : 0})
				        .end(function(response){
				            console.log(response.body);
				        });
	    				logistics[nr]._activestep++;
	    			}	
	    			if(logistics[nr]._activestep > 1 && logistics[nr]._activestep < 11 ){
	    				unirest.put('http://147.162.226.101:30008/lodtransports/filltrip/lol')
				        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
				        .send({ "simID": parameters.simulationID, "opID": logistics[nr]._id+'-'+logistics[nr]._operationsCounter+'-A', "step" : 0})
				        .end(function(response){
				            console.log(response.body);
				        });
						logistics[nr]._activestep++;
	    			}   
	    			if(logistics[nr]._activestep == 11){
	    				unirest.put('http://147.162.226.101:30008/lodtransports/confirmtrip/lol')
				        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
				        .send({ "simID": parameters.simulationID, "opID": logistics[nr]._id+'-'+logistics[nr]._operationsCounter+'-A', "step" : 0})
				        .end(function(response){
				            console.log(response.body);
				        });
	    				logistics[nr]._activestep++;
	    			}
	    			if(logistics[nr]._activestep == 12){
	    				unirest.get('http://147.162.226.101:30008/lodwarehouses/currentwarehousesstate')
				        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
				        .send({ "simID": parameters.simulationID, "opID": logistics[nr]._id+'-'+logistics[nr]._operationsCounter+'-A', "step" : 0})
				        .end(function(response){
				            console.log(response.body);
				        });
	    				logistics[nr]._activestep = 0;
	    				logistics[nr]._queue.shift();
	    			}			    			 			
	    		}
	    		else{
	    			if(logistics[nr]._activestep == 0){
	    				unirest.get('http://147.162.226.101:30008/lodorders/currentsalesorders')
				        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
				        .send({ "simID": parameters.simulationID, "opID": logistics[nr]._id+'-'+logistics[nr]._operationsCounter+'-A', "step" : 0})
				        .end(function(response){
				            console.log(response.body);
				        });
				        logistics[nr]._activestep++;
	    			}
	    			if(logistics[nr]._activestep == 1){
	    				unirest.post('http://147.162.226.101:30008/lodtransports/newtrip')
				        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
				        .send({ "simID": parameters.simulationID, "opID": logistics[nr]._id+'-'+logistics[nr]._operationsCounter+'-A', "step" : 0})
				        .end(function(response){
				            console.log(response.body);
				        });
	    				logistics[nr]._activestep++;
	    			}	
	    			if(logistics[nr]._activestep > 1 && logistics[nr]._activestep < 11 ){
	    				unirest.put('http://147.162.226.101:30008/lodtransports/filltrip/lol')
				        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
				        .send({ "simID": parameters.simulationID, "opID": logistics[nr]._id+'-'+logistics[nr]._operationsCounter+'-A', "step" : 0})
				        .end(function(response){
				            console.log(response.body);
				        });
						logistics[nr]._activestep++;
	    			}   
	    			if(logistics[nr]._activestep == 11){
	    				unirest.put('http://147.162.226.101:30008/lodtransports/confirmtrip/lol')
				        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
				        .send({ "simID": parameters.simulationID, "opID": logistics[nr]._id+'-'+logistics[nr]._operationsCounter+'-A', "step" : 0})
				        .end(function(response){
				            console.log(response.body);
				        });
	    				logistics[nr]._activestep++;
	    			}
	    			if(logistics[nr]._activestep == 12){
	    				unirest.get('http://147.162.226.101:30008/lodwarehouses/currentwarehousesstate')
				        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
				        .send({ "simID": parameters.simulationID, "opID": logistics[nr]._id+'-'+logistics[nr]._operationsCounter+'-A', "step" : 0})
				        .end(function(response){
				            console.log(response.body);
				        });
	    				logistics[nr]._activestep = 0;
	    				logistics[nr]._queue.shift();
	    			}		

	    		}
	    		logistics[nr]._operationsCounter++;
	    	}

	        timeout();
	    }, parameters.requestsFrequency);
	}

	timeout();

	//asynch operations
	function onOpen(session, details) {
		console.log(logistics[nr]._id);

		function onConfirmSalesOrder(args, kwargs) {
			console.log("ONCONFIRMSALESORDER");
			var opnr = kwargs.opID.split('-')[1];
	    	if((opnr % lastvalue) == nr){
	    		logistics[nr]_queue.put("SO");
	    	}
		};

		function onConfirmPurchasingOrder(args, kwargs) {
			console.log("ONCONFIRMPURCHASINGORDER")
			var opnr = kwargs.opID.split('-')[1];
	    	if((opnr % lastvalue) == nr){
	    		logistics[nr]_queue.put("PO");
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
	console.log("logistics = "+counter+" - users = "+lastvalue);
}

module.exports.tick = tick;