target = window.frames[0] || window.parent;

const $log = document.getElementById('log');
const $input = document.getElementById('msg');
const $send = document.getElementById('send');

function send(e) {
  let msg = e.value;
  if (msg.length > 0) {
    target.postMessage(msg, '*');
  }

}
window.onmessage = function (e) {
  console.log(e);
  let $li = document.createElement('li');
  $li.innerHTML = e.data;
  $log.appendChild($li);
};

$send.onclick = function () {
  send($input);
  console.log('clicked');
}
target.postMessage('Activated', '*');