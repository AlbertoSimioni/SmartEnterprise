module.exports = function (msg) {
	msg.type = "start";
	process.send(msg);
	switch(msg.idRequest.split("-")[0]){
	    case 'long':
	 	    long(msg)
	 		break;
	 	case 'short':
	 		short(msg);
	 		break;
	 	default:
    		console.log('not found');
	 }
}

function long(msg){
	 for (var i = 0; i < 100000; i++) 
	 {}
	 setTimeout(function(){
	 	for (var i = 0; i < 100000; i++) 
	 	{}
	 	msg.answer = "AAAAA";
		msg.type = "end";
		process.send(msg);
	 },10000)	

}

function short(msg){
	for (var i = 0; i < 100000; i++) 
	{}
	setTimeout(function(){
	    for (var i = 0; i < 100000; i++) 
	 	{}
	 	msg.answer = "a"
	 	msg.type = "end";
	 	process.send(msg);
	 	},100)
}