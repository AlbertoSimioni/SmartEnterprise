
var TopicStream = require('./models/topic');

var TopicFilters = require('./models/topicFilters');


//TOPICS list initiliziation at the start of the program. The topics are retrieved from the database.
TopicStream.find(function (err, topics) {
    // if there is an error retrieving, send the error. 
    if (err) {
        console.log(err);
    }
    TopicFilters.updateActiveTopics(topics);
});

module.exports = function (oplog,sock) {

	//new oplog entry event
	oplog.on('op', function (data) {

		//Check if topic is inside the allowed topics or has to be filtere
		var nsSplit = data.ns.split(".",2);
		//Check if the oplog operation is an update on the collection of the topic filters.
		//in case we need to update the topic list.
		if(nsSplit[1] == "topicstreams"){
			TopicStream.find(function (err, topics) {
    // if there is an error retrieving, send the error. 
			    if (err) {
			        console.log(err);
			    }
			    TopicFilters.updateActiveTopics(topics);
			});
		}
		var topics = TopicFilters.getActiveTopics();
		var filtered = true;
	    if(nsSplit.length ==2){
	    	for (var i = 0; i < topics.coll.length && filtered; i++) {
	    		if(nsSplit[1] == topics.coll[i]){
	    			filtered = false;
	    		}
	    	}
			for (var i = 0; i < topics.dbColl.length && filtered; i++) {
				if(data.ns == topics.dbColl[i]){
					filtered = false;
				}
			}
		}

		//if not filtered, check if the oplog operation is insert,update or delete and in case send out the message
		if(!filtered){
			switch(data.op){
			 	case "i":
			 		var msg = "{\"topic\":".concat("\"", data.ns,"\",\"operation\":\"insert\",\"data\":",JSON.stringify(data.o),"}");
			 		sock.send(msg);
			 		//console.log(msg);
			 		break;
			 	case "u":
			 		var msg = "{\"topic\":".concat("\"", data.ns,"\",\"operation\":\"update\",\"id\":\"",data.o2._id,"\",\"changes\":",JSON.stringify(data.o),"}");
			 		sock.send(msg);
			 		//console.log(msg);
			 		break;
			 	case "d":
			 		var msg = "{\"topic\":".concat("\"",data.ns,"\",\"operation\":\"delete\",\"data\":",JSON.stringify(data.o),"}");
			 		sock.send(msg);
			 		//console.log(msg);
			 		break;
			}
		}
	});


	oplog.on('error', function (error) {
	  console.log(error);
	});

	oplog.on('end', function () {
	  console.log('Stream ended');
	});


};