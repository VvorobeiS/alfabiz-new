$(document).ready(function () {
  const mainSlider = new Swiper(".main-slider__container", {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    initialSlide: 0,
    speed: 700,

    // Navigation arrows
    navigation: {
      nextEl: ".main-slider__btn--next",
      prevEl: ".main-slider__btn--prev",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Управление клавиатурой
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    // Автопрокрутка
    autoplay: {
      delay: 5000,
      // Отключить после ручного переключения
      disableOnInteraction: false,
    },

    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });
});
