
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
	    case 'GET-/salesorder':
	 	    getSalesorder(msg)
	 		break;
	 	case 'POST-/salesorder':
	 		postSalesorder(msg);
	 		break;
	 	case 'PUT-/salesorder':
	 		putSalesorder(msg);
	 		break;
	 	case 'DELETE-/salesorder':
	 		deleteSalesorder(msg);
	 		break;
	 	case 'GET-/salesorders':
	 		getSalesorders(msg);
	 		break;
	 	default:
    		console.log('not found');
	 }
}

function getSalesorder(msg){
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

function postSalesorder(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t1; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		wampSession.publish('salesorders',  [], {type: "new" , opID: msg.opID});
		process.send(msg);
	 },onems*4)	

}


function putSalesorder(msg){
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



function deleteSalesorder(msg){
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


function getSalesorders(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t15; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		process.send(msg);
	 },thoums/2)	
}