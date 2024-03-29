var mongoose = require('mongoose');


//The sample data has two fields, one of the type String and one of type Boolean
module.exports = mongoose.model('TimingData', {
    simulationID: String,
    operationID: String,
    date: Date,
    step: Number,
    timing: Number,
    serviceName: String,
    apiName: String,
    queueLength: Number,
    queueTiming: Number
});