// Инициализируем кнопку Каталог
const toggeleCatalog = () => {
  const btnCatalog = document.querySelector('[data-toggle=catalog]'),
    body = document.querySelector('body'),
    overlay = document.querySelector('.overlay'),
    navbarCatalog = document.querySelector('.navbar-catalog'),
    catalogMenu = document.querySelector('.navbar-catalog__menu'),
    catalogMenuLink = document.querySelectorAll('.navbar-catalog__menu-link'),
    catalogSubMenu = document.querySelectorAll('.navbar-catalog__submenu');
  btnCatalog.addEventListener('click', () => {
    body.classList.toggle('overflow--hidden');
    overlay.classList.toggle('overlay--visible');
    navbarCatalog.classList.toggle('navbar-catalog--visible');
  });

  const toggleCatalogMenu = (index) => {
    for (let i = 0; i < catalogSubMenu.length; i++) {
      if (index === i) {
        catalogMenuLink[i].classList.add('navbar-catalog__menu-link--active');
        catalogSubMenu[i].classList.add('navbar-catalog__submenu--active');
      } else {
        catalogMenuLink[i].classList.remove('navbar-catalog__menu-link--active');
        catalogSubMenu[i].classList.remove('navbar-catalog__submenu--active');
      }
    }
  };

  catalogMenu.addEventListener('mouseover', () => {
    let target = event.target;
    console.log(target);
    if (target) {
      catalogMenuLink.forEach((item, i) => {
        if (item === target) {
          toggleCatalogMenu(i);
        }
      });
      return;
    }
  });
};

export default toggeleCatalog;
