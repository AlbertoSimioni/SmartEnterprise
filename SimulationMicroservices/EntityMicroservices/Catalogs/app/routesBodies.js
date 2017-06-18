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
	    case 'GET-/catalog':
	 	    getCatalog(msg)
	 		break;
	 	case 'POST-/catalog':
	 		postCatalog(msg);
	 		break;
	 	case 'PUT-/catalog':
	 		putCatalog(msg);
	 		break;
	 	case 'DELETE-/catalog':
	 		deleteCatalog(msg);
	 		break;
	 	case 'GET-/catalogs':
	 		getCatalogs(msg);
	 		break;
	 	default:
    		console.log('not found');
	 }
}

function getCatalog(msg){
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

function postCatalog(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t1; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		wampSession.publish('catalogs',  [], {type: "new" , opID: msg.opID});
		process.send(msg);
	 },tenms)	

}


function putCatalog(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t1; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		process.send(msg);
	 },tenms/2)	

}



function deleteCatalog(msg){
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


function getCatalogs(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t25; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		process.send(msg);
	 },thoums)	
}