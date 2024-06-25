import { scroll } from "./scroll";

const menu = (() => {
  const btnMenuL = document.querySelector("#btn-menu-l");
  const btnMenuLClose = document.querySelector("#btn-menu-l-close");

  const aside = document.querySelector("aside");
  const main = document.querySelector("main");
  const sideLinkWrapper = document.querySelector("#side-link-wrapper");

  const btnHomeL = document.querySelector("#btn-home-l");
  const btnAboutL = document.querySelector("#btn-about-l");
  const btnProjectsL = document.querySelector("#btn-projects-l");

  const btnsProjectCardExpand = document.querySelectorAll(
    ".project-card-expand",
  );
  const btnProjectDetailClose = document.querySelector(
    "#btn-project-detail-close",
  );

  const projectCardDetailWrapper = document.querySelector(
    "#project-card-detail-wrapper",
  );

  let isOpenProjectCard = 0;
  let activeProjectCard = 0;

  function init() {
    _initBtnMenuL();
    _initBtnNavL();
    _initBtnProjectCardExpands();
  }

  function _initBtnProjectCardExpands() {
    btnsProjectCardExpand.forEach((btn) => {
      btn.onclick = () => {
        projectCardDetailWrapper.classList.toggle("active");
        activeProjectCard = +btn.id.slice(-1);

        const projectDetail = document.querySelector(
          `#project-detail-${activeProjectCard}`,
        );
        if (isOpenProjectCard === 1)
          setTimeout(() => {
            projectDetail.classList.toggle("active");
            projectDetail.classList.toggle("hidden");
          }, 1000);
        else {
          projectDetail.classList.toggle("hidden");
          requestAnimationFrame(() => {
            projectDetail.classList.toggle("active");
          });
        }

        isOpenProjectCard = 1;
      };
    });

    btnProjectDetailClose.onclick = () => {
      document
        .querySelector(`#btn-project-card-expand-${activeProjectCard}`)
        .click();
      isOpenProjectCard = 0;
    };
  }

  function _initBtnMenuL() {
    btnMenuL.onclick = () => {
      main.classList.toggle("opacity-50");
      _toggleMenuL();
      sideLinkWrapper.classList.toggle("hide");
      setTimeout(() => {
        sideLinkWrapper.classList.toggle("hidden");
      }, 500);
    };

    btnMenuLClose.onclick = () => {
      main.classList.toggle("opacity-50");
      _toggleMenuL();
      sideLinkWrapper.classList.toggle("hidden");
      requestAnimationFrame(() => {
        sideLinkWrapper.classList.toggle("hide");
      });
    };
  }

  function _toggleMenuL() {
    btnMenuL.classList.toggle("show");
    btnMenuLClose.classList.toggle("show");
    aside.classList.toggle("move");
    main.classList.toggle("move");
  }

  function _initBtnNavL() {
    btnHomeL.onclick = () => {
      btnMenuLClose.click();
      setTimeout(() => {
        main.scrollTo(0, 0);
      }, 500);
    };

    btnAboutL.onclick = () => {
      btnMenuLClose.click();
      setTimeout(() => {
        scroll.scrollTo(1);
      }, 500);
    };

    btnProjectsL.onclick = () => {
      btnMenuLClose.click();
      setTimeout(() => {
        scroll.scrollTo(2);
      }, 500);
    };
  }

  return { init };
})();

export { menu };
