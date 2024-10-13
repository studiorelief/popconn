import './index.css';

import { gsapParallax } from '$utils/gsap';
import { loadScript } from '$utils/loadscript';
import { marqueeAnimation } from '$utils/marquee';
import { initNavbarScroll } from '$utils/navbar';
import { resetSwiperPioneers, swiperCouncil, swiperPioneers } from '$utils/swiper';
import { tfTrigger } from '$utils/typeform';

window.Webflow ||= [];
window.Webflow.push(() => {
  /* global */
  Promise.all([
    loadScript(
      'https://cdn.jsdelivr.net/npm/@finsweet/attributes-scrolldisable@1/scrolldisable.js'
    ),
  ]);

  if (window.innerWidth >= 1024) {
    initNavbarScroll();
  }

  tfTrigger();
  marqueeAnimation();
  gsapParallax();

  /* swiper */
  swiperCouncil();
  swiperPioneers();
  resetSwiperPioneers();
});
