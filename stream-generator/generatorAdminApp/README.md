# Oplog analyzer component

A Node app built with MongoDB and Angular. 
The app analyzes the oplog of MongoDB and generates a stream of JSON messages with the new data that are arrived into the database.
The stream is generated using the ZeroMQ library. It's possibile to connect to the stream through any language that has an implementation of the ZeroMQ library. 

The app provides a user interface where it's possible to configure which are the topics to send into the stream of data.
If no topics are inserted the stream is empty. 

The topic have to inserted in the format 'database.collection'  or in the format 'collection' the second option will enable all the collection with that name in any database.


## Requirements

- [Node and npm](http://nodejs.org)
- MongoDB: Make sure you have your own local or remote MongoDB database URI configured in `config/database.js`

## Installation

Use the Docker through the Dockerfile in the root directory
The ports used by the application are:
-8080 for the web interface
-3000 for the ZeroMQ stream

