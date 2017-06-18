var t01 = 100000;
var t05 = 1000000;
var t1 = 5000000;
var t2 = 10000000;
var t15 = 100000000;
var t120 = 1000000000;
var t1000 = 10000000000;
var t100000 = 100000000000; 

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
	    case 'GET-/availability':
	 	    getAvailability(msg)
	 		break;
	 	case 'POST-/availability':
	 		postAvailability(msg);
	 		break;
	 	case 'PUT-/availability':
	 		putAvailability(msg);
	 		break;
	 	case 'DELETE-/availability':
	 		deleteAvailability(msg);
	 		break;
	 	case 'GET-/availabilities':
	 		getAvailabilities(msg);
	 		break;
	 	default:
    		console.log('not found');
	 }
}

function getAvailability(msg){
	 for (var i = 0; i < t01; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t1; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		process.send(msg);
	 },tenms)	

}

function postAvailability(msg){
	 for (var i = 0; i < t05; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t05; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		wampSession.publish('availabilities',  [], {type: "new" , opID: msg.opID});
		process.send(msg);
	 },tenms*2)	

}


function putAvailability(msg){
	 for (var i = 0; i < t05; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t05; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		process.send(msg);
	 },tenms*5)	

}



function deleteAvailability(msg){
	 for (var i = 0; i < t05; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t1; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		process.send(msg);
	 },tenms*5)	

}


function getAvailabilities(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t15; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		process.send(msg);
	 },thoums*6)	
}