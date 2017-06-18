
var t01 = 400000;
var t05 = 4000000;
var t1 = 20000000;
var t2 = 40000000;
var t15 = 400000000;
var t120 = 4000000000;
var t1000 = 40000000000;
var t100000 = 400000000000; 

var tenms = 10;
var hundrms = 100;
var thoums = 1000;
var tenthoums = 10000;

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
	    case 'GET-/ware':
	 	    getWare(msg)
	 		break;
	 	case 'POST-/ware':
	 		postWare(msg);
	 		break;
	 	case 'PUT-/ware':
	 		putWare(msg);
	 		break;
	 	case 'DELETE-/ware':
	 		deleteWare(msg);
	 		break;
	 	case 'GET-/wares':
	 		getWares(msg);
	 		break;
	 	case 'GET-/activewares':
	 		getActiveWares(msg);
	 		break;
	 	default:
    		console.log('not found');
	 }
}

function getWare(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t1; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		process.send(msg);
	 },tenms)	

}

function postWare(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t1; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		wampSession.publish('wares',  [], {type: "new" , opID: msg.opID});
		process.send(msg);
	 },tenms*4)	

}


function putWare(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t1; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		process.send(msg);
	 },tenms*9)	

}



function deleteWare(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t1; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		process.send(msg);
	 },tenms*9)	

}


function getWares(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t120; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		process.send(msg);
	 },tenthoums)	
}

function getActiveWares(msg){
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
