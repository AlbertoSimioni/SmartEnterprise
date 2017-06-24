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
	    case 'GET-/paymentin':
	 	    getPaymentin(msg)
	 		break;
	 	case 'POST-/paymentin':
	 		postPaymentin(msg);
	 		break;
	 	case 'PUT-/paymentin':
	 		putPaymentin(msg);
	 		break;
	 	case 'DELETE-/paymentin':
	 		deletePaymentin(msg);
	 		break;
	 	case 'GET-/paymentsin':
	 		getPaymentsin(msg);
	 		break;
	 	default:
    		console.log('not found');
	 }
}

function getPaymentin(msg){
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

function postPaymentin(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t1; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		wampSession.publish('paymentsin',  [], {type: "new" , opID: msg.opID});
		process.send(msg);
	 },tenms*2)	

}


function putPaymentin(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t1; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		process.send(msg);
	 },tenms*5)	

}



function deletePaymentin(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t1; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		process.send(msg);
	 },tenms*5)	

}


function getPaymentsin(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t120; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		process.send(msg);
	 },thoums*6)	
}