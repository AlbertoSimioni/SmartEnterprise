var TimingData = require('./models/timingdata');


var documents = [];

timeout();

function timeout() {
    setTimeout(function () {


    if(documents.length > 0){
        insertDB();
    }
    timeout();

    }, 15000);
}

//IDEA AUMENTARE INTERVALLO E TOGLIERE RISPOSTA

function insertDB(){
    TimingData.collection.insert(documents, 
        function(err,docs){
            if(err){console.log("err3");}
        });
    documents = [];
}


module.exports = function (app) {
    
    // create sampledata and send back all sampledatas after creation
    app.post('/timingSample', function (req, res) {
        //parms: simID, opID, step, timing, serviceName
        var simID = req.body.simID;
        var opID = req.body.opID;
        var step = req.body.step;
        var log = {}
        log.simulationID = req.body.simID;
        log.serviceName = req.body.serviceName;
        log.apiName = req.body.apiName;
        log.date = req.body.date;
        log.step = req.body.step;
        log.timing = req.body.timing;
        log.operationID = req.body.opID;
        if(req.body.queueLength != null){
            log.queueLength = req.body.queueLength;
        }
        if(req.body.queueTiming != null){
            log.queueTiming = req.body.queueTiming;
        }

        documents.push(log);
        res.end();


    });

};
