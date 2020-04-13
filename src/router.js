const express = require('express');
const router = express.Router();
const MessageHandler = require("./handlers/Message");

const messageHandler = new MessageHandler();

module.exports = app => {

  app.use('/api', router);

  router.post('/update', async function(req, res) {
    let room = req.body.room;
    room = String(room);

    console.log(room);

      if(_.isNil(room)) {
        return res.send({
          ok: false,
          error: 'error',
        });
      }

      let messages = await messageHandler.fetch(room);

      return res.send({
        ok: true,
        data: { 'messages' : messages},
      });

  });
};
