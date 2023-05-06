import Vimeo from '@vimeo/player';
import lodash from 'lodash.throttle'

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const playTime = localStorage.getItem('videoplayer-current-time');
//console.log(playTime);

if (playTime) {
   player.setCurrentTime(playTime);
}

player.on('timeupdate', lodash(onPlay,1000));

function onPlay(data) 
  {
      localStorage.setItem('videoplayer-current-time', data.seconds);
       // console.log(localStorage.getItem('videoplayer-current-time'));
  }
