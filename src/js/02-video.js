import Vimeo from '@vimeo/player';

//console.log(Vimeo);

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const playTime = localStorage.getItem('videoplayer-current-time');

if (playTime) {
  player.setCurrentTime(playTime);
}

player.on('timeupdate', onPlay);

function onPlay(data) {
  {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }
}
