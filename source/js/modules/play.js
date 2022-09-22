/* eslint-disable no-undef */
document.querySelector('.hall__video-link').classList.add('no-js');

document.addEventListener('DOMContentLoaded', function () {
  let tag = document.createElement('script');

  tag.src = 'https://www.youtube.com/iframe_api';
  let firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  let player = document.getElementById('player');

  window.onYouTubeIframeAPIReady = function () {
    player = new YT.Player('player', {
      height: '360',
      width: '640',
      videoId: '9TZXsZItgdw',
      events: {
        'onReady': onPlayerReady,
      },
    });
  };

  function onPlayerReady() {
    document.querySelector('.hall__video-btn').addEventListener('click', function () {
      document.querySelector('.hall__video-block').classList.add('video-none');
      document.getElementById('player').classList.remove('video-none');
      player.playVideo();
    });
  }
});
