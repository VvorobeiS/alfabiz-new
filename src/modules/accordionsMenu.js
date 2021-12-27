const accordionsMenu = () => {
  const menuList = document.querySelector('.menu-list'),
    menuListBtn = document.querySelectorAll('.menu-list__item-btn'),
    menuListIcon = document.querySelectorAll('.menu-list__item-icon');
  const toggleGoodsFilter = (index) => {
    for (let i = 0; i < menuListBtn.length; i++) {
      if (index === i) {
        menuListIcon[i].classList.toggle('menu-list__item-icon--active');
      }
    }
  };

  if (document.querySelector('.menu-list')) {
    menuList.addEventListener('click', () => {
      let target = event.target;

      if (target.closest('.menu-list__item-btn')) {
        menuListBtn.forEach((item, i) => {
          if (item === target) {
            toggleGoodsFilter(i);
          }
        });
        return;
      }
    });
  }
};

export default accordionsMenu;
