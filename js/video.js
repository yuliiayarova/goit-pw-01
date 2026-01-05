const wrapper = document.querySelector('.made-video-wrapper');
const video = wrapper.querySelector('.made-video');
const playBtn = wrapper.querySelector('.play-btn');

const setPoster = () => {
  if (window.matchMedia('(min-width: 768px)').matches) {
    video.setAttribute('poster', './images/made/image_tab@1x.jpg');
  } else {
    video.setAttribute('poster', './images/made/image_mob@1x.jpg');
  }
};

// встановлюємо poster під час завантаження
setPoster();
window.addEventListener('resize', setPoster);

const toggleVideo = () => {
  if (video.paused) {
    video.play();
    playBtn.classList.add('is-hidden');
  } else {
    video.pause();
    playBtn.classList.remove('is-hidden');
  }
};

// Play/pause по кнопці
playBtn.addEventListener('click', e => {
  e.stopPropagation();
  toggleVideo();
});

// Play/pause по відео
video.addEventListener('click', toggleVideo);

// Кнопка з’являється після завершення
video.addEventListener('ended', () => {
  playBtn.classList.remove('is-hidden');
});
