var t01 = 1000;
var t1 = 50000;
var t2 = 100000;
var t15 = 1000000;
var t120 = 10000000;
var t1000 = 100000000;
var t100000 = 1000000000; 

var onems = 1;
var tenms = 10;
var hundrms = 100;
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
	    case 'GET-/unloadingplan':
	 	    getUnloadingplan(msg)
	 		break;
	 	case 'POST-/unloadingplan':
	 		postUnloadingplan(msg);
	 		break;
	 	case 'PUT-/unloadingplan':
	 		putUnloadingplan(msg);
	 		break;
	 	case 'DELETE-/unloadingplan':
	 		deleteUnloadingplan(msg);
	 		break;
	 	case 'GET-/unloadingplans':
	 		getUnloadingplans(msg);
	 		break;
	 	default:
    		console.log('not found');
	 }
}

function getUnloadingplan(msg){
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

function postUnloadingplan(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t1; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		wampSession.publish('unloadingplans',  [], {type: "new" , opID: msg.opID});
		process.send(msg);
	 },onems*4)	

}


function putUnloadingplan(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t1; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		process.send(msg);
	 },onems*6)	

}



function deleteUnloadingplan(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t1; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		process.send(msg);
	 },onems*6)	

}


function getUnloadingplans(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t15; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		process.send(msg);
	 },hundrms)	
}