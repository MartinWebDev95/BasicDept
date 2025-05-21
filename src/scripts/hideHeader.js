let lastScroll = 0;
let isMenuOpen = false;
const header = document.querySelector('header');
const menuMobile = document.querySelector('#menu_mobile');

// Function to avoid the header to hide when the menu is open
menuMobile.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;

  if(isMenuOpen) {
    header.classList.remove('hide_header');
  }
});

window.addEventListener('scroll', () => {
  // If the menu is open, do not hide the header
  if(isMenuOpen) return;
  
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    console.log('hola');
    header.classList.add('hide_header');
  } else {
    header.classList.remove('hide_header');
  }

  lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});