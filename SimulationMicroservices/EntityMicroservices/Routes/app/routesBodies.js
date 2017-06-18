
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
	    case 'GET-/route':
	 	    getRoute(msg)
	 		break;
	 	case 'POST-/route':
	 		postRoute(msg);
	 		break;
	 	case 'PUT-/route':
	 		putRoute(msg);
	 		break;
	 	case 'DELETE-/route':
	 		deleteRoute(msg);
	 		break;
	 	case 'GET-/routes':
	 		getRoutes(msg);
	 		break;
	 	default:
    		console.log('not found');
	 }
}

function getRoute(msg){
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

function postRoute(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t1; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		wampSession.publish('routes',  [], {type: "new" , opID: msg.opID});
		process.send(msg);
	 },onems*2)	

}


function putRoute(msg){
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



function deleteRoute(msg){
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


function getRoutes(msg){
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