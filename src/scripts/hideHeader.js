let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    header.classList.add('hide_header');
  } else {
    header.classList.remove('hide_header');
  }

  lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});