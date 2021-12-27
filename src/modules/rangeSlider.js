import noUiSlider from 'nouislider';
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

export default rangeSlider;
