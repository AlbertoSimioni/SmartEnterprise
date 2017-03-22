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

var t1 = 10000;
var t2 = 100000;
var t15 = 1000000;
var t120 = 10000000;
var t1000 = 100000000;
var t100000 = 1000000000; 


module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all sampledatas
    app.get('/routes', function (req, res) {

        var hrstart = process.hrtime();
        var dt = datetime.create();
        var datestring = dt.format('Y-m-d H:M:S').replace(' ','T');
        //SOME WORK


        for (i = 0; i < t1; i++) { 
        }

        unirest.get('http://routes:8080/routes')
        //unirest.get('http://localhost:8090/availability/lol')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": req.body.simID, "opID": req.body.opID, "step" : req.body.step+1})
        .end(function(response){
                var hrstart2 = process.hrtime();
                var dt2 = datetime.create();
                var datestring2 = dt2.format('Y-m-d H:M:S').replace(' ','T');
                //SOME WORK
                for (i = 0; i < t1; i++) { 
                }
                var hrend2 = process.hrtime(hrstart2);
                var msElapsed2 = hrend2[0]*1000 + hrend2[1]/1000000;
                unirest.post('http://metrics-collector:8080/timingSample')
                //unirest.post('http://localhost:9080/timingSample')
                .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
                .type('json')
                .send({ "simID": req.body.simID, "opID": req.body.opID, "step" : req.body.step+3, 
                    "timing" : msElapsed2 ,"serviceName": "LoD-Transports", "apiName": "GET-R/routes","date":datestring2})
                .end();
                res.send("A").end();
        });
        
        var hrend = process.hrtime(hrstart);
        var msElapsed = hrend[0]*1000 + hrend[1]/1000000;
        //console.log(msElapsed);
        console.log(msElapsed);
        unirest.post('http://metrics-collector:8080/timingSample')
        //unirest.post('http://localhost:9080/timingSample')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": req.body.simID, "opID": req.body.opID, "step" : req.body.step+1, 
            "timing" : msElapsed ,"serviceName": "LoD-Transports", "apiName": "GET-/routes","date":datestring})
        .end();


    });

    // create sampledata and send back all sampledatas after creation
    app.post('/newtrip', function (req, res) {
        
        var hrstart = process.hrtime();
        var dt = datetime.create();
        var datestring = dt.format('Y-m-d H:M:S').replace(' ','T');
        //SOME WORK


        for (i = 0; i < t1; i++) { 
        }

        unirest.post('http://trips:8080/trip')
        //unirest.get('http://localhost:8090/availability/lol')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": req.body.simID, "opID": req.body.opID, "step" : req.body.step+1})
        .end(function(response){
                var hrstart2 = process.hrtime();
                var dt2 = datetime.create();
                var datestring2 = dt2.format('Y-m-d H:M:S').replace(' ','T');
                //SOME WORK
                for (i = 0; i < t1; i++) { 
                }
                var hrend2 = process.hrtime(hrstart2);
                var msElapsed2 = hrend2[0]*1000 + hrend2[1]/1000000;
                unirest.post('http://metrics-collector:8080/timingSample')
                //unirest.post('http://localhost:9080/timingSample')
                .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
                .type('json')
                .send({ "simID": req.body.simID, "opID": req.body.opID, "step" : req.body.step+3, 
                    "timing" : msElapsed2 ,"serviceName": "LoD-Transports", "apiName": "POST-R/newtrip","date":datestring2})
                .end();
                res.send("A").end();
        });
        
        var hrend = process.hrtime(hrstart);
        var msElapsed = hrend[0]*1000 + hrend[1]/1000000;
        //console.log(msElapsed);
        console.log(msElapsed);
        unirest.post('http://metrics-collector:8080/timingSample')
        //unirest.post('http://localhost:9080/timingSample')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": req.body.simID, "opID": req.body.opID, "step" : req.body.step+1, 
            "timing" : msElapsed ,"serviceName": "LoD-Transports", "apiName": "POST-/newtrip","date":datestring})
        .end();

    });

    app.put('/filltrip/:availability_id', function (req, res){
         
        var hrstart = process.hrtime();
        var dt = datetime.create();
        var datestring = dt.format('Y-m-d H:M:S').replace(' ','T');
        //SOME WORK


        for (i = 0; i < t1; i++) { 
        }

        unirest.put('http://trips:8080/trip/lol')
        //unirest.get('http://localhost:8090/availability/lol')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": req.body.simID, "opID": req.body.opID, "step" : req.body.step+1})
        .end(function(response){
                var hrstart2 = process.hrtime();
                var dt2 = datetime.create();
                var datestring2 = dt2.format('Y-m-d H:M:S').replace(' ','T');
                //SOME WORK
                for (i = 0; i < t1; i++) { 
                }
                var hrend2 = process.hrtime(hrstart2);
                var msElapsed2 = hrend2[0]*1000 + hrend2[1]/1000000;
                unirest.post('http://metrics-collector:8080/timingSample')
                //unirest.post('http://localhost:9080/timingSample')
                .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
                .type('json')
                .send({ "simID": req.body.simID, "opID": req.body.opID, "step" : req.body.step+3, 
                    "timing" : msElapsed2 ,"serviceName": "LoD-Transports", "apiName": "PUT-R/filltrip","date":datestring2})
                .end();
                res.send("A").end();
        });
        
        var hrend = process.hrtime(hrstart);
        var msElapsed = hrend[0]*1000 + hrend[1]/1000000;
        //console.log(msElapsed);
        console.log(msElapsed);
        unirest.post('http://metrics-collector:8080/timingSample')
        //unirest.post('http://localhost:9080/timingSample')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": req.body.simID, "opID": req.body.opID, "step" : req.body.step+1, 
            "timing" : msElapsed ,"serviceName": "LoD-Transports", "apiName": "PUT-/filltrip","date":datestring})
        .end();
    });

    // delete a sampledata
    app.delete('/trip/:availability_id', function (req, res) {
         
        var hrstart = process.hrtime();
        var dt = datetime.create();
        var datestring = dt.format('Y-m-d H:M:S').replace(' ','T');
        //SOME WORK


        for (i = 0; i < t1; i++) { 
        }

        unirest.delete('http://trips:8080/trip/lol')
        //unirest.get('http://localhost:8090/availability/lol')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": req.body.simID, "opID": req.body.opID, "step" : req.body.step+1})
        .end(function(response){
                var hrstart2 = process.hrtime();
                var dt2 = datetime.create();
                var datestring2 = dt2.format('Y-m-d H:M:S').replace(' ','T');
                //SOME WORK
                for (i = 0; i < t1; i++) { 
                }
                var hrend2 = process.hrtime(hrstart2);
                var msElapsed2 = hrend2[0]*1000 + hrend2[1]/1000000;
                unirest.post('http://metrics-collector:8080/timingSample')
                //unirest.post('http://localhost:9080/timingSample')
                .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
                .type('json')
                .send({ "simID": req.body.simID, "opID": req.body.opID, "step" : req.body.step+3, 
                    "timing" : msElapsed2 ,"serviceName": "LoD-Transports", "apiName": "DELETE-R/trip","date":datestring2})
                .end();
                res.send("A").end();
        });
        
        var hrend = process.hrtime(hrstart);
        var msElapsed = hrend[0]*1000 + hrend[1]/1000000;
        //console.log(msElapsed);
        console.log(msElapsed);
        unirest.post('http://metrics-collector:8080/timingSample')
        //unirest.post('http://localhost:9080/timingSample')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": req.body.simID, "opID": req.body.opID, "step" : req.body.step+1, 
            "timing" : msElapsed ,"serviceName": "LoD-Transports", "apiName": "DELETE-/trip","date":datestring})
        .end();
    });


    app.put('/confirmtrip/:availability_id', function (req, res){
         
        var hrstart = process.hrtime();
        var dt = datetime.create();
        var datestring = dt.format('Y-m-d H:M:S').replace(' ','T');
        //SOME WORK


        for (i = 0; i < t1; i++) { 
        }

        unirest.put('http://trips:8080/trip/lol')
        //unirest.get('http://localhost:8090/availability/lol')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": req.body.simID, "opID": req.body.opID, "step" : req.body.step+1})
        .end(function(response){
                var hrstart2 = process.hrtime();
                var dt2 = datetime.create();
                var datestring2 = dt2.format('Y-m-d H:M:S').replace(' ','T');
                //SOME WORK
                for (i = 0; i < t1; i++) { 
                }
                var hrend2 = process.hrtime(hrstart2);
                var msElapsed2 = hrend2[0]*1000 + hrend2[1]/1000000;


                unirest.post('http://wares:8080/setwares/lol')
                .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
                .type('json')
                .send({ "simID": req.body.simID, "opID": req.body.opID, "step" : req.body.step+3})
                .end(function(response){
                    var hrstart3 = process.hrtime();
                    var dt3 = datetime.create();
                    var datestring3 = dt3.format('Y-m-d H:M:S').replace(' ','T');
                    //SOME WORK
                    for (i = 0; i < t1; i++) { 
                    }
                    var hrend3 = process.hrtime(hrstart2);
                    var msElapsed3 = hrend3[0]*1000 + hrend3[1]/1000000;

                    wampSession.publish('confirmtrip',  [], {type: "confirm" , opID: req.body.opID});

                    unirest.post('http://metrics-collector:8080/timingSample')
                    //unirest.post('http://localhost:9080/timingSample')
                    .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
                    .type('json')
                    .send({ "simID": req.body.simID, "opID": req.body.opID, "step" : req.body.step+5, 
                        "timing" : msElapsed3 ,"serviceName": "LoD-Transports", "apiName": "PUT-R/confirmtrip","date":datestring2})
                    .end();
                    res.send("A").end();
                });

                unirest.post('http://metrics-collector:8080/timingSample')
                //unirest.post('http://localhost:9080/timingSample')
                .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
                .type('json')
                .send({ "simID": req.body.simID, "opID": req.body.opID, "step" : req.body.step+3, 
                    "timing" : msElapsed2 ,"serviceName": "LoD-Transports", "apiName": "PUT-R/confirmtrip","date":datestring2})
                .end();
                
        });
        
        var hrend = process.hrtime(hrstart);
        var msElapsed = hrend[0]*1000 + hrend[1]/1000000;
        //console.log(msElapsed);
        console.log(msElapsed);
        unirest.post('http://metrics-collector:8080/timingSample')
        //unirest.post('http://localhost:9080/timingSample')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .type('json')
        .send({ "simID": req.body.simID, "opID": req.body.opID, "step" : req.body.step+1, 
            "timing" : msElapsed ,"serviceName": "LoD-Transports", "apiName": "PUT-/confirmtrip","date":datestring})
        .end();
    });

};
