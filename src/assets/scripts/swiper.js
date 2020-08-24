import { Swiper,Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

// configure Swiper to use modules
Swiper.use([Navigation ]);
// import Swiper styles

export default new Swiper('.swiper-container', {
  // Optional parameters
  observer: true,
  observeParents: true,
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 28,
  // loopedSlides:1,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});