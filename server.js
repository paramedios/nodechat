'use strict';

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
var axios = require('axios');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const io = socketIO(server);
axios.get('http://s2.netradiofm.com:5878/stats?sid=1&json=1')
  .then(response => {
    console.log(response.data.streamstatus);
    console.log(response.data.streamstatus);
	
 connection.sendUTF('gf');
})
  .catch(error => {
console.log(error);
 connection.sendUTF('gggg');
});


io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
