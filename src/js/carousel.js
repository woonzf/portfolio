const carousel = (() => {
  const btnProjectNext = document.querySelector(".btn-project-card-next");
  const btnProjectPrev = document.querySelector(".btn-project-card-prev");

  const projectCardWrapper = document.querySelector(".project-card-wrapper");
  const btnMiniTabs = document.querySelectorAll(".btn-mini-tab");
  const carouselCountdownBar = document.querySelector(
    "#carousel-countdown-bar",
  );

  let scrollWidthProjectCards = null;

  let i = 1;
  let iPrev = 0;

  function init() {
    getScrollWidthProjectCard();

    btnProjectNext.onclick = () => {
      iPrev = i;
      if (i === 4) i = 1;
      else i += 1;
      projectCardWrapper.scrollTo((scrollWidthProjectCards * (i - 1)) / 4, 0);
      _toggleBtnMiniTabs(iPrev, i);
    };

    btnProjectPrev.onclick = () => {
      iPrev = i;
      if (i === 1) i = 4;
      else i -= 1;
      projectCardWrapper.scrollTo((scrollWidthProjectCards * (i - 1)) / 4, 0);
      _toggleBtnMiniTabs(iPrev, i);
    };

    projectCardWrapper.onscrollend = () => {
      iPrev = i;
      const scroll = projectCardWrapper.scrollLeft;
      if (scroll >= 0 && scroll < scrollWidthProjectCards / 4) i = 1;
      else if (
        scroll >= scrollWidthProjectCards / 4 &&
        scroll < (scrollWidthProjectCards * 2) / 4
      )
        i = 2;
      else if (
        scroll >= (scrollWidthProjectCards * 2) / 4 &&
        scroll < (scrollWidthProjectCards * 3) / 4
      )
        i = 3;
      else i = 4;
      _toggleBtnMiniTabs(iPrev, i);
    };

    btnMiniTabs.forEach((btn) => {
      btn.onclick = () => {
        iPrev = i;
        i = +btn.id.slice(-1);
        projectCardWrapper.scrollTo((scrollWidthProjectCards * (i - 1)) / 4, 0);
        _toggleBtnMiniTabs(iPrev, i);
      };
    });

    carouselCountdownBar.classList.add("animate-shrink-width");

    setInterval(() => {
      btnProjectNext.click();
    }, 10000);
  }

  function getScrollWidthProjectCard() {
    scrollWidthProjectCards = projectCardWrapper.scrollWidth;
  }

  function _toggleBtnMiniTabs(iPrev, i) {
    document.querySelector(`#btn-mini-tab-${iPrev}`).classList.toggle("active");
    document.querySelector(`#btn-mini-tab-${i}`).classList.toggle("active");
  }

  return { init, getScrollWidthProjectCard };
})();

export { carousel };
