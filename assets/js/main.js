$(document).ready(function () {
  // Инициализиуем слайдеры
  const mainSlider = new Swiper('.main-slider__container', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    initialSlide: 0,
    speed: 700,

    // Navigation arrows
    navigation: {
      nextEl: '.main-slider__btn--next',
      prevEl: '.main-slider__btn--prev'
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    // Управление клавиатурой
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
    },

    // Автопрокрутка
    autoplay: {
      delay: 5000,
      // Отключить после ручного переключения
      disableOnInteraction: false
    },

    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  });

  const heroSlider = new Swiper('.goods-slider__container', {
    // Optional parameters
    loop: false,
    slidesPerView: 4,
    speed: 700,
    spaceBetween: 25,

    // // Настройки адаптивной версии
    // breakpoints: {
    //   // если браузер >= 320px
    //   320: {
    //     slidesPerView: 1,
    //   },
    //   // если браузер >= 320px
    //   577: {
    //     slidesPerView: 2,
    //   },
    //   // если браузер >= 768px
    //   769: {
    //     slidesPerView: 3,
    //   },
    //   992: {
    //     slidesPerView: 4,
    //   },
    //   // если браузер >= 1200px
    //   1200: {
    //     slidesPerView: 4,
    //   },
    // },

    // Navigation arrows
    navigation: {
      nextEl: '.goods-slider__btn--next',
      prevEl: '.goods-slider__btn--prev',
      disabledClass: 'goods-slider__btn--disabled'
    },

    // Управление клавиатурой
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
    },

    observer: true,
    observeParents: true
  });

  // Инициализируем табы
  const tabItem = $('.goods-slider__tabs-item');
  const tabContent = $('.goods-slider__container');

  tabItem.on('click', function (event) {
    const contentActive = $(this).attr('data-target');
    tabItem.removeClass('goods-slider__tabs-item--active');
    tabContent.removeClass('goods-slider__container--active');
    $(contentActive).addClass('goods-slider__container--active');
    $(this).addClass('goods-slider__tabs-item--active');
  });
});
