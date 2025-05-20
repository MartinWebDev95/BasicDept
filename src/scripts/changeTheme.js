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

      // Remove the animation to change the color of the logo
      document.querySelector('.logo').style.animation = 'none';
      document.querySelector('.logo').style.fill = '#F9CDCD';
    } else {
      document.querySelector('body').style.setProperty('--textColor', '#252422');
      document.querySelector('body').style.setProperty('--bgColor', '#ECECEC');
      document.querySelector('body').style.setProperty('--bgBar', '#B4B4B4');

      // Restore the animation
      document.querySelector('.logo').style.animation = 'changeColorLogo linear both';
      document.querySelector('.logo').style.animationTimeline = 'scroll()';
      document.querySelector('.logo').style.animationRange = '200px 500px';
      
      // Restore the original color of the logo
      document.querySelector('.logo').style.fill = '';
    }
  });
}, options);

observer.observe(section);