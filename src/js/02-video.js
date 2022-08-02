// start
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const time = function (currentTime) {
  let { seconds } = currentTime;
  let savedTime = localStorage.setItem('timer-video', seconds);
};

player.on('timeupdate', throttle(time, 1000));
const savedCurrentTime = JSON.parse(localStorage.getItem('timer-video'));
// console.log(typeof savedCurrentTime);

player.setCurrentTime(savedCurrentTime);
