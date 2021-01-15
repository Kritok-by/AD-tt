import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';
const arrImg = [
  '../img/calculator.svg',
  '../img/binoculars.svg',
  '../img/circule.svg',
  '../img/man.svg',
];
export const swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class="${className}"><img src="${arrImg[index]}" alt="img"/></div>`;
    },
  },
});
