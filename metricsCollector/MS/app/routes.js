var TimingData = require('./models/timingdata');
//var TimingDataService = require('./models/timingdataservice');


var documents = [];

timeout();

function timeout() {
    setTimeout(function () {


    if(documents.length > 0){
        insertDB();
    }
    timeout();

    }, 5000);
}



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
        log.start = req.body.date;
        log.step = req.body.step;
        log.timing = req.body.timing;
        log.operationID = req.body.opID;
        documents.push(log);
        res.send("ok").end();


        /*
        // create a sampledata, information comes from AJAX request from Angular
        TimingData.findOne({'simulationID': simID, 'operationID': opID}, function(err,timing){
            if(err) { console.log("err1")
                res.status(500).send({ error: 'Something failed!' })
            }
            else{
                if(timing){
                    TimingData.update({'_id': timing._id}
                        ,{$push: { 'timings': {'step': req.body.step,'timing':req.body.timing, 'serviceName' : req.body.serviceName, 'apiName':req.body.apiName}}}
                        ,function(err,timingupdated){
                        if(err) { console.log("err2");
                        }
                    })
                }
                else{
                    TimingData.create({
                        'simulationID': simID,
                        'operationID': opID,
                        'timings': [{'step':step,'timing':req.body.timing, 'serviceName': req.body.serviceName, 'apiName': req.body.apiName}] 
                    }, function(err,timing){
                        if(err){console.log("err3");}
                    })
                }
            }
        })




        // create a sampledata, information comes from AJAX request from Angular
        TimingDataService.findOne({'simulationID': simID, 'serviceName': req.body.serviceName, 'apiName': req.body.apiName}, function(err,timing){
            if(err) { console.log("err1");
            }
            else{
                if(timing){
                    TimingDataService.update({'_id': timing._id}
                        ,{$push: { 'timings': {'start':req.body.date,'step': req.body.step,'timing':req.body.timing, 'operationID' : req.body.opID}}}
                        ,function(err,timingupdated){
                        if(err) { console.log("err2");
                        }
                    })
                }
                else{
                    TimingDataService.create({
                        'simulationID': simID,
                        'serviceName': req.body.serviceName,
                        'apiName': req.body.apiName,
                        'timings': [{'start':req.body.date,'step':step,'timing':req.body.timing, 'operationID': req.body.opID}] 
                    }, function(err,timing){
                        if(err){console.log("err3");}
                    })
                }
            }
        })*/

    });

};
