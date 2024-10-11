export function initNavbarScroll() {
  const navbar = document.querySelector('.navbar_background') as HTMLElement;
  const brandWrapper = document.querySelector('.navbar_brand') as HTMLElement;
  const menuWrapper = document.querySelector('.navbar_menu-wrapper') as HTMLElement;
  const topLeftCorner = document.querySelector('.hero_corner.is-top-left') as HTMLElement;
  const topRightCorner = document.querySelector('.hero_corner.is-top-right') as HTMLElement;

  if (!navbar || !brandWrapper || !menuWrapper) return;

  let lastScrollTop = 0;
  const scrollThreshold = 100;

  const animate = (direction: 'up' | 'down') => {
    const yValue = direction === 'down' ? -5 : 0;
    const cornerYValue = direction === 'down' ? '0rem' : '5rem';
    const ease = 'ease-out';
    const duration = 500;

    [navbar, brandWrapper, menuWrapper].forEach((element) => {
      element.style.transition = `transform ${duration}ms ${ease}`;
      element.style.transform = `translateY(${yValue}rem)`;
    });

    if (topLeftCorner && topRightCorner) {
      [topLeftCorner, topRightCorner].forEach((corner) => {
        corner.style.transition = `top ${duration}ms ${ease}`;
        corner.style.top = cornerYValue;
      });
    }
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (Math.abs(scrollTop - lastScrollTop) <= scrollThreshold) return;

    if (scrollTop > lastScrollTop) {
      animate('down');
    } else {
      animate('up');
    }

    lastScrollTop = scrollTop;
  };

  window.addEventListener('scroll', handleScroll);
}
