import 'swiper/css/bundle';

// @ts-expect-error : swiper bundle root
import Swiper from 'swiper/bundle';

export function swiperHome() {
  const swiperContainers = document.querySelectorAll('.swiper');

  swiperContainers.forEach((container) => {
    new Swiper(container, {
      loop: true,
      slidesPerView: '1',
      spaceBetween: 0,
      speed: 500,
      centeredSlides: true,
      effect: 'slide', // Default effect
      // Other available effects:
      // effect: 'fade',
      // effect: 'cube',
      // effect: 'coverflow',
      // effect: 'flip',
      // effect: 'creative',
      // effect: 'cards',
      mousewheel: {
        forceToAxis: true,
      },
      autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
        reverseDirection: false,
      },
      pagination: {
        el: '.swiper-bullet-wrapper',
        clickable: true,
      },
    });
  });
}
