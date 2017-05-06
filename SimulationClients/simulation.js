var datetime = require('node-datetime');
var unirest = require('unirest');
var autobahn = require('autobahn');

var parameters = require('./config/parameters');      // load the database config
var addresses = require('./config/addresses'); 

var sellers = require('./operators/seller');
var buyers = require('./operators/buyer');
var logistics = require('./operators/logistic');
var platforms = require('./operators/platform');
var timings = require('./timings');

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

        if((tickCounter % 4) == 0){
        //sellers.tick(tickCounter);
        }
        else if((tickCounter % 4) == 1){
          buyers.tick(tickCounter);
        }
        else if((tickCounter % 4) == 2){
          //logistics.tick(tickCounter);
        }
        else{
          //platforms.tick(tickCounter);
        }
        
        
        
        if(tickCounter <= parameters.nrTicks){
        	timeout();
        }
        else{
          //sellers.terminate();
          buyers.terminate();
          //logistics.terminate();
          //platforms.terminate();
          timings.terminate();
          console.log("Terminating simulation");
          //connection.close()
        }

    }, parameters.tick);
}
