const pagesMap = {
  login: '.page-login',
  main: '.page-main',
  profile: '.page-profile',
};

export default {
  openPage(name) {
    const selector = pagesMap[name];
    const element = document.querySelector(selector);

    for (key in pagesMap) {
      if (key !== name) {
        element.addClass('hidden');
      }

      if (key === name && element.classList == 'hidden') {
        element.removeClass('hidden');
      }
    }
  },
};
