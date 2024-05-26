
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

// Restore the video playback time from localStorage
const savedTime = localStorage.getItem(LOCAL_STORAGE_KEY);
if (savedTime) {
    player.setCurrentTime(savedTime).catch(error => {
        console.error('Failed to set current time:', error);
    });
}

// Save the current time to localStorage at most once per second
const onTimeUpdate = throttle(({ seconds }) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, seconds);
}, 1000);

player.on('timeupdate', onTimeUpdate);
