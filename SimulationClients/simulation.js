var parameters = require('./config/parameters');      // load the database config
var sellers = require('./operators/seller');
var buyers = require('./operators/buyer');
var logistics = require('./operators/logistic');
var platforms = require('./operators/platform');
var timings = require('./timings');


var tickCounter = 0;

var lastvalue = 0;

timeout()

function timeout() {
    setTimeout(function () {

        tickCounter = tickCounter +1;



        var newvalue;
        if(parameters.type == "lin")
            newvalue = Math.floor(tickCounter*parameters.b);
        else if(parameters.type == "log")
            newvalue = Math.floor(Math.log(tickCounter,parameters.b));
        else if(parameters.type == "exp")
            newvalue = Math.floor(Math.pow(parameters.b,tickCounter));
        
        var newusers = newvalue - lastvalue;
        
        lastvalue = newvalue;
        //IF MORE USERS NEEDED - IT CREATES "newusers" users
        for (var i = 0; moreUsersNeeded() && i < newusers ; i++) {
            sendTick(); //creates one user of a type, rotating between the types
        }

        //ITERATES UNTIL THE nrTicks are ended
        if(tickCounter <= parameters.nrTicks){
        	timeout(); //RECURSIVE LOOP 
        }

        else{
          terminateSimulation();
        }

    }, parameters.tick);
}


var log_needed = true;
var plat_needed = true;
var buy_needed = true;
var sel_needed = true;


function moreUsersNeeded(){
    return (log_needed || plat_needed || buy_needed || sel_needed);

}


var usersCounter = 0;

function sendTick(){

    switch(usersCounter % 4){
    case 0:
        sel_needed = sellers.tick();
        break;
    case 1:
        buy_needed = buyers.tick();
        break;
    case 2:
        log_needed = logistics.tick();
        break;
    case 3:
        plat_needed = platforms.tick();
        break;
    default:
        throw "ERROR % 4";                  
        }
    usersCounter++;
}

function terminateSimulation(){
    sellers.terminate();
    buyers.terminate();
    logistics.terminate();
    platforms.terminate();
    timings.terminate();
    console.log("Terminating simulation");
}