var SampleData = require('./models/sampledata');
var crossbar = require('../config/crossbar'); 
var datetime = require('node-datetime');
var autobahn = require('autobahn');
var unirest = require('unirest');
/*
var connection = new autobahn.Connection({
         url: crossbar.crossbarUrl,
         realm: 'realm1'
      });*/



module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all sampledatas
    app.get('/availability/:availability_id', function (req, res) {
        var hrstart = process.hrtime();
        var dt = datetime.create();
        var datestring = dt.format('Y-m-d H:M:S').replace(' ','T');
        //SOME WORK


        for (i = 0; i < 1000000; i++) { 
        }

        
        var hrend = process.hrtime(hrstart);
        var msElapsed = hrend[0]*1000 + hrend[1]/1000000;
        //console.log(msElapsed);
        var hrstart2 = process.hrtime();
        console.log(msElapsed);
        //unirest.post('http://metrics-collector:8080/timingSample')
        unirest.post('http://localhost:8080/timingSample')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": req.body.simID, "opID": req.body.opID, "step" : req.body.step+1, 
            "timing" : msElapsed ,"serviceName": "Availabilities", "apiName": "GET-/route","date":datestring})
        .end();

        res.send("A").end();

    });

    // create sampledata and send back all sampledatas after creation
    app.post('/availability', function (req, res) {
        res.end();

    });

    app.put('/availability/:availability_id', function (req, res){
        res.end();
    });

    // delete a sampledata
    app.delete('/availability/:availability_id', function (req, res) {
        res.end();
    });

    app.get('/availabilities', function(req,res){
        res.end();
    });

};
