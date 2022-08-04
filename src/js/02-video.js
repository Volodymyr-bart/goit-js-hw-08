// start
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const time = function (currentTime) {
  let savedTime = 0;
  let { seconds } = currentTime;
  savedTime = localStorage.setItem('timer-video', seconds);
};

player.on('timeupdate', throttle(time, 1000));
let savedCurrentTime = JSON.parse(localStorage.getItem('timer-video'));
// console.log(typeof savedCurrentTime);
if (!savedCurrentTime) {
  savedCurrentTime = 0;
}
player.setCurrentTime(savedCurrentTime);
