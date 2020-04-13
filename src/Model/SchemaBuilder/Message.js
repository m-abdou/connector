const moment = require('moment');

class Message {

  static  build(object) {
      return {
          room: object.room,
          sender: object.user,
          sender_id: object.sender_id,
          message: object.message,
          createdAt: moment().format('Y-MM-DD H:SS')
      };
  }

}

module.exports = Message;
