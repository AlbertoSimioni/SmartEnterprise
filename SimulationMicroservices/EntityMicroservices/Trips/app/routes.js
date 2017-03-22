var SampleData = require('./models/sampledata');
var crossbar = require('../config/crossbar'); 
var datetime = require('node-datetime');
var autobahn = require('autobahn');
var unirest = require('unirest');

var connection = new autobahn.Connection({
         url: crossbar.crossbarUrl,
         realm: 'realm1'
      });



var wampSession;

connection.open();
connection.onopen = function (session) {

    wampSession = session;
}

connection.onclose = function (reason, details) {
   connection.open();
};

var t2 = 100000;
var t15 = 1000000;
var t120 = 10000000;
var t1000 = 100000000;
var t100000 = 1000000000; 


module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all sampledatas
    app.get('/trip/:trip_id', function (req, res) {

        var hrstart = process.hrtime();
        var dt = datetime.create();
        var datestring = dt.format('Y-m-d H:M:S').replace(' ','T');
        //SOME WORK


        for (i = 0; i < t2; i++) { 
        }

        
        var hrend = process.hrtime(hrstart);
        var msElapsed = hrend[0]*1000 + hrend[1]/1000000;
        //console.log(msElapsed);
        var hrstart2 = process.hrtime();
        console.log(msElapsed);
        unirest.post('http://metrics-collector:8080/timingSample')
        //unirest.post('http://localhost:8080/timingSample')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": req.body.simID, "opID": req.body.opID, "step" : req.body.step+1, 
            "timing" : msElapsed ,"serviceName": "Trips", "apiName": "GET-/trip","date":datestring})
        .end();

        res.send("A").end();

    });

    // create sampledata and send back all sampledatas after creation
    app.post('/trip', function (req, res) {
        
        var hrstart = process.hrtime();
        var dt = datetime.create();
        var datestring = dt.format('Y-m-d H:M:S').replace(' ','T');
        //SOME WORK


        for (i = 0; i < t2*3; i++) { 
        }

        
        var hrend = process.hrtime(hrstart);
        var msElapsed = hrend[0]*1000 + hrend[1]/1000000;
        //console.log(msElapsed);
        var hrstart2 = process.hrtime();
        console.log(msElapsed);


        wampSession.publish('trips',  [], {type: "new" , opID: req.body.opID});

        unirest.post('http://metrics-collector:8080/timingSample')
        //unirest.post('http://localhost:9080/timingSample')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": req.body.simID, "opID": req.body.opID, "step" : req.body.step+1, 
            "timing" : msElapsed ,"serviceName": "Trips", "apiName": "POST-/trip","date":datestring})
        .end();


        res.send("A").end();

    });

    app.put('/trip/:trip_id', function (req, res){
                
        var hrstart = process.hrtime();
        var dt = datetime.create();
        var datestring = dt.format('Y-m-d H:M:S').replace(' ','T');
        //SOME WORK


        for (i = 0; i < t15; i++) { 
        }

        
        var hrend = process.hrtime(hrstart);
        var msElapsed = hrend[0]*1000 + hrend[1]/1000000;
        //console.log(msElapsed);
        var hrstart2 = process.hrtime();
        console.log(msElapsed);
        wampSession.publish('trips',  [], {type: "update" , opID: req.body.opID});
        unirest.post('http://metrics-collector:8080/timingSample')
        //unirest.post('http://localhost:8080/timingSample')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": req.body.simID, "opID": req.body.opID, "step" : req.body.step+1, 
            "timing" : msElapsed ,"serviceName": "Trips", "apiName": "PUT-/trip","date":datestring})
        .end();

        res.send("A").end();
    });




    // delete a sampledata
    app.delete('/trip/:trip_id', function (req, res) {
                
        var hrstart = process.hrtime();
        var dt = datetime.create();
        var datestring = dt.format('Y-m-d H:M:S').replace(' ','T');
        //SOME WORK


        for (i = 0; i < t15; i++) { 
        }

        
        var hrend = process.hrtime(hrstart);
        var msElapsed = hrend[0]*1000 + hrend[1]/1000000;
        //console.log(msElapsed);
        var hrstart2 = process.hrtime();
        console.log(msElapsed);
        wampSession.publish('trips',  [], {type: "delete" , opID: req.body.opID});
        unirest.post('http://metrics-collector:8080/timingSample')
        //unirest.post('http://localhost:8080/timingSample')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": req.body.simID, "opID": req.body.opID, "step" : req.body.step+1, 
            "timing" : msElapsed ,"serviceName": "Trips", "apiName": "DELETE-/trip","date":datestring})
        .end();

        res.send("A").end();
    });

    app.get('/trips', function(req,res){

        var hrstart = process.hrtime();
        var dt = datetime.create();
        var datestring = dt.format('Y-m-d H:M:S').replace(' ','T');
        //SOME WORK

        for (i = 0; i < t1000; i++) { 
        }
        
        var hrend = process.hrtime(hrstart);
        var msElapsed = hrend[0]*1000 + hrend[1]/1000000;
        //console.log(msElapsed);
        var hrstart2 = process.hrtime();
        console.log(msElapsed);
        unirest.post('http://metrics-collector:8080/timingSample')
        //unirest.post('http://localhost:8080/timingSample')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": req.body.simID, "opID": req.body.opID, "step" : req.body.step+1, 
            "timing" : msElapsed ,"serviceName": "Trips", "apiName": "GET-/trips","date":datestring})
        .end();

        res.send("A").end();
    });

};
