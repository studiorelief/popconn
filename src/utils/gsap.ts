import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function gsapParallax() {
  const topElements = document.querySelectorAll('[gsap="to-bottom"]');
  const bottomElements = document.querySelectorAll('[gsap="to-top"]');
  const middleElements = document.querySelectorAll('[gsap="middle"]');

  gsap.utils.toArray(topElements).forEach((element) => {
    if (element instanceof Element) {
      gsap.to(element, {
        y: '6rem',
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  });

  gsap.utils.toArray(bottomElements).forEach((element) => {
    if (element instanceof Element) {
      gsap.to(element, {
        y: '-6rem',
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  });

  gsap.utils.toArray(middleElements).forEach((element) => {
    if (element instanceof Element) {
      gsap.to(element, {
        y: '-3rem',
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  });
}
