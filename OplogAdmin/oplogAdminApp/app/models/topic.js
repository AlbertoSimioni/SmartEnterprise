var mongoose = require('mongoose');

module.exports = mongoose.model('TopicStream', {
    text: {
        type: String,
        default: ''
    },
    status:{
    	type: Boolean,
    	default: true
    }
});