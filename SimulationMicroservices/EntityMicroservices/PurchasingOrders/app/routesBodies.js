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
	    case 'GET-/purchasingorder':
	 	    getPurchasingorder(msg)
	 		break;
	 	case 'POST-/purchasingorder':
	 		postPurchasingorder(msg);
	 		break;
	 	case 'PUT-/purchasingorder':
	 		putPurchasingorder(msg);
	 		break;
	 	case 'DELETE-/purchasingorder':
	 		deletePurchasingorder(msg);
	 		break;
	 	case 'GET-/purchasingorders':
	 		getPurchasingorders(msg);
	 		break;
	 	default:
    		console.log('not found');
	 }
}

function getPurchasingorder(msg){
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

function postPurchasingorder(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t1; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		wampSession.publish('purchasingorders',  [], {type: "new" , opID: msg.opID});
		process.send(msg);
	 },onems*4)	

}


function putPurchasingorder(msg){
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



function deletePurchasingorder(msg){
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


function getPurchasingorders(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t120/2; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		process.send(msg);
	 },thoums/2)	
}