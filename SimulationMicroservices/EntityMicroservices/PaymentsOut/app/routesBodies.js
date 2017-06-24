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
	    case 'GET-/paymentout':
	 	    getPaymentout(msg)
	 		break;
	 	case 'POST-/paymentout':
	 		postPaymentout(msg);
	 		break;
	 	case 'PUT-/paymentout':
	 		putPaymentout(msg);
	 		break;
	 	case 'DELETE-/paymentout':
	 		deletePaymentout(msg);
	 		break;
	 	case 'GET-/paymentsout':
	 		getPaymentsout(msg);
	 		break;
	 	default:
    		console.log('not found');
	 }
}

function getPaymentout(msg){
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

function postPaymentout(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t1; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		wampSession.publish('paymentsout',  [], {type: "new" , opID: msg.opID});
		process.send(msg);
	 },tenms*2)	

}


function putPaymentout(msg){
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



function deletePaymentout(msg){
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


function getPaymentsout(msg){
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