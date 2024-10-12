import 'swiper/css/bundle';

// @ts-expect-error : swiper bundle root
import Swiper from 'swiper/bundle';

export function swiperCouncil() {
  const swiperCouncilContainer = document.querySelectorAll('.swiper.is-council');

  swiperCouncilContainer.forEach((container) => {
    new Swiper(container, {
      loop: true,
      slidesPerView: '4',
      spaceBetween: 40,
      speed: 500,
      centeredSlides: false,
      effect: 'slide',
      mousewheel: {
        forceToAxis: true,
      },
      autoplay: {
        delay: 4000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
        reverseDirection: false,
      },
      navigation: {
        nextEl: '.swiper-right',
        prevEl: '.swiper-left',
      },
      breakpoints: {
        479: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 'auto',
        },
      },
    });
  });
}

export function swiperPioneers() {
  const swiperPioneersContainers = document.querySelectorAll('.swiper.is-pioneers');

  swiperPioneersContainers.forEach((container) => {
    new Swiper(container, {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 0,
      speed: 500,
      centeredSlides: false,
      effect: 'fade',
      mousewheel: {
        forceToAxis: true,
      },
      autoplay: {
        delay: 4000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
        reverseDirection: false,
      },
    });
  });
}

export function resetSwiperPioneers() {
  const loadMoreButton = document.querySelector('#reset-council-swiper');
  if (loadMoreButton) {
    loadMoreButton.addEventListener('click', () => {
      setTimeout(() => {
        swiperCouncil();
      }, 250);
    });
  }
}
