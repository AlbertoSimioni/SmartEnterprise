var t01 = 10000;
var t05 = 100000;
var t1 = 500000;
var t2 = 1000000;
var t15 = 10000000;
var t120 = 100000000;
var t1000 = 1000000000;
var t100000 = 10000000000; 

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
	    case 'GET-/operator':
	 	    getOperator(msg)
	 		break;
	 	case 'POST-/operator':
	 		postOperator(msg);
	 		break;
	 	case 'PUT-/operator':
	 		putOperator(msg);
	 		break;
	 	case 'DELETE-/operator':
	 		deleteOperator(msg);
	 		break;
	 	case 'GET-/operators':
	 		getOperators(msg);
	 		break;
	 	default:
    		console.log('not found');
	 }
}

function getOperator(msg){
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

function postOperator(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t1; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		wampSession.publish('operators',  [], {type: "new" , opID: msg.opID});
		process.send(msg);
	 },onems*2)	

}


function putOperator(msg){
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



function deleteOperator(msg){
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


function getOperators(msg){
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