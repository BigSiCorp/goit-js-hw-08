import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);

const onPlay = throttle(function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  console.log(data.seconds);
}, 1000);

player.on('timeupdate', onPlay);
