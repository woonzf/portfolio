import { navDot } from "./nav-dot";

const scroll = (() => {
  const home = document.querySelector("#home");
  const about = document.querySelector("#about");
  const articleAbout = document.querySelector("#article-about");

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

  const hello = document.querySelectorAll(".hello");
  const homeScroll = home.querySelector(".scroll-wrapper");

  const aboutLogos = document.querySelectorAll(".about-logo");
  const aboutScroll = about.querySelector(".scroll-wrapper");
  const aboutIntro = document.querySelector("#about-intro");

  const aboutMoreEls = document.querySelectorAll(".about-more-element");

  const projectsLogos = document.querySelectorAll(".projects-logo");
  const projectsCarousel = document.querySelector("#projects-carousel");
  const projectsEnd = document.querySelector("#projects-end");

  const MARGIN_TOP = 56;

  let isPortrait = _getIsPortrait();
  let homeHeight = 0;
  let aboutHeight = 0;
  let scrollHeight = 0;
  let thresholdHome = 0;
  let thresholdAbout = 0;
  let thresholdArticleAbout = 0;
  let viewLimit = 0;

  let currentTheme = 1;
  let isOpenAboutMore = 0;

  function init() {
    getParameters();
    _showHome();

    window.onscroll = () => {
      const scroll = window.scrollY;

      // Change theme and disable menu buttons
      if (scroll >= 0 && scroll < thresholdHome && currentTheme !== 1) {
        _changeTheme(1);
        _disableBtn(1);
        navDot.toggleNavDot(0);
      } else if (
        scroll >= thresholdHome &&
        scroll < thresholdAbout &&
        currentTheme !== 2
      ) {
        _changeTheme(2);
        _disableBtn(2);
        navDot.toggleNavDot(1);
      } else if (scroll >= thresholdAbout && currentTheme !== 3) {
        _changeTheme(3);
        _disableBtn(3);
        navDot.toggleNavDot(2);
      }

      // Show and hide elements
      if (scroll >= 0 && scroll < homeHeight) _showHome();
      else _hideHome();

      if (scroll >= homeHeight - viewLimit && scroll < aboutHeight) {
        _showAbout();
        if (isPortrait) _showAboutMore();
      } else {
        _hideAbout();
        if (isPortrait) _hideAboutMore();
      }

      if (scroll >= aboutHeight - viewLimit && scroll < scrollHeight)
        _showProjects();
      else _hideProjects();
    };

    btnAboutMoreL.onclick = () => {
      let x = 0;
      if (!isOpenAboutMore) x = articleAbout.scrollWidth;
      about.scrollTo({
        left: x,
        behavior: "smooth",
      });
    };

    about.onscroll = () => {
      const scroll = about.scrollLeft;

      if (scroll >= 0 && scroll < thresholdArticleAbout && isOpenAboutMore) {
        btnAboutMoreL.querySelector("div").textContent = "MORE";
        _toggleBtnAboutMore();
        _hideAboutMore();
        isOpenAboutMore = 0;
      } else if (scroll >= thresholdArticleAbout && !isOpenAboutMore) {
        btnAboutMoreL.querySelector("div").textContent = "BACK";
        _toggleBtnAboutMore();
        _showAboutMore();
        isOpenAboutMore = 1;
      }
    };

    btnsTop.forEach((btn) => {
      btn.onclick = () => scrollTo(0);
    });
  }

  function _toggleBtnAboutMore() {
    btnAboutMoreL.classList.toggle("animate-chevron-left");
    btnAboutMoreL.classList.toggle("animate-chevron-right");
    articleAbout.classList.toggle("opacity-50");
  }

  function getParameters() {
    homeHeight = home.clientHeight + MARGIN_TOP;
    aboutHeight = homeHeight + about.clientHeight + MARGIN_TOP;
    scrollHeight = document.body.scrollHeight;
    thresholdHome = homeHeight + MARGIN_TOP - window.innerHeight / 2;
    thresholdAbout = aboutHeight + MARGIN_TOP - window.innerHeight / 2;
    thresholdArticleAbout = articleAbout.clientWidth - about.clientWidth / 2;
    viewLimit = window.innerHeight * 0.7;

    // Reset About More scroll when screen orientation changes
    let wasPortrait = isPortrait;
    isPortrait = _getIsPortrait();
    if (wasPortrait && !isPortrait) btnAboutMoreL.click();
  }

  function scrollTo(section) {
    let scrollY = 0;

    switch (section) {
      case 0:
        break;
      case 1:
        scrollY = homeHeight;
        break;
      case 2:
        scrollY = aboutHeight;
        break;
    }

    window.scrollTo({
      top: scrollY,
      behavior: "smooth",
    });
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

  // Transition
  function _showHome() {
    hello.forEach((el) => el.classList.add("slide-up"));
    setTimeout(() => {
      const scroll = window.scrollY;
      if (scroll >= 0 && scroll < homeHeight) homeScroll.classList.add("show");
    }, 1000);
  }

  function _hideHome() {
    hello.forEach((el) => el.classList.remove("slide-up"));
    homeScroll.classList.remove("show");
  }

  function _showAbout() {
    aboutLogos.forEach((el) => el.classList.add("slide-up"));
    setTimeout(() => {
      const scroll = window.scrollY;
      if (scroll >= homeHeight - viewLimit && scroll < aboutHeight) {
        aboutScroll.classList.add("show");
        btnAboutMoreL.classList.add("show");
        aboutIntro.classList.add("show");
      }
    }, 1000);
  }

  function _hideAbout() {
    aboutLogos.forEach((el) => el.classList.remove("slide-up"));
    aboutScroll.classList.remove("show");
    btnAboutMoreL.classList.remove("show");
    aboutIntro.classList.remove("show");
  }

  function _showAboutMore() {
    function _showElements() {
      const scroll = window.scrollY;
      if (scroll >= homeHeight - viewLimit && scroll < aboutHeight)
        aboutMoreEls.forEach((el) => el.classList.add("show"));
    }

    if (!isPortrait) _showElements();
    else setTimeout(_showElements, 1000);
  }

  function _hideAboutMore() {
    aboutMoreEls.forEach((el) => el.classList.remove("show"));
  }

  function _showProjects() {
    projectsLogos.forEach((el) => el.classList.add("slide-up"));
    setTimeout(() => {
      const scroll = window.scrollY;
      if (scroll >= aboutHeight - viewLimit && scroll < scrollHeight) {
        projectsCarousel.classList.add("show");
        projectsEnd.classList.add("show");
        btnsTop.forEach((el) => el.classList.add("show"));
      }
    }, 1000);
  }

  function _hideProjects() {
    projectsLogos.forEach((el) => el.classList.remove("slide-up"));
    projectsCarousel.classList.remove("show");
    projectsEnd.classList.remove("show");
    btnsTop.forEach((el) => el.classList.remove("show"));
  }

  function _getIsPortrait() {
    return Boolean(window.innerHeight > window.innerWidth);
  }

  return { init, getParameters, scrollTo };
})();

export { scroll };
