import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// *
const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

// console.log(localStorage.getItem(STORAGE_KEY));
player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0);

function onTimeUpdate(time) {
  localStorage.setItem(STORAGE_KEY, time.seconds);
  // console.log(time.seconds);
}

player.on('timeupdate', throttle(onTimeUpdate, 1000));

