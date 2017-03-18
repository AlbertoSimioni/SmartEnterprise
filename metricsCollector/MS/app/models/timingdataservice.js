var mongoose = require('mongoose');

//The sample data has two fields, one of the type String and one of type Boolean
module.exports = mongoose.model('TimingDataService', {
    simulationID: {
        type: String,
        default: ''
    },
    serviceName:{
    	type: String,
    	default: ""
    },
    apiName: String,
    timings: [{step: Number, start: Date,timing: Number, operationID: String}]
});