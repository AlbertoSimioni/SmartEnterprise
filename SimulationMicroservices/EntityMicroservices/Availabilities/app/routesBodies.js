var t01 = 1000;
var t1 = 50000;
var t2 = 100000;
var t15 = 1000000;
var t120 = 10000000;
var t1000 = 100000000;
var t100000 = 1000000000; 

var tenms = 10;
var thoums = 1000;

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

function postAvailability(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t1; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		process.send(msg);
	 },tenms*2)	

}


function putAvailability(msg){
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



function deleteAvailability(msg){
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


function getAvailabilities(msg){
	 for (var i = 0; i < t1; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < t1; i++) 
	 	{}
	 	msg.answer = "a";
		msg.type = "end";
		process.send(msg);
	 },thoums*6)	
}