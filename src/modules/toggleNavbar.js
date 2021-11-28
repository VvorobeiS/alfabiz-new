const toggleNavbar = () => {
  // Закрепляем панель навигации при скролле
  const navbar = document.querySelector('.navbar'),
    subbar = document.querySelector('.subbar'),
    headerTop = document.querySelector('.header__container'),
    offset = navbar.offsetTop,
    navbarHeight = navbar.clientHeight;
  if (document.querySelector('.subbar')) {
    subbarHeight = subbar.clientHeight;
  }

  document.addEventListener('scroll', () => {
    let scrolled = window.pageYOffset;
    if (scrolled >= offset) {
      headerTop.style.marginBottom = `${navbarHeight}px`;
      navbar.classList.add('navbar--fixed');
    } else if (scrolled <= offset) {
      headerTop.style.marginBottom = '0px';
      navbar.classList.remove('navbar--fixed');
    } else if (scrolled >= offset && document.querySelector('.subbar')) {
      headerTop.style.marginBottom = `${navbarHeight + subbarHeight}px`;
      navbar.classList.add('navbar--fixed');
      subbar.classList.add('subbar--fixed');
    } else if (scrolled <= offset && document.querySelector('.subbar')) {
      headerTop.style.marginBottom = '0px';
      navbar.classList.remove('navbar--fixed');
      subbar.classList.remove('subbar--fixed');
    }
  });
};

export default toggleNavbar;
