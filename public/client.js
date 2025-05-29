
const socket = io();
let running = false;
let elapsed = 0;

socket.on('timer-update', data => {
  running = data.running;
  elapsed = data.elapsed;
  updateDisplay(elapsed);
});

function updateDisplay(ms) {
  const sec = Math.floor(ms / 1000);
  const min = Math.floor(sec / 60);
  const s = sec % 60;
  document.getElementById('timer').innerText = `${min}:${s.toString().padStart(2, '0')}`;
}

function startTimer() { socket.emit('start-timer'); }
function pauseTimer() { socket.emit('pause-timer'); }
function resetTimer() { socket.emit('reset-timer'); }
