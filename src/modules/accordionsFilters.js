const accordionsFilters = () => {
  const goodsFiltersList = document.querySelector('.filters-list'),
    goodsFiltersBtn = document.querySelectorAll('.filters-list__item-btn'),
    goodsFiltersIcon = document.querySelectorAll('.filters-list__item-icon');
  const toggleGoodsFilter = (index) => {
    for (let i = 0; i < goodsFiltersBtn.length; i++) {
      if (index === i) {
        goodsFiltersIcon[i].classList.toggle('filters-list__item-icon--active');
      }
    }
  };

  if (document.querySelector('.filters-list')) {
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
  }
};

export default accordionsFilters;
