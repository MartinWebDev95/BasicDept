const section = document.querySelector('.section_brands');

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelector('body').style.setProperty('--textColor', '#F9CDCD');
      document.querySelector('body').style.setProperty('--bgColor', '#252422');
      document.querySelector('body').style.setProperty('--bgBar', '#5E5E5E');
      document.querySelector('body').style.setProperty('--colorLogo', '#F9CDCD');
    } else {
      document.querySelector('body').style.setProperty('--textColor', '#252422');
      document.querySelector('body').style.setProperty('--bgColor', '#ECECEC');
      document.querySelector('body').style.setProperty('--bgBar', '#B4B4B4');
      document.querySelector('body').style.setProperty('--colorLogo', '#252422');
    }
  });
}, options);

observer.observe(section);