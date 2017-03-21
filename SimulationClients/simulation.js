var datetime = require('node-datetime');
var unirest = require('unirest');
var autobahn = require('autobahn');

var parameters = require('./config/parameters');      // load the database config
var addresses = require('./config/addresses'); 
var connection = new autobahn.Connection({
         url: addresses.crossbarUrl,
         realm: 'realm1'
      });



        //
        connection.onopen = function (session, details) {

           console.log("Connected");

           // SUBSCRIBE to a topic and receive events
           //
           function on_counter (args, kwargs) {
              console.log(kwargs.opID);
           }
           session.subscribe('availabilities', on_counter).then(
              function (sub) {
                 console.log('subscribed to topic');
              },
              function (err) {
                 console.log('failed to subscribe to topic', err);
              }
           );

        };

        connection.open();



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

        //unirest.get('http://147.162.226.101:30008/availabilities/availability/lol')
        unirest.get('http://localhost:8081/currentavailabilities')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .send({ "simID": "sim1", "opID": "op"+tickCounter, "step" : 0})
        .end(function(response){
            console.log(response.body);
        });

        if(tickCounter <= parameters.nrTicks){
        	timeout();
        }
        else{
        	console.log("Terminating simulation");
        	//connection.close()
        }
    }, parameters.tick);
}
