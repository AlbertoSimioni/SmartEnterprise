var SampleData = require('./models/sampledata');

function getSampleDatas(res) {
    SampleData.find(function (err, sampledatas) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }
        res.json(sampledatas); // return all sampledatas in JSON format
    });
};

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all sampledatas
    app.get('/api/sampledatas', function (req, res) {
        // use mongoose to get all sampledatas in the database
        getSampleDatas(res);
    });

    // create sampledata and send back all sampledatas after creation
    app.post('/api/sampledatas', function (req, res) {

        // create a sampledata, information comes from AJAX request from Angular
        SampleData.create({
            text: req.body.text,
            status: true,
            done: false
        }, function (err, sampledata) {
            if (err)
                res.send(err);

            // get and return all the sampledatas after you create another
            getSampleDatas(res);
        });

    });

    app.put('/api/sampledatas/:sampledata_id', function (req, res){
        SampleData.update({ _id: req.params.sampledata_id }, { $set: { status: req.body.status}}, function (err, sampledata) {
            if (err)
                res.send(err);

            getSampleDatas(res);
        });
    });

    // delete a sampledata
    app.delete('/api/sampledatas/:sampledata_id', function (req, res) {
        SampleData.remove({
            _id: req.params.sampledata_id
        }, function (err, sampledata) {
            if (err)
                res.send(err);

            getSampleDatas(res);
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
