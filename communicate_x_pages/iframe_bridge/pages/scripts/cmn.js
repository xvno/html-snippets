const bridge = window.frames[0];

const $log = document.getElementById('log');
const $input = document.getElementById('msg');
const $send = document.getElementById('send');

function send(msg) {
  if (msg.length > 0) {
    bridge.postMessage(msg, '*');
  }
}

$send.onclick = function () {
  send($input.value);
}

setTimeout(() => {
  bridge.postMessage(`${document.title} online!`, '*');
});

window.onmessage = function (e) {
  logit(e.data);
};

function logit(msg) {
  let li = document.createElement('li');
  li.innerText = msg;
  $log.appendChild(li);
}