const scroll = (() => {
  const main = document.querySelector("main");
  const home = document.querySelector("#home");
  const about = document.querySelector("#about");
  const articleAbout = document.querySelector("#article-about");
  const articleAboutMore = document.querySelector("#article-about-more");

  const btnDarkMode = document.querySelectorAll(".btn-dark-mode");
  const spanMenu = document.querySelector("#menu-text > span");
  const spanContact = document.querySelector("#contact-text > span");

  const btnsMenuL = [
    document.querySelector("#btn-home-l"),
    document.querySelector("#btn-about-l"),
    document.querySelector("#btn-projects-l"),
  ];

  const btnsTop = document.querySelectorAll(".btn-top");
  const btnAboutMoreL = document.querySelector("#btn-about-more-l");

  const marginTop = 56;
  let scrollHeightHome = 0;
  let scrollHeightAbout = 0;
  let currentTheme = 1;
  let isOpenAboutMore = 0;
  let scrollWidthArticleAboutMore = 0;

  function init() {
    getScrollHeightSection();

    main.onscrollend = () => {
      const scroll = main.scrollTop;
      if (scroll >= 0 && scroll < scrollHeightHome) {
        _changeTheme(1);
        _disableBtn(1);
      } else if (scroll >= scrollHeightHome && scroll < scrollHeightAbout) {
        _changeTheme(2);
        _disableBtn(2);
      } else {
        _changeTheme(3);
        _disableBtn(3);
      }
    };

    btnAboutMoreL.onclick = () => {
      if (isOpenAboutMore === 1) about.scrollTo(0, 0);
      else about.scrollTo(articleAbout.clientWidth, 0);
    };

    about.onscrollend = () => {
      const scroll = about.scrollLeft;
      const wasOpen = isOpenAboutMore;

      if (scroll >= 0 && scroll < scrollWidthArticleAboutMore / 2) {
        if (isOpenAboutMore === 1) {
          btnAboutMoreL.querySelector("div").textContent = "MORE";
          isOpenAboutMore = 0;
        }
      } else {
        if (isOpenAboutMore === 0) {
          btnAboutMoreL.querySelector("div").textContent = "BACK";
          isOpenAboutMore = 1;
        }
      }

      if (isOpenAboutMore !== wasOpen) {
        articleAbout.classList.toggle("opacity-50");
        btnAboutMoreL.classList.toggle("animate-chevron-right");
        btnAboutMoreL.classList.toggle("animate-chevron-left");
      }
    };

    btnsTop.forEach((btn) => {
      btn.onclick = () => {
        main.scrollTo(0, 0);
      };
    });
  }

  function getScrollHeightSection() {
    scrollHeightHome = home.clientHeight + marginTop;
    scrollHeightAbout = about.clientHeight + marginTop + scrollHeightHome;
    scrollWidthArticleAboutMore = articleAboutMore.clientWidth;
  }

  function scrollTo(section) {
    if (section === 1) main.scrollTo(0, scrollHeightHome);
    else if (section === 2) main.scrollTo(0, scrollHeightAbout);
  }

  function _changeTheme(theme) {
    spanMenu.classList.remove(`text-theme-${currentTheme}`);
    spanContact.classList.remove(`text-theme-${currentTheme}`);

    btnDarkMode.forEach((btn) => {
      btn.classList.remove(`theme-${currentTheme}`);
      btn.classList.add(`theme-${theme}`);
    });

    spanMenu.classList.add(`text-theme-${theme}`);
    spanContact.classList.add(`text-theme-${theme}`);

    currentTheme = theme;
  }

  function _disableBtn(n) {
    const index = n - 1;
    const length = btnsMenuL.length;
    for (let i = 0; i < length; i++) {
      if (i === index) btnsMenuL[i].disabled = true;
      else btnsMenuL[i].disabled = false;
    }
  }

  return { init, getScrollHeightSection, scrollTo };
})();

export { scroll };
