
var t01 = 400000;
var t05 = 4000000;
var t1 = 20000000;
var t2 = 40000000;
var t15 = 400000000;
var t120 = 4000000000;
var t1000 = 40000000000;
var t100000 = 400000000000; 


var onems = 1;
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
	    case 'GET-/client':
	 	    getClient(msg)
	 		break;
	 	case 'POST-/client':
	 		postClient(msg);
	 		break;
	 	case 'PUT-/client':
	 		putClient(msg);
	 		break;
	 	case 'DELETE-/client':
	 		deleteClient(msg);
	 		break;
	 	case 'GET-/clients':
	 		getClients(msg);
	 		break;
	 	default:
    		console.log('not found');
	 }
}

function getClient(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t1; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		process.send(msg);
	 },onems*2)	

}

function postClient(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t1; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		wampSession.publish('clients',  [], {type: "new" , opID: msg.opID});
		process.send(msg);
	 },onems*2)	

}


function putClient(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t1; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		process.send(msg);
	 },onems*5)	

}



function deleteClient(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t1; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		process.send(msg);
	 },onems*5)	

}


function getClients(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t2; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		process.send(msg);
	 },tenms)	
}