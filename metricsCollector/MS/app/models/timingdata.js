var mongoose = require('mongoose');

//The sample data has two fields, one of the type String and one of type Boolean
module.exports = mongoose.model('TimingData', {
    simulationID: {
        type: String,
        default: ''
    },
    operationID:{
    	type: String,
    	default: ""
    },
    timings: [{step: Number, timing: Number, serviceName: String, apiName: String}]
});