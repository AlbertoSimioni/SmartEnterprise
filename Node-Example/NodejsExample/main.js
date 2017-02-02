'use strict';

const express = require('express');

// Constants
const PORT = 8080;


var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var url = 'mongodb://mongo-replica-node-0:27017,mongo-replica-node-1:27017,mongo-replica-node-2:27017/myproject?replicaSet=my_replica_set';
//var url = 'mongodb://localhost:27017/myproject';

var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  insertDocuments(db, function() {
    db.close();
  });
});


// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
