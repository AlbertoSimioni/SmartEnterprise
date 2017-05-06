var csv = require("fast-csv");
const fs = require('fs');
var parameters = require('./config/parameters'); 
var timings = {};


var totalRequests = 0;
var requestsReplied = 0;


var terminated = false;



var operationids = [];


function getMaxOfArray(numArray) {
	var max = -1;
	for (var i = 0; i < numArray.length; i++) {
		var num = Number(numArray[i].time);
		if(max < num)
			max = num;

	}
	return max;
  //return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
	var min = Number(numArray[0].time);
	for (var i = 1; i < numArray.length; i++) {
		var num = Number(numArray[i].time);
		if(min > num)
			min = num;

	}
	return min
  //return Math.min.apply(null, numArray);
}


function getAvgOfArray(numArray) {
	var total = 0;
	for(var i = 0; i < numArray.length; i++) {
	    total += Number(numArray[i].time);
	}
	var avg = total / numArray.length;
	return avg;
}


function getMedianOfArray(numArray){
	return numArray[Math.floor((numArray.length)/2)].time;
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

	var csvStream2 = csv.createWriteStream({headers: true}),
	writableStream2 = fs.createWriteStream(parameters.simulationID+"-results-complete.csv");
	 
	writableStream2.on("finish", function(){
	  console.log("DONE!");
	});
	csvStream2.pipe(writableStream2);
	for (var i = 0; i < operationids.length; i++) {
		var current_timings = timings[operationids[i]];
		var id = operationids[i];
		for(var j = 0; j < current_timings.length; j++){
			csvStream2.write({"id": id,"time":current_timings[j].time,"operationdID":current_timings[j].requestID});
		}
	}
	csvStream2.end();
}

function addTiming(operationdID, time,requestID){
	requestsReplied++;
	if(!timings[operationdID]) { 
		timings[operationdID] = [{"time":time,"requestID":requestID}];
		operationids.push(operationdID);
	}
	else{
		timings[operationdID].push({"time":time,"requestID":requestID});
	}
	console.log(totalRequests+ " - " +requestsReplied);
	//if(terminated && (requestsReplied == totalRequests)){
	if(requestsReplied == totalRequests){
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