// import Swiper JS
import Swiper from 'swiper/bundle';
// import Swiper styles


const swiper = new Swiper('.mySwiper', {
  // Optional parameters
  spaceBetween: 20,
  slidesPerView: 3,
  slidesPerGroup: 1,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
