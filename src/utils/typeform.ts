export function tfTrigger() {
  const triggers = document.querySelectorAll('[trigger="typeform"]');
  const popupComponent = document.querySelector('.popup_component') as HTMLElement;
  const popupWrapper = document.querySelector('.popup_wrapper') as HTMLElement;
  const popupBackground = document.querySelector('.popup_background');

  if (!popupComponent || !popupBackground || !popupWrapper) return;

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      popupComponent.style.display = 'flex';
      popupComponent.style.opacity = '0';
      popupWrapper.style.transform = 'translateY(-2.5rem)';

      setTimeout(() => {
        popupComponent.style.transition = 'opacity 400ms';
        popupComponent.style.opacity = '1';

        popupWrapper.style.transition = 'transform 200ms ease-out';
        popupWrapper.style.transform = 'translateY(0)';
      }, 0);
    });
  });

  popupBackground.addEventListener('click', () => {
    popupComponent.style.opacity = '0';
    popupWrapper.style.transform = 'translateY(-2.5rem)';

    setTimeout(() => {
      popupComponent.style.display = 'none';
      popupComponent.style.transition = '';
      popupWrapper.style.transition = '';
    }, 400);
  });
}
