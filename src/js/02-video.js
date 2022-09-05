import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });

const onPlay = _.throttle(function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  console.log(data.seconds);
}, 1000);

player.on('timeupdate', onPlay);
