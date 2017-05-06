var parameters = require('./config/parameters');      // load the database config
var sellers = require('./operators/seller');
var buyers = require('./operators/buyer');
var logistics = require('./operators/logistic');
var platforms = require('./operators/platform');
var timings = require('./timings');


var tickCounter = 0;

timeout()

function timeout() {
    setTimeout(function () {

        tickCounter = tickCounter +1;

        switch(tickCounter % 4) {
            case 0:
                sellers.tick(tickCounter);
                break;
            case 1:
                buyers.tick(tickCounter);
                break;
            case 2:
                //logistics.tick(tickCounter);
                break;
            case 3:
                //platforms.tick(tickCounter);
                break;
            default:
                throw "ERROR % 4";
        }
        
        
        if(tickCounter <= parameters.nrTicks){
        	timeout(); //RECURSIVE LOOP
        }
        else{
          sellers.terminate();
          buyers.terminate();
          //logistics.terminate();
          //platforms.terminate();
          timings.terminate();
          console.log("Terminating simulation");
        }

    }, parameters.tick);
}
