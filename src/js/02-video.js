import Player from '@vimeo/player';

const KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

console.log(player);

function onPlay(data) {
  console.log(data);
}

function onPause(data) {
  console.log(data);
}

player.on('play', onPlay);
player.on('pause', onPlay);
