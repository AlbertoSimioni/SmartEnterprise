var unirest = require('unirest');

var t01 = 400000;
var t05 = 4000000;
var t1 = 20000000;
var t2 = 40000000;
var t15 = 400000000;
var t120 = 4000000000;
var t1000 = 40000000000;
var t100000 = 400000000000; 

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
	    case 'GET-/currentcatalogs':
	 	    getCurrentcatalogs(msg)
	 		break;
	 	case 'POST-/newcatalog':
	 	    postNewcatalog(msg)
	 		break;
	 	case 'PUT-/addcatalog':
	 	    putAddcatalog(msg)
	 		break;
	 	case 'DELETE-/catalog':
	 	    deleteCatalog(msg)
	 		break;
	 	default:
    		console.log('not found');
	 }
}

function getCurrentcatalogs(msg){
	for (var i = 0; i < t1; i++) 
	{}

	msg.type = "step1";
	process.send(msg);

        unirest.get('http://catalogs:8080/catalog/lol')
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


function postNewcatalog(msg){
	for (var i = 0; i < t01; i++) 
	{}

	msg.type = "step1";
	process.send(msg);

        unirest.post('http://catalogs:8080/catalog')
	 //unirest.get('http://localhost:8090/availability/lol')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": msg.simID, "opID": msg.opID, "step" : msg.step+1})
        .end(function(response){
        	for (var i = 0; i < t1/2; i++) 
		 	{}
		 	msg.answer = "a";
			msg.type = "end";
			process.send(msg);
        });
}



function putAddcatalog(msg){
	for (var i = 0; i < t01; i++) 
	{}

	msg.type = "step1";
	process.send(msg);

        unirest.put('http://catalogs:8080/catalog/lol')
	 //unirest.get('http://localhost:8090/availability/lol')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": msg.simID, "opID": msg.opID, "step" : msg.step+1})
        .end(function(response){
        	for (var i = 0; i < t1/2; i++) 
		 	{}
		 	msg.answer = "a";
			msg.type = "end";
			process.send(msg);
        });
}



function deleteCatalog(msg){
	for (var i = 0; i < t1; i++) 
	{}

	msg.type = "step1";
	process.send(msg);

        unirest.delete('http://catalogs:8080/catalog/lol')
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

