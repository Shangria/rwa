var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  loop: false,  
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    250: {
      slidesPerView: 1.5,
      spaceBetween: 30,
      centerSlides: false
    },
    671: {
      slidesPerView: 1.5,
      spaceBetween: 50,
      centerSlides: false
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 50,
      centerSlides: false
    },
  },
});

var swiperHome = new Swiper(".mySwiperHome", {
  grabCursor: true,
  loop: false,
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    250: {
      slidesPerView: 1.5,
      spaceBetween: 30,
      centerSlides: false,
      allowSlideNext: true,
      allowSlidePrev: true
    },
    671: {
      slidesPerView: 1.5,
      spaceBetween: 50,
      centerSlides: false,
      allowSlideNext: true,
      allowSlidePrev: true
    },
    867: {
      slidesPerView: 'auto',
      allowSlideNext: false,
      allowSlidePrev: false,
      onlyExternal: true,
    },
  }
});

