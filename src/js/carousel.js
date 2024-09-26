const carousel = (() => {
  const btnProjectNext = document.querySelector(".btn-project-card-next");
  const btnProjectPrev = document.querySelector(".btn-project-card-prev");

  const projectCardWrapper = document.querySelector(".project-card-wrapper");
  const btnMiniTabs = document.querySelectorAll(".btn-mini-tab");
  const carouselCountdownBar = document.querySelector(
    "#carousel-countdown-bar",
  );

  let scrollWidthProjectCards = null;

  const slide = 3;
  let i = 1;
  let iPrev = 0;

  function init() {
    getScrollWidthProjectCard();

    btnProjectNext.onclick = () => {
      iPrev = i;
      if (i === slide) i = 1;
      else i += 1;
      projectCardWrapper.scrollTo({
        left: (scrollWidthProjectCards * (i - 1)) / slide,
      });
      _toggleBtnMiniTabs(iPrev, i);
    };

    btnProjectPrev.onclick = () => {
      iPrev = i;
      if (i === 1) i = slide;
      else i -= 1;
      projectCardWrapper.scrollTo({
        left: (scrollWidthProjectCards * (i - 1)) / slide,
      });
      _toggleBtnMiniTabs(iPrev, i);
    };

    projectCardWrapper.onscrollend = () => {
      iPrev = i;
      const scroll = projectCardWrapper.scrollLeft;
      if (scroll >= 0 && scroll < scrollWidthProjectCards / slide) i = 1;
      else if (
        scroll >= scrollWidthProjectCards / slide &&
        scroll < (scrollWidthProjectCards * 2) / slide
      )
        i = 2;
      else i = slide;
      _toggleBtnMiniTabs(iPrev, i);
    };

    btnMiniTabs.forEach((btn) => {
      btn.onclick = () => {
        iPrev = i;
        i = +btn.id.slice(-1);
        projectCardWrapper.scrollTo({
          left: (scrollWidthProjectCards * (i - 1)) / slide,
        });
        _toggleBtnMiniTabs(iPrev, i);
      };
    });

    carouselCountdownBar.classList.add("animate-shrink-width");
    carouselCountdownBar.onanimationiteration = () => btnProjectNext.click();
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
