
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

let timerData = {
  running: false,
  elapsed: 0,
  startTime: null
};

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.emit('timer-update', timerData);

  socket.on('start-timer', () => {
    if (!timerData.running) {
      timerData.running = true;
      timerData.startTime = Date.now() - timerData.elapsed;
      io.emit('timer-update', timerData);
    }
  });

  socket.on('pause-timer', () => {
    if (timerData.running) {
      timerData.running = false;
      timerData.elapsed = Date.now() - timerData.startTime;
      io.emit('timer-update', timerData);
    }
  });

  socket.on('reset-timer', () => {
    timerData.running = false;
    timerData.elapsed = 0;
    timerData.startTime = null;
    io.emit('timer-update', timerData);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

setInterval(() => {
  if (timerData.running) {
    timerData.elapsed = Date.now() - timerData.startTime;
    io.emit('timer-update', timerData);
  }
}, 1000);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
