const scroll = (() => {
  const main = document.querySelector("main");
  const home = document.querySelector("#home");

  const brand = document.querySelector("#brand");
  const btnDarkMode = document.querySelectorAll(".btn-dark-mode");
  const spanMenu = document.querySelector("#menu-text > span");
  const spanContact = document.querySelector("#contact-text > span");

  const btnsMenuL = [
    document.querySelector("#btn-home-l"),
    document.querySelector("#btn-about-l"),
    document.querySelector("#btn-projects-l"),
  ];

  const marginTop = 56;
  let heightSection = 0;
  let scrollHeightSection = 0;
  let currentTheme = 1;

  function init() {
    _getScrollHeightSection();

    window.onresize = () => {
      _getScrollHeightSection();
    };

    main.onscrollend = () => {
      const scroll = main.scrollTop;
      if (scroll >= 0 && scroll < scrollHeightSection) {
        _changeTheme(1);
        _disableBtn(1);
      } else if (
        scroll >= scrollHeightSection &&
        scroll < scrollHeightSection * 2
      ) {
        _changeTheme(2);
        _disableBtn(2);
      } else {
        _changeTheme(3);
        _disableBtn(3);
      }
    };
  }

  function _getScrollHeightSection() {
    heightSection = home.clientHeight;
    scrollHeightSection = heightSection + marginTop;
  }

  function _changeTheme(theme) {
    brand.classList.remove(`text-theme-${currentTheme}`);
    spanMenu.classList.remove(`text-theme-${currentTheme}`);
    spanContact.classList.remove(`text-theme-${currentTheme}`);

    btnDarkMode.forEach((btn) => {
      btn.classList.remove(`bg-theme-${currentTheme}`);
      btn.classList.add(`bg-theme-${theme}`);
    });

    brand.classList.add(`text-theme-${theme}`);
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

  return { init };
})();

export { scroll };
