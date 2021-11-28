const tabsEventsSlider = () => {
  const eventsSliderTabs = document.querySelector('.events-tabs'),
    eventsSliderTab = document.querySelectorAll('.events-tabs__item'),
    eventsSliderContent = document.querySelectorAll('[data-tab=events-tabs]');
  const toggleEventsSlider = (index) => {
    for (let i = 0; i < eventsSliderContent.length; i++) {
      if (index === i) {
        eventsSliderTab[i].classList.add('tabs__item--active');
        eventsSliderContent[i].classList.add('events-slider__container--active');
      } else {
        eventsSliderTab[i].classList.remove('tabs__item--active');
        eventsSliderContent[i].classList.remove('events-slider__container--active');
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
};

export default tabsEventsSlider;
