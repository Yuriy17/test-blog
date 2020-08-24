import './assets/stylesheets/index.scss';

import  swiper from './assets/scripts/swiper';
import select from './assets/scripts/select-lang';

select();
document.addEventListener('load',()=>{
  swiper.navigation.update();
})