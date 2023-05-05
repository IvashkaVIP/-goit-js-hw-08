import Vimeo from '@vimeo/player';
import lodash from 'lodash.throttle'

//console.log(Vimeo);

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

player.on('timeupdate', lodash(onPlay,1000));

function onPlay(data) {
  {
        localStorage.setItem('videoplayer-current-time', data.seconds);
        // console.log(localStorage.getItem('videoplayer-current-time'));
  }
