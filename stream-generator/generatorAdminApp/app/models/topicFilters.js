var activeTopics = {}

module.exports = {
  getActiveTopics: function(){
  	return activeTopics;
  },

  //there are two types of topic filters
  //"collection"
  //"database.collection"
  updateActiveTopics: function(allTopics){
  	var activesColl = [];
  	var activesDbColl = [];
	allTopics.forEach(function(topic) {
	    if(topic.status){
	    	var topicSplit = topic.text.split(".");
	    	if(topicSplit.length == 2){
	    		activesDbColl.push(topic.text);
	    	}
	    	else if(topicSplit.length == 1){
	    		activesColl.push(topic.text);
	    	}
	    }
	});
  	activeTopics.coll = activesColl;
  	activeTopics.dbColl = activesDbColl;
  }

};