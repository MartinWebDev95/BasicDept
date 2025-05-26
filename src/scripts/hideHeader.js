let lastScroll = 0;
let isMenuOpen = false;
let isHorizontalMenuOpen = false;

const header = document.querySelector('header');
const logo = document.querySelector('.logo');
const menuMobile = document.querySelector('#menu_mobile');
const horizontalMenuBtnOpen = document.querySelector('#horizontal_menu_btn_open');
const horizontalMenuBtnClose = document.querySelector('#horizontal_menu_btn_close');

// Function to avoid the header to hide when the menu is open
menuMobile.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;

  if(isMenuOpen) {
    header.classList.remove('hide_header');
    logo.style.fill = '#F9CDCD';
  }else{
    logo.style.fill = '';
  }
});

// Function to avoid the header to hide when the horizontal menu is opened
horizontalMenuBtnOpen.addEventListener('click', () => {
  isHorizontalMenuOpen = !isHorizontalMenuOpen;

  if(isHorizontalMenuOpen) {
    header.classList.remove('hide_header');
  }
});

// Function to allow the header to hide when the horizontal menu is closed
horizontalMenuBtnClose.addEventListener('click', () => {
  isHorizontalMenuOpen = !isHorizontalMenuOpen;

  if(!isHorizontalMenuOpen) {
    header.classList.add('hide_header');
  }
});

window.addEventListener('scroll', () => {
  // If menu mobile or horizontal menu are opened, do not hide the header
  if(isMenuOpen || isHorizontalMenuOpen) return;

  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    header.classList.add('hide_header');
  } else {
    header.classList.remove('hide_header');
  }

  lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});