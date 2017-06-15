var TimingData = require('./models/timingdata');

var json2csv = require('json2csv');
var fields = ['simulationID', 'operationID', 'date','step','timing','serviceName','apiName','queueLength','queueTiming'];


function getTimingData(res) {
    TimingData.find(function (err, timingdata) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

         var result = json2csv({ data: timingdata, fields: fields });
         
        res.setHeader('Content-disposition', 'attachment; filename=testing.csv');
          res.set('Content-Type', 'text/csv');
          res.status(200).send(result);

    });
};

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all timingdatas
    app.get('/api/timingdata', function (req, res) {
        // use mongoose to get all timingdatas in the database
        getTimingData(res);
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
