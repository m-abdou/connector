const MongoClient = require("../clients/MongoClient");

class Repository {

  constructor(collectionName) {
    this.collection = MongoClient.getCollection(collectionName);
  }

  save(schema) {
    return this.collection
      .then(collection => collection.insertOne(schema))
      .then(result => result.ops[0]);

  }

  findBy(filter) {
      return this.collection
          .then(collection => collection.find(filter))
          .then(cursor => cursor.toArray())
          .then(result => result);
  }

}

module.exports = Repository;
