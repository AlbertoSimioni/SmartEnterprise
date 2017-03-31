var unirest = require('unirest');

var tickCounter = 0;

timeout()

function timeout() {
    setTimeout(function () {
        var ciao = tickCounter;
        if(tickCounter % 3 == 1){
          unirest.get('http://localhost:8090/availability/lol')
              .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
              .send({"step":0,"simID":"asd","opID":"lol"})
              .end(function(response){
                console.log("end long - "+ ciao + " - "+response );
              });
        }
        else if(tickCounter % 3 == 2){ 
          unirest.delete('http://localhost:8090/availability/lol')
              .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
              .send({"step":0,"simID":"asd","opID":"lol"})
              .end(function(response){
                console.log("end short- "+ ciao+" - "+response );
              });
        }
        else if(tickCounter % 3 == 0){
            unirest.get('http://localhost:8090/availabilities')
              .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
              .send({"step":0,"simID":"asd","opID":"LOL"})
              .end(function(response){
                console.log("end short- "+ ciao+" - "+response );
              });
        }
        tickCounter = tickCounter +1;
        if(tickCounter <200){
           timeout();
        }
        else{
          console.log("NO MORE REQUESTS");
        }
    }, 10);
}
