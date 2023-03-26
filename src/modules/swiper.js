import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 6,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 3,
    },
    980: {
      slidesPerView: 4,
    },
    1240: {
      slidesPerView: 5,
    },
    1480: {
      slidesPerView: 6,
    }
  }
});

const buttonNext = document.querySelector('.swiper-button-next');
const buttonPrev = document.querySelector('.swiper-button-prev');

buttonNext.addEventListener('click', () => {
  swiper.slideNext(1000);
});

buttonPrev.addEventListener('click', () => {
  swiper.slidePrev(1000);
});

// добавляет класс при достижении последнего слайда
swiper.on('reachEnd', function () {
  buttonNext.classList.add('swiper-button-disabled')
});

// добавляет класс при достижении первого слайда
swiper.on('reachBeginning', function () {
  buttonPrev.classList.add('swiper-button-disabled');
});

// удалить класс, если это не первый и не последгний слайд
swiper.on('fromEdge', function () {
  buttonPrev.classList.remove('swiper-button-disabled');
  buttonNext.classList.remove('swiper-button-disabled');
});
