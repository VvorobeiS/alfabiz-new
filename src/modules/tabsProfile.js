const tabsProfile = () => {
  const profileTabs = document.querySelector('.profile__tabs'),
    profileTab = document.querySelectorAll('.profile__tabs-item'),
    profileContent = document.querySelectorAll('.profile__content');

  const toggleProfileContent = (index) => {
    for (let i = 0; i < profileContent.length; i++) {
      if (index === i) {
        profileTab[i].classList.add('tabs__item--active');
        profileContent[i].classList.add('profile__content--active');
      } else {
        profileTab[i].classList.remove('tabs__item--active');
        profileContent[i].classList.remove('profile__content--active');
      }
    }
  };

  if (document.querySelector('.profile')) {
    profileTabs.addEventListener('click', () => {
      let target = event.target;

      if (target.closest('.profile__tabs-item')) {
        profileTab.forEach((item, i) => {
          if (item === target) {
            toggleProfileContent(i);
          }
        });
        return;
      }
    });
  }
};

export default tabsProfile;
