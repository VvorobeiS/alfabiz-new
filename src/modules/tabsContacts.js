// Табы
const tabsContacts = () => {
  const contactsTabs = document.querySelector('.contacts__tabs'),
    contactsTab = document.querySelectorAll('.contacts__tabs-item'),
    contactsMaps = document.querySelectorAll('.contacts__map');

  const toggleContacts = (index) => {
    for (let i = 0; i < contactsMaps.length; i++) {
      if (index === i) {
        contactsTab[i].classList.add('tabs__item--active');
        contactsMaps[i].classList.add('contacts__map--active');
      } else {
        contactsTab[i].classList.remove('tabs__item--active');
        contactsMaps[i].classList.remove('contacts__map--active');
      }
    }
  };

  if (document.querySelector('.contacts__tabs')) {
    contactsTabs.addEventListener('click', () => {
      let target = event.target;

      target = target.closest('.contacts__tabs-item');

      if (target) {
        contactsTab.forEach((item, i) => {
          if (item === target) {
            toggleContacts(i);
          }
        });
        return;
      }
    });
  }
};

export default tabsContacts;
