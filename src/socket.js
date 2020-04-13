const MessageHandler = require("./handlers/Message");

module.exports = server => {

    let io = require('socket.io').listen(server, function () {
      console.log('hi');
    });

    let messageHandler = new MessageHandler();

    io.sockets.on('connection', function(socket){

        socket.on('subscribe', function(room) {
            room = String(room);
            console.log('joining room', room);
            socket.join(room);
        });

        socket.on('unsubscribe', function(room) {
            console.log('leaving room', room);
            socket.leave(room);
        });

        socket.on('send', async function(data) {
            console.log('sending message');
            console.log(data);
            let dataSubmission = await messageHandler.store(data);

            io.sockets.in(String(data.room)).emit('message', dataSubmission);
        });


    });
};
