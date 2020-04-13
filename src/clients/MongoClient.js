const mongo =  require('mongodb');
let config = require("../config");

const Client = mongo.MongoClient;
let options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

class MongoClient {
  static getCollection(collectionName) {
      console.log(collectionName);
    return Client.connect(config.mongodb.url, options)
      .then(client => client.db(config.mongodb.name).collection(collectionName));
  }
}

module.exports = MongoClient;
