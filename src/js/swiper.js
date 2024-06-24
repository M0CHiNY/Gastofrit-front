// import Swiper JS
import Swiper from 'swiper/bundle';
// import Swiper styles


const swiper = new Swiper('.mySwiper', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 768px
    500: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 5,
      spaceBetween: 30
    }
    // More breakpoints as needed
  }
});
