import Player from '@vimeo/player';
// import { Player } from '@vimeo/player/dist/player.js';
import throttle from 'lodash.throttle';

const iframeEl = document.getElementById('vimeo-player');
// const iframeEl = document.querySelector('#vimeo-player');

const player = new Player(iframeEl);

player.on(
  'timeupdate',
  throttle(() => {
    const currentTime = JSON.stringify(player.getCurrentTime());
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000)
);

console.dir(player)

player.on('timeupdate', function () {
  console.log('played the video!');
  duration: 61.857;
  percent: 0.049;
  seconds: 3.034;
  const currentTime = player.currentTime();
    localStorage.setItem('videoplayer-current-time', currentTime);
    console.log(currentTime)
});

