var TopicStream = require('./models/topic');

function getTopics(res) {
    TopicStream.find(function (err, topics) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }
        res.json(topics); // return all topics in JSON format
    });
};

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all topics
    app.get('/api/topics', function (req, res) {
        // use mongoose to get all topics in the database
        getTopics(res);
    });

    // create topic and send back all topics after creation
    app.post('/api/topics', function (req, res) {

        // create a topic, information comes from AJAX request from Angular
        TopicStream.create({
            text: req.body.text,
            status: true,
            done: false
        }, function (err, topic) {
            if (err)
                res.send(err);

            // get and return all the topics after you create another
            getTopics(res);
        });

    });

    app.put('/api/topics/:topic_id', function (req, res){
        TopicStream.update({ _id: req.params.topic_id }, { $set: { status: req.body.status}}, function (err, topic) {
            if (err)
                res.send(err);

            getTopics(res);
        });
    });

    // delete a topic
    app.delete('/api/topics/:topic_id', function (req, res) {
        TopicStream.remove({
            _id: req.params.topic_id
        }, function (err, topic) {
            if (err)
                res.send(err);

            getTopics(res);
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
