var TimingData = require('./models/timingdata');
var TimingDataService = require('./models/timingdataservice');


module.exports = function (app) {

    // create sampledata and send back all sampledatas after creation
    app.post('/timingSample', function (req, res) {
        //parms: simID, opID, step, timing, serviceName
        var simID = req.body.simID;
        var opID = req.body.opID;
        var step = req.body.step;
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
        })
        res.send("ok").end();
    });
};
