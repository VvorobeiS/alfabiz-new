const toggleCollapse = () => {
  const btnSeo = document.querySelector('[data-toggle=collapse]'),
    seoDescription = document.querySelector('.seo-description');

  if (document.querySelector('[data-toggle=collapse]')) {
    btnSeo.addEventListener('click', function () {
      seoDescription.classList.toggle('seo-description--visible');
    });
  }
};

export default toggleCollapse;
