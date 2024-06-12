const menu = (() => {
  const btnMenuL = document.querySelector("#btn-menu-l");
  const btnMenuLClose = document.querySelector("#btn-menu-l-close");

  const aside = document.querySelector("aside");
  const main = document.querySelector("main");

  function init() {
    _initBtnMenuL();
  }

  function _initBtnMenuL() {
    btnMenuL.onclick = () => {
      _toggleMenuL();
    };

    btnMenuLClose.onclick = () => {
      _toggleMenuL();
    };
  }

  function _toggleMenuL() {
    btnMenuL.classList.toggle("show");
    btnMenuLClose.classList.toggle("show");
    aside.classList.toggle("move");
    main.classList.toggle("move");
  }

  return { init };
})();

export { menu };
