'use strict';

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const axios = require('axios');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const io = socketIO(server);
 axios.get('http://s2.netradiofm.com:5898/stats?sid=1&json=1')
  .then(response => {

	
 connection.sendUTF('{"id"}');
})
  .catch(error => {
console.log(error);
 connection.sendUTF('{"yyyy"}');
});



io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
