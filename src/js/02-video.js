import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

if (localStorage.getItem(KEY) !== null) {
  player.setCurrentTime(localStorage.getItem(KEY));
}
player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem(KEY, seconds);
}
