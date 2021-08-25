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

  const goodsSlider = new Swiper('.goods-slider__container', {
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

  const eventsSlider = new Swiper('.events__slider-container', {
    // Optional parameters
    loop: false,
    slidesPerView: 3,
    speed: 700,
    spaceBetween: 30,

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
      nextEl: '.events__slider-btn--next',
      prevEl: '.events__slider-btn--prev',
      disabledClass: 'events__slider-btn--disabled'
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
  const tabGoodsItem = $('.goods-slider__tabs-item');
  const tabGoodsContent = $('.goods-slider__container');
  const tabEventsItem = $('.events-tabs__item');
  const tabEventsContent = $('.events__slider-container');

  tabGoodsItem.on('click', function (event) {
    const contentActive = $(this).attr('data-target');
    tabGoodsItem.removeClass('goods-slider__tabs-item--active');
    tabGoodsContent.removeClass('goods-slider__container--active');
    $(contentActive).addClass('goods-slider__container--active');
    $(this).addClass('goods-slider__tabs-item--active');
  });

  tabEventsItem.on('click', function (event) {
    const contentActive = $(this).attr('data-target');
    tabEventsItem.removeClass('events-tabs__item--active');
    tabEventsContent.removeClass('events__slider-container--active');
    $(contentActive).addClass('events__slider-container--active');
    $(this).addClass('events-tabs__item--active');
  });

  // Инициализируем сворачиваемый контент
  const btnSeo = document.querySelector('[data-toggle=collapse]');
  const seoDescription = document.querySelector('.seo-description');
  btnSeo.addEventListener('click', function () {
    seoDescription.classList.toggle('seo-description--visible');
  });
});
