window.addEventListener('DOMContentLoaded', () => {
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

  const eventsSlider = new Swiper('.events__slider-container', {
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
      // если браузер >= 850px
      850: {
        slidesPerView: 3
      }
    },

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

  // Инициализируем кнопку Каталог
  const toggeleCatalog = () => {
    const btnCatalog = document.querySelector('[data-toggle=catalog]'),
      body = document.querySelector('body'),
      overlay = document.querySelector('.overlay'),
      navbarCatalog = document.querySelector('.navbar-catalog');
    btnCatalog.addEventListener('click', () => {
      body.classList.toggle('overflow--hidden');
      overlay.classList.toggle('overlay--visible');
      navbarCatalog.classList.toggle('navbar-catalog--visible');
    });
  };
  toggeleCatalog();

  // Добавляем noUiSlider
  const rangeSlider = () => {
    const rangeSlidersTrack = document.querySelectorAll('.filters-list__item-slider'),
      rangeSlidersInputFrom = document.querySelectorAll('[data-input=input-from]'),
      rangeSlidersInputTo = document.querySelectorAll('[data-input=input-to]'),
      rangeSliderInputs = [];

    for (let i = 0; i < rangeSlidersTrack.length; i++) {
      rangeSliderInputs.push([rangeSlidersInputFrom[i], rangeSlidersInputTo[i]]);
    }

    [].slice.call(rangeSlidersTrack).forEach(function (slider, index) {
      noUiSlider
        .create(slider, {
          start: [0, 100000],
          connect: true,
          range: {
            min: 0,
            max: 1000000
          }
        })
        .on('update', function (values, handle) {
          rangeSliderInputs[index][handle].value = parseInt(values[handle]);
        });

      function setSliderHandle(i, value) {
        let r = [null, null];
        r[i] = value;
        slider.noUiSlider.set(r);
      }

      rangeSliderInputs[index].forEach(function (input, handle) {
        input.addEventListener('change', function () {
          setSliderHandle(handle, this.value);
        });

        input.addEventListener('keydown', function (e) {
          let values = slider.noUiSlider.get();
          let value = Number(values[handle]);

          // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
          let steps = slider.noUiSlider.steps();

          // [down, up]
          let step = steps[handle];

          let position;

          // 13 is enter,
          // 38 is key up,
          // 40 is key down.
          switch (e.which) {
            case 13:
              setSliderHandle(handle, this.value);
              break;

            case 38:
              // Get step to go increase slider value (up)
              position = step[1];

              // false = no step is set
              if (position === false) {
                position = 1;
              }

              // null = edge of slider
              if (position !== null) {
                setSliderHandle(handle, value + position);
              }

              break;

            case 40:
              position = step[0];

              if (position === false) {
                position = 1;
              }

              if (position !== null) {
                setSliderHandle(handle, value - position);
              }

              break;
          }
        });
      });
    });
  };
  rangeSlider();

  // Табы
  const tabs = () => {
    const goodsSliderTabs = document.querySelector('.goods-tabs'),
      goodsSliderTab = document.querySelectorAll('.goods-tabs__item'),
      goodsSliderContent = document.querySelectorAll('.goods-slider__container'),
      eventsSliderTabs = document.querySelector('.events-tabs'),
      eventsSliderTab = document.querySelectorAll('.events-tabs__item'),
      eventsSliderContent = document.querySelectorAll('.events__slider-container'),
      goodsTabs = document.querySelector('.goods-view'),
      goodsTab = document.querySelectorAll('[data-toggle=goods-tab]'),
      goodsContent = document.querySelectorAll('[data-target=goods-content]');
    const toggleGoodsSlider = (index) => {
      for (let i = 0; i < goodsSliderContent.length; i++) {
        if (index === i) {
          goodsSliderTab[i].classList.add('tabs__item--active');
          goodsSliderContent[i].classList.add('goods-slider__container--active');
        } else {
          goodsSliderTab[i].classList.remove('tabs__item--active');
          goodsSliderContent[i].classList.remove('goods-slider__container--active');
        }
      }
    };

    goodsSliderTabs.addEventListener('click', () => {
      let target = event.target;

      target = target.closest('.goods-tabs__item');

      if (target) {
        goodsSliderTab.forEach((item, i) => {
          if (item === target) {
            toggleGoodsSlider(i);
          }
        });
        return;
      }
    });
    const toggleEventsSlider = (index) => {
      for (let i = 0; i < eventsSliderContent.length; i++) {
        if (index === i) {
          eventsSliderTab[i].classList.add('tabs__item--active');
          eventsSliderContent[i].classList.add('events__slider-container--active');
        } else {
          eventsSliderTab[i].classList.remove('tabs__item--active');
          eventsSliderContent[i].classList.remove('events__slider-container--active');
        }
      }
    };

    if (document.querySelector('.events-tabs')) {
      eventsSliderTabs.addEventListener('click', () => {
        let target = event.target;

        target = target.closest('.events-tabs__item');

        if (target) {
          eventsSliderTab.forEach((item, i) => {
            if (item === target) {
              toggleEventsSlider(i);
            }
          });
          return;
        }
      });
    }
    const toggleGoodsContent = (index) => {
      for (let i = 0; i < goodsContent.length; i++) {
        if (index === i) {
          goodsTab[i].classList.add('goods-view__btn--active');
          goodsContent[i].classList.remove('d-none');

          let op = 0;

          function startAnimation() {
            if (op !== 9) {
              requestAnimationFrame(startAnimation);
            }
            op++;
            goodsContent[i].style.opacity = `${op / 10}`;
          }
          startAnimation();
        } else {
          goodsTab[i].classList.remove('goods-view__btn--active');
          goodsContent[i].classList.add('d-none');
        }
      }
    };

    goodsTabs.addEventListener('click', () => {
      let target = event.target;

      target = target.closest('.goods-view__btn');

      if (target) {
        goodsTab.forEach((item, i) => {
          if (item === target) {
            toggleGoodsContent(i);
          }
        });
        return;
      }
    });
  };
  tabs();

  // Аккордеоны
  const accodions = () => {
    const btnSeo = document.querySelector('[data-toggle=collapse]'),
      seoDescription = document.querySelector('.seo-description'),
      goodsFiltersList = document.querySelector('.filters-list'),
      goodsFiltersBtn = document.querySelectorAll('.filters-list__item-btn'),
      goodsFiltersIcon = document.querySelectorAll('.filters-list__item-icon');
    if (document.querySelector(['[data-toggle=collapse]'])) {
      btnSeo.addEventListener('click', function () {
        seoDescription.classList.toggle('seo-description--visible');
      });
    }

    const toggleGoodsFilter = (index) => {
      for (let i = 0; i < goodsFiltersBtn.length; i++) {
        if (index === i) {
          goodsFiltersIcon[i].classList.toggle('filters-list__item-icon--active');
        }
      }
    };

    goodsFiltersList.addEventListener('click', () => {
      let target = event.target;

      if (target.closest('.filters-list__item-btn')) {
        goodsFiltersBtn.forEach((item, i) => {
          if (item === target) {
            toggleGoodsFilter(i);
          }
        });
        return;
      }
    });
  };
  accodions();
});
