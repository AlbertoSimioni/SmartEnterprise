var csv = require("fast-csv");
const fs = require('fs');
var parameters = require('./config/parameters'); 
var timings = {};


var totalRequests = 0;
var requestsReplied = 0;


var terminated = false;



var operationids = [];


function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}


function getAvgOfArray(numArray) {
	var total = 0;
	for(var i = 0; i < numArray.length; i++) {
	    total += Number(numArray[i]);
	}
	var avg = total / numArray.length;
	return avg;
}


function getMedianOfArray(numArray){
	return numArray[Math.floor((numArray.length)/2)];
}





function terminate(){
	terminated = true;

}


function writeToFile(){
	var csvStream = csv.createWriteStream({headers: true}),
	    writableStream = fs.createWriteStream(parameters.simulationID+"-results.csv");
	 
	writableStream.on("finish", function(){
	  console.log("DONE!");
	});
	 
	csvStream.pipe(writableStream);
	for (var i = 0; i < operationids.length; i++) {
		var min = getMinOfArray(timings[operationids[i]]);
		var id = operationids[i];
		var max = getMaxOfArray(timings[operationids[i]]);
		var avg = getAvgOfArray(timings[operationids[i]]);
		var med = getMedianOfArray(timings[operationids[i]]);
		var counter = timings[operationids[i]].length
		csvStream.write({"id": id,"min":min,"max":max,"avg":avg,"med":med,"counter":counter});
	}
	csvStream.end();
}

function addTiming(operationdID, time){
	requestsReplied++;
	if(!timings[operationdID]) { 
		timings[operationdID] = [time];
		operationids.push(operationdID);
	}
	else{
		timings[operationdID].push(time);
	}
	console.log(totalRequests+ " - " +requestsReplied);
	if(terminated && (requestsReplied == totalRequests)){
		writeToFile();
		console.log("WRITTEN");
	}
}


function newRequest(){
	totalRequests++;
}


module.exports.terminate = terminate;
module.exports.addTiming = addTiming;

module.exports.newRequest = newRequest;