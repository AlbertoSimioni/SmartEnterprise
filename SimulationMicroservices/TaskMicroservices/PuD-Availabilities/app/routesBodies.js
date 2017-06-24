var unirest = require('unirest');
var t01 = 10000;
var t05 = 100000;
var t1 = 500000;
var t2 = 1000000;
var t15 = 10000000;
var t120 = 100000000;
var t1000 = 1000000000;
var t100000 = 10000000000; 


var tenms = 10;
var thoums = 1000;

var crossbar = require('../config/crossbar'); 
var autobahn = require('autobahn');

var connection = new autobahn.Connection({
         url: crossbar.crossbarUrl,
         realm: 'realm1'
      });



var wampSession;

connection.open();
connection.onopen = function (session) {

    wampSession = session;
}

connection.onclose = function (reason, details) {
   connection.open();
};



module.exports = function (msg) {
	msg.type = "start";
	process.send(msg);
	switch(msg.idRequest.split("_")[0]){
	    case 'GET-/currentavailabilities':
	 	    getCurrentAvailabilities(msg)
	 		break;
	 	case 'POST-/newavailability':
	 	    postNewavailability(msg)
	 		break;
	 	case 'PUT-/addavailability':
	 	    putAddavailability(msg)
	 		break;
	 	case 'DELETE-/availability':
	 	    deleteAvailability(msg)
	 		break;
	 	default:
    		console.log('not found');
	 }
}

function getCurrentAvailabilities(msg){
	for (var i = 0; i < t1; i++) 
	{}

	msg.type = "step1";
	process.send(msg);

        unirest.get('http://availabilities:8080/availability/lol')
	 //unirest.get('http://localhost:8090/availability/lol')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": msg.simID, "opID": msg.opID, "step" : msg.step+1})
        .end(function(response){
        	for (var i = 0; i < t15/4; i++) 
		 	{}
		 	msg.answer = "a";
			msg.type = "end";
			process.send(msg);
        });
}


function postNewavailability(msg){
	for (var i = 0; i < t1; i++) 
	{}

	msg.type = "step1";
	process.send(msg);

        unirest.post('http://availabilities:8080/availability')
	 //unirest.get('http://localhost:8090/availability/lol')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": msg.simID, "opID": msg.opID, "step" : msg.step+1})
        .end(function(response){
        	for (var i = 0; i < t1; i++) 
		 	{}
		 	msg.answer = "a";
			msg.type = "end";
			process.send(msg);
        });
}


function putAddavailability(msg){
	for (var i = 0; i < t1/5; i++) 
	{}

	msg.type = "step1";
	process.send(msg);

        unirest.put('http://availabilities:8080/availability/lol')
	 //unirest.get('http://localhost:8090/availability/lol')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": msg.simID, "opID": msg.opID, "step" : msg.step+1})
        .end(function(response){
        	for (var i = 0; i < t1/5; i++) 
		 	{}
		 	msg.answer = "a";
			msg.type = "end";
			process.send(msg);
        });
}


function deleteAvailability(msg){
	for (var i = 0; i < t1; i++) 
	{}

	msg.type = "step1";
	process.send(msg);

     unirest.delete('http://availabilities:8080/availability/lol')
	 //unirest.get('http://localhost:8090/availability/lol')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": msg.simID, "opID": msg.opID, "step" : msg.step+1})
        .end(function(response){
        	for (var i = 0; i < t1; i++) 
		 	{}
		 	msg.answer = "a";
			msg.type = "end";
			process.send(msg);
        });
}
