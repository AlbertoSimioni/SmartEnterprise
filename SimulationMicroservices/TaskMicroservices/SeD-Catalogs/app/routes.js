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
    app.get('/currentcatalogs', function (req, res) {

        var hrstart = process.hrtime();
        var dt = datetime.create();
        var datestring = dt.format('Y-m-d H:M:S').replace(' ','T');
        //SOME WORK


        for (i = 0; i < t1; i++) { 
        }

        unirest.get('http://catalogs:8080/catalog/lol')
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
                    "timing" : msElapsed2 ,"serviceName": "SeD-Catalogs", "apiName": "GET-R/currentcatalogs","date":datestring2})
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
            "timing" : msElapsed ,"serviceName": "SeD-catalogs", "apiName": "GET-/currentcatalogs","date":datestring})
        .end();


    });

    // create sampledata and send back all sampledatas after creation
    app.post('/newcatalog', function (req, res) {
        
        var hrstart = process.hrtime();
        var dt = datetime.create();
        var datestring = dt.format('Y-m-d H:M:S').replace(' ','T');
        //SOME WORK


        for (i = 0; i < t1; i++) { 
        }

        unirest.post('http://catalogs:8080/catalog')
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
                    "timing" : msElapsed2 ,"serviceName": "SeD-Catalogs", "apiName": "POST-R/newcatalog","date":datestring2})
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
            "timing" : msElapsed ,"serviceName": "SeD-Catalogs", "apiName": "POST-/newcatalog","date":datestring})
        .end();

    });

    app.put('/addcatalog/:availability_id', function (req, res){
         
        var hrstart = process.hrtime();
        var dt = datetime.create();
        var datestring = dt.format('Y-m-d H:M:S').replace(' ','T');
        //SOME WORK


        for (i = 0; i < t1; i++) { 
        }

        unirest.put('http://catalogs:8080/catalog/lol')
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
                    "timing" : msElapsed2 ,"serviceName": "SeD-Catalogs", "apiName": "PUT-R/addcatalog","date":datestring2})
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
            "timing" : msElapsed ,"serviceName": "SeD-Catalogs", "apiName": "PUT-/addcatalog","date":datestring})
        .end();
    });

    // delete a sampledata
    app.delete('/catalog/:availability_id', function (req, res) {
         
        var hrstart = process.hrtime();
        var dt = datetime.create();
        var datestring = dt.format('Y-m-d H:M:S').replace(' ','T');
        //SOME WORK


        for (i = 0; i < t1; i++) { 
        }

        unirest.delete('http://catalogs:8080/catalog/lol')
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
                    "timing" : msElapsed2 ,"serviceName": "SeD-Catalogs", "apiName": "DELETE-R/catalog","date":datestring2})
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
            "timing" : msElapsed ,"serviceName": "SeD-Catalogs", "apiName": "DELETE-/catalogs","date":datestring})
        .end();
    });
};
