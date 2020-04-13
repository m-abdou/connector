const _ = require("lodash");
const Repository = require("../Model/Repository");
const MessageSchemaBuilder = require("../Model/SchemaBuilder/Message");
let {collection} = require("../config");

const repository = new Repository(collection.message);

class Message {

      async store(data) {

          data.room = String(data.room);
          let message = MessageSchemaBuilder.build(data);
          let dataRetrieve = await repository.save(message);
          if(!_.isNil(dataRetrieve)) {
              dataRetrieve = _.omit(dataRetrieve, ['_id']);
          }

          return dataRetrieve;
      }

      async fetch(room) {
            let messages = await repository.findBy({room: room});
            messages = _.map(messages, function (obj) {
              return _.omit(obj, '_id')
            });

            return messages;
      }
}

module.exports = Message;
