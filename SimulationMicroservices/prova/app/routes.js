var crossbar = require('../config/crossbar'); 
var datetime = require('node-datetime');
var autobahn = require('autobahn');
var unirest = require('unirest');

/*
var connection = new autobahn.Connection({
         url: crossbar.crossbarUrl,
         realm: 'realm1'
      });
*/


//var wampSession;
/*
connection.open();
connection.onopen = function (session) {

    wampSession = session;
}

connection.onclose = function (reason, details) {
   connection.open();
};
*/
var t1 = 10000;
var t2 = 100000;
var t15 = 1000000;
var t120 = 10000000;
var t1000 = 100000000;
var t10000 = 1000000000; 
const cluster = require('cluster');


for (const id in cluster.workers) {
  cluster.workers[id].on('message', messageHandler);
}



function messageHandler(msg){
    if(msg.type == "start"){
        queueLength--;
        var request = pendingRequests[msg.idRequest];
        var hrend = process.hrtime(request.hrstart);

        //TOTAL TIME IN QUEUE
        var msElapsedQueue = hrend[0]*1000 + hrend[1]/1000000;
        pendingRequests[msg.idRequest].timeQueue = msElapsedQueue;
    }
    else if (msg.type == "end"){
        //RETRIEVE REQUEST DATA
        var request = pendingRequests[msg.idRequest];

        //TOTAL ELAPSED TIME
        var hrend = process.hrtime(request.hrstart);
        var msElapsed = hrend[0]*1000 + hrend[1]/1000000;

        //DATE COMPLETED
        var dt = datetime.create();
        var datestring = dt.format('Y-m-d H:M:S').replace(' ','T');

        //console.log(msElapsed);
        console.log("IDREQ: "+msg.idRequest+ " QUEUELENGTH: " + request.queueLength + " QUEUETIME: "+ 
        request.timeQueue + " TOTALTIME: "+ msElapsed+ " DATE: "+datestring);
        //console.log(msg.idRequest);
        request.res.send(msg.answer);
        delete pendingRequests[msg.idRequest];
        //SEND METRICS TO THE METRICS LOGGER WITH THE LENGTH OF THE QUEUE WHEN REQUEST ARRIVED, TIME ELAPSED, DATE
    }

}

var pendingRequests = [];
var totalRequestsCounter = 0;

var queueLength = 0;

function insertQueue(idRequest,req,res){
    totalRequestsCounter++;
    var hrstart = process.hrtime();
    var msg = {};
    var request = {};
    msg.idRequest = idRequest +"-" +totalRequestsCounter;

    request.type = idRequest;
    request.req = req;
    request.res = res;
    request.queueLength = queueLength; //QUEUE LENGTH
    request.hrstart = hrstart;
    pendingRequests[msg.idRequest] = request;

    //SALVARE LUNGHEZZA CODA
    queueLength++;
    for (const id in cluster.workers) {
        cluster.workers[id].send(msg); 
    }   
}

module.exports = function (app) {
    app.get('/long', function (req, res) {    
        insertQueue('long',req,res);    
    });


    app.get('/short', function (req, res) {
        insertQueue('short',req,res);
    });

};
