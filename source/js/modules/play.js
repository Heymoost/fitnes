let playBtn = document.querySelector('.hall__video-btn');
let video = document.querySelector('.hall__video');
let videoPlayer = document.querySelector('.hall__video-player');


playBtn.addEventListener('click', function () {
  video.classList.add('video-none');
  videoPlayer.classList.remove('video-none');
});
