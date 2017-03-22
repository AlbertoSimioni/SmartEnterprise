var datetime = require('node-datetime');
var unirest = require('unirest');
var autobahn = require('autobahn');

var parameters = require('./config/parameters');      // load the database config
var addresses = require('./config/addresses'); 

var sellers = require('./operators/seller');
var buyers = require('./operators/buyer');
var logistics = require('./operators/buyer');


var hrstart = process.hrtime();
var dt = datetime.create();
var datestring = dt.format('Y-m-d H:M:S').replace(' ','T');



var hrend = process.hrtime(hrstart);

//console.log(hrend[0]*1000 + hrend[1]/1000000);





var tickCounter = 0;

timeout()

function timeout() {
    setTimeout(function () {



        // Do Something Here
        // Then recall the parent function to
        // create a recursive loop.
        tickCounter = tickCounter +1;
        /*
        //unirest.get('http://147.162.226.101:30008/availabilities/availability/lol')
        unirest.get('http://localhost:8081/currentavailabilities')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .send({ "simID": "sim1", "opID": "op"+tickCounter, "step" : 0})
        .end(function(response){
            console.log(response.body);
        });
        */
        sellers.tick(tickCounter/10);
        buyers.tick(tickCounter/10);
        logistics.tick(tickCounter/10);
        if(tickCounter <= parameters.nrTicks){
        	timeout();
        }
        else{
          console.log("Terminating simulation");
          //connection.close()
        }

    }, parameters.tick);
}
