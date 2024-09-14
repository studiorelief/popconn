import gsap from 'gsap';

export function marquee() {
  gsap.to('.marquee_heading', {
    x: -154.15 * 16,
    duration: 15,
    ease: 'none',
    repeat: -1,
  });
}
