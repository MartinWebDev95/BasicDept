const section_brands = document.querySelector('.section_brands');
const section_hero = document.querySelector('#section_hero');
const header = document.querySelector('header');
const navigation = document.querySelector('nav');
const menu_mobile = document.querySelector('#menu_mobile');
const horizontal_menu_btn = document.querySelector('#horizontal_menu_btn');

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
}

/* This observer will change the value of the data-transparent attribute to know if the background of the header should be transparent or not */
const observerSectionHero = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      header.setAttribute('data-transparent', 'true');
      navigation.setAttribute('data-transparent', 'true');
      menu_mobile.setAttribute('data-transparent', 'true');
      horizontal_menu_btn.setAttribute('data-transparent', 'true');
    } else {
      header.setAttribute('data-transparent', 'false');
      navigation.setAttribute('data-transparent', 'false');
      menu_mobile.setAttribute('data-transparent', 'false');
      horizontal_menu_btn.setAttribute('data-transparent', 'false');
    }
  })
}, options);

observerSectionHero.observe(section_hero);

/* This observer will update the values of the custom properties --textColor and --bgColor to change the background color and the text color of the website */
const observerSectionBrands = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelector('body').style.setProperty('--textColor', '#F9CDCD');
      document.querySelector('body').style.setProperty('--bgColor', '#252422');
    }else{
      document.querySelector('body').style.setProperty('--textColor', '#252422');
      document.querySelector('body').style.setProperty('--bgColor', '#ECECEC');
    }
  })
}, options);

observerSectionBrands.observe(section_brands);