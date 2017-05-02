var datetime = require('node-datetime');
var unirest = require('unirest');

//NEW
const cluster = require('cluster');

//subscription
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
    else if (msg.type == "step1"){
        //RETRIEVE REQUEST DATA
        var request = pendingRequests[msg.idRequest];

        //TOTAL ELAPSED TIME
        var hrend = process.hrtime(request.hrstart);
        var msElapsed = hrend[0]*1000 + hrend[1]/1000000;

        pendingRequests[msg.idRequest].hrstart =  process.hrtime();

        //DATE COMPLETED
        var dt = datetime.create();
        var datestring = dt.format('Y-m-d H:M:S').replace(' ','T');
        unirest.post('http://metrics-collector:8080/timingSample')
        //unirest.post('http://localhost:9080/timingSample')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": request.req.body.simID, "opID": request.req.body.opID, "step" : request.req.body.step+1, 
            "timing" : msElapsed ,"serviceName": "AdD-Orders", "apiName": request.type,"date":datestring,
            "queueLength": request.queueLength, "queueTiming": request.timeQueue

        })
        .end();
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
        unirest.post('http://metrics-collector:8080/timingSample')
        //unirest.post('http://localhost:9080/timingSample')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": request.req.body.simID, "opID": request.req.body.opID, "step" : request.req.body.step+3, 
            "timing" : msElapsed ,"serviceName": "AdD-Orders", "apiName": request.type,"date":datestring
        })
        .end();

        request.res.send(msg.answer);
        //delete pendingRequests[msg.idRequest]; DA CONTROLLARE SE METTERE
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
    msg.idRequest = idRequest +"_" +totalRequestsCounter;
    msg.opID = req.body.opID;
    msg.simID = req.body.simID;
    msg.step = req.body.step;
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

//NEW




module.exports = function (app) {

    // api ---------------------------------------------------------------------
    app.get('/currentpurchasingorders', function (req, res) {
        insertQueue("GET-/currentpurchasingorders",req,res);
    });


    app.get('/currentsalesorders', function(req,res){
        insertQueue("GET-/currentsalesorders",req,res)
    });

};
