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

    //Autonomous operations
    function timeout() {
	    setTimeout(function () {
	    	if(sellers[nr]._operationsCounter % 11 < 8){
	    		//NEW CATALOG
	    		if(sellers[nr]._activestep == 0){
		    		unirest.post('http://147.162.226.101:30008/sedcatalogs/newcatalog')
			        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
			        .send({ "simID": parameters.simulationID, "opID": sellers[nr]._id+'-'+sellers[nr]._activeOpCounter+'-A', "step" : 0})
			        .end(function(response){
			            console.log(response.body);
			        });
			        sellers[nr]._activestep++;
		    	}
		    	else if(sellers[nr]._activestep > 0 && sellers[nr]._activestep <10){
		    		unirest.put('http://147.162.226.101:30008/sedcatalogs/addcatalog/lol')
			        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
			        .send({ "simID": parameters.simulationID, "opID": sellers[nr]._id+'-'+sellers[nr]._activeOpCounter+'-A', "step" : 0})
			        .end(function(response){
			            console.log(response.body);
			        });
			        sellers[nr]._activestep++;
		    	}
		    	else{
		    		unirest.get('http://147.162.226.101:30008/sedcatalogs/currentcatalogs')
			        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
			        .send({ "simID": parameters.simulationID, "opID": sellers[nr]._id+'-'+sellers[nr]._activeOpCounter+'-A', "step" : 0})
			        .end(function(response){
			            console.log(response.body);
			        });
		    		sellers[nr]._activestep = 0;
		    		sellers[nr]._operationsCounter++;
		    	}
	    	}
	    	else{
	    		//ORDERS
				if(sellers[nr]._activestep == 0){
		    		unirest.post('http://147.162.226.101:30008/sedorders/newsalesorder')
			        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
			        .send({ "simID": parameters.simulationID, "opID": sellers[nr]._id+'-'+sellers[nr]._activeOpCounter+'-A', "step" : 0})
			        .end(function(response){
			            console.log(response.body);
			        });
			        sellers[nr]._activestep++;
		    	}
		    	else if(sellers[nr]._activestep > 0 && sellers[nr]._activestep <10){
		    		unirest.put('http://147.162.226.101:30008/sedorders/addsalesorder/lol')
			        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
			        .send({ "simID": parameters.simulationID, "opID": sellers[nr]._id+'-'+sellers[nr]._activeOpCounter+'-A', "step" : 0})
			        .end(function(response){
			            console.log(response.body);
			        });
			        sellers[nr]._activestep++;
		    	}
		    	else if(sellers[nr]._activestep == 9){
		    		unirest.put('http://147.162.226.101:30008/sedorders/confirmsalesorder/lol')
			        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
			        .send({ "simID": parameters.simulationID, "opID": sellers[nr]._id+'-'+sellers[nr]._activeOpCounter+'-A', "step" : 0})
			        .end(function(response){
			            console.log(response.body);
			        });
			        sellers[nr]._activestep++;
		    	}
		    	else{
		    		unirest.get('http://147.162.226.101:30008/sedorders/currentsalesorders')
			        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
			        .send({ "simID": parameters.simulationID, "opID": sellers[nr]._id+'-'+sellers[nr]._activeOpCounter+'-A', "step" : 0})
			        .end(function(response){
			            console.log(response.body);
			        });
		    		sellers[nr]._activestep = 0;
		    		sellers[nr]._operationsCounter++;
		    	}
	    	}
	    	console.log(sellers[nr]._id+'-'+sellers[nr]._activeOpCounter+'-A');
	        sellers[nr]._activeOpCounter++;
	        timeout();
	    }, parameters.requestsFrequency);
	}

	timeout();

	//asynch operations
	function onOpen(session, details) {
		console.log(sellers[nr]._id);

	    function onAvailabilities(args, kwargs) {
	    	console.log("ONAVAILABILITIES");
	    	var opnr = kwargs.opID.split('-')[1];
	    	if((opnr % lastvalue) == nr){
		    	unirest.get('http://147.162.226.101:30008/sedavailabilities/currentavailabilities')
		        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
		        .send({ "simID": parameters.simulationID, "opID": sellers[nr]._id+'-'+sellers[nr]._reactOpCounter+'-R', "step" : 0})
		        .end(function(response){
		            console.log(response.body);
		        });
		        console.log(sellers[nr]._id+'-'+sellers[nr]._reactOpCounter+'-R');
		       	sellers[nr]._reactOpCounter++;
	    	}
		};


		function onPurchasingOrders(args, kwargs) {
			console.log("ONPURCHASINGORDERS")
	    	var opnr = kwargs.opID.split('-')[1];
	    	if((opnr % lastvalue) == nr){
		    	unirest.get('http://147.162.226.101:30008/sedorders/currentpurchasingorders')
		        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
		        .send({ "simID": parameters.simulationID, "opID": sellers[nr]._id+'-'+sellers[nr]._reactOpCounter+'-R', "step" : 0})
		        .end(function(response){
		            console.log(response.body);
		        });
		        console.log(sellers[nr]._id+'-'+sellers[nr]._reactOpCounter+'-R');
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
	console.log("sellers = "+counter+" - users = "+lastvalue);
}

module.exports.tick = tick;