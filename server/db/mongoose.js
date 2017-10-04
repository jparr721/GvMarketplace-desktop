var mongo = require('mongoose');

mongo.Promise = global.Promise;
mongo.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017');

module.exports = { mongo };
