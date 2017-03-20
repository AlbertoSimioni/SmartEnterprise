var mongoose = require('mongoose');

//The sample data has two fields, one of the type String and one of type Boolean
module.exports = mongoose.model('SampleData', {
    text: {
        type: String,
        default: ''
    },
    status:{
    	type: Boolean,
    	default: true
    }
});