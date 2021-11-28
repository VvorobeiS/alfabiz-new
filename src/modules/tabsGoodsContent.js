const tabsGoodsContent = () => {
  const goodsTabs = document.querySelector('.goods-view'),
    goodsTab = document.querySelectorAll('[data-toggle=goods-tab]'),
    goodsContent = document.querySelectorAll('[data-target=goods-content]');

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

  if (document.querySelector('.goods-view')) {
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
  }
};

export default tabsGoodsContent;
