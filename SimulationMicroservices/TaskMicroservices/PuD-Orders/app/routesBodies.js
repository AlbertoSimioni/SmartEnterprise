var unirest = require('unirest');


var t01 = 1000;
var t05 = 10000;
var t1 = 50000;
var t2 = 100000;
var t15 = 1000000;
var t120 = 10000000;
var t1000 = 100000000;
var t100000 = 1000000000; 

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
	    case 'GET-/currentpurchasingorders':
	 	    getCurrentpurchasingorders(msg)
	 		break;
	 	case 'GET-/currentsalesorders':
	 	    getCurrentsalesorders(msg)
	 		break;
	 	case 'PUT-/confirmpurchasingorder':
	 	    putConfirmpurchasingorder(msg)
	 		break;
	 	case 'POST-/newpurchasingorder':
	 	    postNewpurchasingorder(msg)
	 		break;
	 	case 'PUT-/addpurchasingorder':
	 	    putAddpurchasingorder(msg)
	 		break;
	 	case 'DELETE-/purchasingorder':
	 	    deletePurchasingorder(msg)
	 		break;
	 	default:
    		console.log('not found');
	 }
}

function getCurrentpurchasingorders(msg){
	for (var i = 0; i < t01; i++) 
	{}

	msg.type = "step1";
	process.send(msg);

        unirest.get('http://purchasingorders:8080/purchasingorder/lol')
	 //unirest.get('http://localhost:8090/availability/lol')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": msg.simID, "opID": msg.opID, "step" : msg.step+1})
        .end(function(response){
        	for (var i = 0; i < t15/3; i++) 
		 	{}
		 	msg.answer = "a";
			msg.type = "end";
			process.send(msg);
        });
}

function getCurrentsalesorders(msg){
	for (var i = 0; i < t01; i++) 
	{}

	msg.type = "step1";
	process.send(msg);

        unirest.get('http://salesorders:8080/salesorder/lol')
	 //unirest.get('http://localhost:8090/availability/lol')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": msg.simID, "opID": msg.opID, "step" : msg.step+1})
        .end(function(response){
        	for (var i = 0; i < t15/3; i++) 
		 	{}
		 	msg.answer = "a";
			msg.type = "end";
			process.send(msg);
        });
}

function putConfirmpurchasingorder(msg){
	for (var i = 0; i < t01; i++) 
	{}

	msg.type = "step1";
	process.send(msg);

     unirest.put('http://purchasingorders:8080/purchasingorder/lol')
	 //unirest.get('http://localhost:8090/availability/lol')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": msg.simID, "opID": msg.opID, "step" : msg.step+1})
        .end(function(response){
        	for (var i = 0; i < t1; i++) 
		 	{}
		 	msg.answer = "a";
			msg.type = "end";
			wampSession.publish('confirmpurchasingorder',  [], {type: "confirm" , opID: msg.opID});

			process.send(msg);
        });
}


function postNewpurchasingorder(msg){
	for (var i = 0; i < t05; i++) 
	{}

	msg.type = "step1";
	process.send(msg);

      unirest.post('http://purchasingorders:8080/purchasingorder')
	 //unirest.get('http://localhost:8090/availability/lol')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": msg.simID, "opID": msg.opID, "step" : msg.step+1})
        .end(function(response){
        	for (var i = 0; i < t05; i++) 
		 	{}
		 	msg.answer = "a";
			msg.type = "end";
			process.send(msg);
        });
}

function putAddpurchasingorder(msg){
	for (var i = 0; i < t05; i++) 
	{}

	msg.type = "step1";
	process.send(msg);

        unirest.put('http://purchasingorders:8080/purchasingorder/lol')
	 //unirest.get('http://localhost:8090/availability/lol')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": msg.simID, "opID": msg.opID, "step" : msg.step+1})
        .end(function(response){
        	for (var i = 0; i < t05; i++) 
		 	{}
		 	msg.answer = "a";
			msg.type = "end";
			process.send(msg);
        });
}

function deletePurchasingorder(msg){
	for (var i = 0; i < t05; i++) 
	{}

	msg.type = "step1";
	process.send(msg);

     unirest.delete('http://purchasingorders:8080/purchasingorder/lol')
	 //unirest.get('http://localhost:8090/availability/lol')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": msg.simID, "opID": msg.opID, "step" : msg.step+1})
        .end(function(response){
        	for (var i = 0; i < t05; i++) 
		 	{}
		 	msg.answer = "a";
			msg.type = "end";
			process.send(msg);
        });
}