import Swiper, {Navigation} from 'swiper';

export const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  slidesPerGroup: 1,
  loop: true,
  allowTouchMove: false,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

export const carousel = new Swiper('.carousel', {
  modules: [Navigation],
  setWrapperSize: true,
  slidesPerGroup: 1,
  slidesPerView: 1,
  allowTouchMove: false,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.carousel-btn-next',
    prevEl: '.carousel-btn-prev',
  },
});
