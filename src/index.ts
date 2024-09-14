import './index.css';

import { gsapParallax } from './utils/gsap';
import { marquee } from './utils/marquee';
import { swiperHome } from './utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  marquee();
  swiperHome();
  gsapParallax();
});
