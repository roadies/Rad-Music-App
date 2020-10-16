require('dotenv').config();
require('./db/index.js');

const { app } = require('./app');
const socket = require('socket.io');

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.info(`Server listening on :${PORT}`);
});

io = socket(server);

io.on('connection', (socket) => {
  
  const {roomName} = socket.handshake.query;
  // console.log(roomId, '<<<<<<<< ROOM ID')
  socket.join(roomName)
  // console.info(`User joined room ${roomName} successfully`);


  socket.on('clientSendMessage', (data) => {
    console.log(data);
    const { roomId } = data;
    io.in(roomId).emit('serverSendMessage', data);
  })

  socket.on('disconnect', (data) => {
    // const { username } = data;
    console.log(`User ${username} disconnecting`)
  })
})


//css for livechat
//pr
//deploy
//test