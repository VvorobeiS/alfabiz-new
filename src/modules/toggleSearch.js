const toggleSearch = () => {
  const btnSearch = document.querySelectorAll('[data-toggle=form-search]'),
    formSearch = document.querySelector('.form-search');

  btnSearch.forEach((item) => {
    item.addEventListener('click', function () {
      formSearch.classList.toggle('form-search--visible');
    });
  });
};

export default toggleSearch;
