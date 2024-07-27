import { scroll } from "./scroll";

const menu = (() => {
  const btnMenuL = document.querySelector("#btn-menu-l");
  const btnMenuLClose = document.querySelector("#btn-menu-l-close");

  const aside = document.querySelector("aside");
  const main = document.querySelector("main");

  const btnHomeL = document.querySelector("#btn-home-l");
  const btnAboutL = document.querySelector("#btn-about-l");
  const btnProjectsL = document.querySelector("#btn-projects-l");

  const btnMenuP = document.querySelector("#btn-menu-p");
  const iconMenuOpenP = document.querySelector("#icon-menu-open-p");
  const iconMenuCloseP = document.querySelector("#icon-menu-close-p");

  let isPortrait = 0;

  function init() {
    getIsPortrait();
    _initBtnMenuL();
    _initBtnNavL();
    _initBtnMenuP();
  }

  function getIsPortrait() {
    if (window.innerHeight > window.innerWidth) isPortrait = 1;
    else isPortrait = 0;
  }

  function _initBtnMenuL() {
    btnMenuL.onclick = () => {
      main.classList.toggle("opacity-50");
      btnMenuL.classList.toggle("show");
      btnMenuLClose.classList.toggle("show");
      aside.classList.toggle("move");
      main.classList.toggle("move");
    };

    btnMenuLClose.onclick = () => {
      btnMenuL.click();
    };
  }

  function _initBtnMenuP() {
    btnMenuP.onclick = () => {
      main.classList.toggle("opacity-50");
      iconMenuOpenP.classList.toggle("hidden");
      iconMenuCloseP.classList.toggle("hidden");
      aside.classList.toggle("move-p");
      main.classList.toggle("move-p");
    };
  }

  function _initBtnNavL() {
    btnHomeL.onclick = () => {
      if (isPortrait === 0) btnMenuLClose.click();
      else btnMenuP.click();

      setTimeout(() => {
        main.scrollTo(0, 0);
      }, 500);
    };

    btnAboutL.onclick = () => {
      if (isPortrait === 0) btnMenuLClose.click();
      else btnMenuP.click();

      setTimeout(() => {
        scroll.scrollTo(1);
      }, 500);
    };

    btnProjectsL.onclick = () => {
      if (isPortrait === 0) btnMenuLClose.click();
      else btnMenuP.click();

      setTimeout(() => {
        scroll.scrollTo(2);
      }, 500);
    };
  }

  return { init, getIsPortrait };
})();

export { menu };
