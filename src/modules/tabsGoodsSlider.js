// Табы
const tabsGoodsSlider = () => {
  const goodsSliderTabs = document.querySelector('.goods-tabs'),
    goodsSliderTab = document.querySelectorAll('.goods-tabs__item'),
    goodsSliderContent = document.querySelectorAll('.goods-slider__container');

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

  if (document.querySelector('.goods-tabs')) {
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
  }
};

export default tabsGoodsSlider;
