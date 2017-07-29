const DEV_NAME = "test"
const PROD_NAME = "my_replica_set"

module.exports = {
    dev: {
        rsName: DEV_NAME,
        oplogUrl: 'mongodb://127.0.0.1:27017/local',
        mongoUrl: 'mongodb://localhost/adminapp?replicaSet='+DEV_NAME+'&readPreference=primaryPreferred&w=majority'
    },
    prod: {
        rsName: PROD_NAME,
        oplogUrl: 'mongodb://mongo-replica-node-0,mongo-replica-node-1,mongo-replica-node-2/local?authSource=admin&replicaSet='+PROD_NAME,
        mongoUrl: 'mongodb://mongo-replica-node-0:27017,mongo-replica-node-1:27017,mongo-replica-node-2:27017/adminapp?replicaSet='+PROD_NAME+'&readPreference=primaryPreferred&w=majority'
    }
};
