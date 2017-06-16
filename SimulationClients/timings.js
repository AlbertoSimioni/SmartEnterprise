var csv = require("fast-csv");
const fs = require('fs');
var parameters = require('./config/parameters'); 
var timings = {};
var datetime = require('node-datetime');

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
}

function getMinOfArray(numArray) {
	var min = Number(numArray[0].time);
	for (var i = 1; i < numArray.length; i++) {
		var num = Number(numArray[i].time);
		if(min > num)
			min = num;

	}
	return min
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

process.on('SIGINT', function() {
    console.log("Caught interrupt signal");
    if(!wrote){
	  	writeToFileActive();
	  	writeToFileReactive();
	  	wrote = true;
	}
	//process.exit();
});



var wrote = false;
process.on('beforeExit', (code) => {
	if(!wrote){
  		writeToFileActive();
  		writeToFileReactive();
  		wrote = true;
	}
});


function writeToFileActive(){

	var csvStream = csv.createWriteStream({headers: true}),
	    writableStream = fs.createWriteStream(parameters.simulationID+"-results.csv");
	 
	writableStream.on("finish", function(){
	  console.log("DONE!");
	});
	 
	csvStream.pipe(writableStream);
	for (var i = 0; i < operationids.length; i++) {
		console.log(operationids[i]);
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
			csvStream2.write({"id": id,"time":current_timings[j].time,"operationdID":current_timings[j].requestID, "date": current_timings[j].date});
		}
	}
	csvStream2.end();

}

function writeToFileReactive(){

	var csvStream3 = csv.createWriteStream({headers: true}),
	writableStream3 = fs.createWriteStream(parameters.simulationID+"-reactive-complete-results.csv");
	 
	writableStream3.on("finish", function(){
	  console.log("DONE!");
	});
	csvStream3.pipe(writableStream3);
	for (var i = 0; i < operationsTimesResults.length; i++) {
		var current_result = operationsTimesResults[i];
		csvStream3.write({"id": current_result.opID,"time":current_result.time});	
	}
	csvStream3.end();



	var csvStream = csv.createWriteStream({headers: true}),
	writableStream = fs.createWriteStream(parameters.simulationID+"-reactive-results.csv");
	 
	writableStream.on("finish", function(){
	  console.log("DONE!");
	});
	 
	csvStream.pipe(writableStream);
	var min = getMinOfArray(operationsTimesResults);
	var max = getMaxOfArray(operationsTimesResults);
	var avg = getAvgOfArray(operationsTimesResults);
	var med = getMedianOfArray(operationsTimesResults);
	var counter = operationsTimesResults.length
	csvStream.write({"min":min,"max":max,"avg":avg,"med":med,"counter":counter});
	csvStream.end();
}

//ACTIVE REQUESTS
function addTiming(operationdID, time,requestID){
	requestsReplied++;
	var dt = datetime.create();
    var datestring = dt.format('Y-m-d H:M:S').replace(' ','T');
	if(!timings[operationdID]) { 
		timings[operationdID] = [{"time":time,"requestID":requestID, "date": datestring}];
		operationids.push(operationdID);
	}
	else{
		timings[operationdID].push({"time":time,"requestID":requestID, "date": datestring});
	}
	if((requestsReplied % 150) ==1){
		console.log(totalRequests+ " - " +requestsReplied);
	}
}

//REACTIVE REQUESTS
var operationsTimes = {};
var operationsTimesResults = [];


function makeRequest(opID, timestart){
	operationsTimes[opID] = timestart;
}

function reactiveRequest(opID){
	var hrstart =  operationsTimes[opID];
	var hrend = process.hrtime(hrstart);
    var msElapsed = hrend[0]*1000 + hrend[1]/1000000;
    operationsTimesResults.push({"opID":opID,"time":msElapsed});
    delete operationsTimes[opID];
}

function newRequest(){
	totalRequests++;
}


module.exports.terminate = terminate;
module.exports.addTiming = addTiming;

module.exports.newRequest = newRequest;

module.exports.makeRequest = makeRequest;

module.exports.reactiveRequest = reactiveRequest;