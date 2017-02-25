module.exports = {
    //oplogUrl : 'mongodb://mongo-replica-node-0,mongo-replica-node-1,mongo-replica-node-2/local?authSource=admin&replicaSet=my_replica_set',
    oplogUrl : 'mongodb://127.0.0.1:27017/local',
    mongoUrl: 'mongodb://localhost/adminapp?replicaSet=test&readPreference=primaryPreferred&w=majority'
    //mongoUrl: 'mongodb://mongo-replica-node-0:27017,mongo-replica-node-1:27017,mongo-replica-node-2:27017/adminapp?replicaSet=my_replica_set&readPreference=primaryPreferred&w=majority'
};
