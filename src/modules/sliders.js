import Swiper, { Navigation, Pagination, EffectFade } from 'swiper';
const sliders = () => {
  Swiper.use([Navigation, Pagination, EffectFade]);
  const heroSlider = new Swiper('[data-slider=hero-slider]', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    initialSlide: 0,
    speed: 700,

    // Navigation arrows
    navigation: {
      nextEl: '.hero-slider__btn--next',
      prevEl: '.hero-slider__btn--prev'
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
    // autoplay: {
    //   delay: 5000,
    //   // Отключить после ручного переключения
    //   disableOnInteraction: false
    // },

    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  });

  const advantagesSlider = new Swiper('[data-slider=advantages-slider]', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 15,
    speed: 700,

    // Настройки адаптивной версии
    breakpoints: {
      // если браузер >= 320px
      320: {
        slidesPerView: 1
      },
      // если браузер >= 480px
      480: {
        slidesPerView: 2
      },
      // если браузер >= 768px
      769: {
        slidesPerView: 3
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.advantages-slider__btn--next',
      prevEl: '.advantages-slider__btn--prev'
    },

    // Управление клавиатурой
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
    }

    // Автопрокрутка
    // autoplay: {
    //   delay: 5000,
    //   // Отключить после ручного переключения
    //   disableOnInteraction: false
    // },

    // effect: 'fade',
    // fadeEffect: {
    //   crossFade: true
    // }
  });

  const brandsSlider = new Swiper('[data-slider=brands-slider]', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 15,
    speed: 700,

    // Настройки адаптивной версии
    breakpoints: {
      // если браузер >= 320px
      320: {
        slidesPerView: 1
      },
      // если браузер >= 480px
      480: {
        slidesPerView: 2
      },
      // если браузер >= 768px
      769: {
        slidesPerView: 3
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.brands-slider__btn--next',
      prevEl: '.brands-slider__btn--prev'
    },

    // Управление клавиатурой
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
    }

    // Автопрокрутка
    // autoplay: {
    //   delay: 5000,
    //   // Отключить после ручного переключения
    //   disableOnInteraction: false
    // },

    // effect: 'fade',
    // fadeEffect: {
    //   crossFade: true
    // }
  });

  const newsSlider = new Swiper('[data-slider=news-slider]', {
    // Optional parameters
    loop: false,
    slidesPerView: 3,
    spaceBetween: 15,
    speed: 700,

    // Настройки адаптивной версии
    breakpoints: {
      // если браузер >= 320px
      320: {
        slidesPerView: 1
      },
      // если браузер >= 480px
      480: {
        slidesPerView: 2
      }
      // // если браузер >= 768px
      // 769: {
      //   slidesPerView: 3
      // }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.news-slider__btn--next',
      prevEl: '.news-slider__btn--prev',
      disabledClass: 'news-slider__btn--disabled'
    },

    // Управление клавиатурой
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
    }

    // Автопрокрутка
    // autoplay: {
    //   delay: 5000,
    //   // Отключить после ручного переключения
    //   disableOnInteraction: false
    // },

    // effect: 'fade',
    // fadeEffect: {
    //   crossFade: true
    // }
  });

  const productSlider = new Swiper('.product-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    speed: 700,

    // Настройки адаптивной версии
    breakpoints: {
      // если браузер >= 320px
      320: {
        slidesPerView: 1
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.product-slider__btn--next',
      prevEl: '.product-slider__btn--prev'
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

  const eventSlider = new Swiper('[data-slider=event-slider]', {
    // Optional parameters
    loop: false,
    slidesPerView: 1,
    speed: 700,

    // Настройки адаптивной версии
    breakpoints: {
      // если браузер >= 320px
      320: {
        slidesPerView: 1
      },
      // если браузер >= 575px
      575: {
        slidesPerView: 2
      },
      // если браузер >= 768px
      769: {
        slidesPerView: 2
      },
      // если браузер >= 992px
      992: {
        slidesPerView: 3
      },
      // если браузер >= 1200px
      1200: {
        slidesPerView: 4
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.event-slider__btn--next',
      prevEl: '.event-slider__btn--prev',
      disabledClass: 'event-slider__btn--disabled'
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

  const goodsSlider = new Swiper('[data-slider=goods-slider]', {
    // Optional parameters
    loop: false,
    slidesPerView: 4,
    speed: 700,
    spaceBetween: 15,

    // Настройки адаптивной версии
    breakpoints: {
      // если браузер >= 320px
      320: {
        slidesPerView: 1
      },
      // если браузер >= 576px
      480: {
        slidesPerView: 2
      },
      576: {
        slidesPerView: 2
      },
      // если браузер >= 768px
      769: {
        slidesPerView: 2
      },
      // если браузер >= 768px
      992: {
        slidesPerView: 3
      },
      // если браузер >= 1200px
      1200: {
        slidesPerView: 4
      }
    },

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

  const eventsSlider = new Swiper('[data-slider=events-slider]', {
    // Optional parameters
    loop: false,
    slidesPerView: 3,
    speed: 700,
    spaceBetween: 15,

    // Настройки адаптивной версии
    breakpoints: {
      // если браузер >= 320px
      320: {
        slidesPerView: 1
      },
      // если браузер >= 480px
      550: {
        slidesPerView: 2
      },
      // если браузер >= 768px
      768: {
        slidesPerView: 3
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.events-slider__btn--next',
      prevEl: '.events-slider__btn--prev',
      disabledClass: 'events-slider__btn--disabled'
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
};

export default sliders;
