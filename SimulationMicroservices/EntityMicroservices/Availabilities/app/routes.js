var datetime = require('node-datetime');
var unirest = require('unirest');

//NEW
const cluster = require('cluster');

//subscription
for (const id in cluster.workers) {
  cluster.workers[id].on('message', messageHandler);
}
var poolOption = { maxSockets: 100 }

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
        unirest.post('http://metrics-collector:8080/timingSample')
        .pool(poolOption)
        //unirest.post('http://localhost:9080/timingSample')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": request.req.body.simID, "opID": request.req.body.opID, "step" : request.req.body.step+1, 
            "timing" : msElapsed ,"serviceName": "Availabilities", "apiName": request.type,"date":datestring,
            "queueLength": request.queueLength, "queueTiming": request.timeQueue

        })
        .end();
        delete pendingRequests[msg.idRequest];
        request.res.send(msg.answer);
        //delete pendingRequests[msg.idRequest];
        //SEND METRICS TO THE METRICS LOGGER WITH THE LENGTH OF THE QUEUE WHEN REQUEST ARRIVED, TIME ELAPSED, DATE
    }
}

var pendingRequests = {};
var totalRequestsCounter = 0;

var queueLength = 0;


function insertQueue(idRequest,req,res){
    totalRequestsCounter++;
    var hrstart = process.hrtime();
    var msg = {};
    var request = {};
    msg.idRequest = idRequest +"_" +totalRequestsCounter;
    msg.opID = req.body.opID
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
    app.get('/availability/:availability_id', function (req, res) {
        insertQueue("GET-/availability",req,res);
    });

    app.post('/availability', function (req, res) {
        insertQueue("POST-/availability",req,res);
    });

    app.put('/availability/:availability_id', function (req, res){
        insertQueue("PUT-/availability",req,res);
    });


    app.delete('/availability/:availability_id', function (req, res) {
        insertQueue("DELETE-/availability",req,res);
    });

    app.get('/availabilities', function(req,res){
        insertQueue("GET-/availabilities",req,res)
    });

};
