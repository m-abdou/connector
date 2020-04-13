const mongo =  require('mongodb');
let {mongodb} = require("../config");

const Client = mongo.MongoClient;
let options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

class MongoClient {
  static getCollection(collectionName) {
    return Client.connect(mongodb.url, options)
      .then(client => client.db(mongodb.name).collection(collectionName));
  }
}

module.exports = MongoClient;
