const carousel = (() => {
  const btnProjectNext = document.querySelector(".btn-project-card-next");
  const btnProjectPrev = document.querySelector(".btn-project-card-prev");

  const projectCardWrapper = document.querySelector(".project-card-wrapper");
  const btnMiniTabs = document.querySelectorAll(".btn-mini-tab");
  const carouselCountdownBar = document.querySelector(
    "#carousel-countdown-bar",
  );

  let projectCardWidth = 0;

  const slide = 3;
  let i = 1;
  let iPrev = 0;

  function init() {
    getProjectCardWidth();

    btnProjectNext.onclick = () => {
      iPrev = i;
      if (i === slide) i = 1;
      else i += 1;
      _scrollToSlide(i);
      _toggleBtnMiniTabs(iPrev, i);
    };

    btnProjectPrev.onclick = () => {
      iPrev = i;
      if (i === 1) i = slide;
      else i -= 1;
      _scrollToSlide(i);
      _toggleBtnMiniTabs(iPrev, i);
    };

    projectCardWrapper.onscrollend = () => {
      iPrev = i;
      const scroll = projectCardWrapper.scrollLeft;
      const threshold1 = projectCardWidth + 16;
      const threshold2 = projectCardWidth * 2 + 32;
      if (scroll >= 0 && scroll < threshold1) i = 1;
      else if (scroll >= threshold1 && scroll < threshold2) i = 2;
      else i = slide;
      _toggleBtnMiniTabs(iPrev, i);
    };

    btnMiniTabs.forEach((btn) => {
      btn.onclick = () => {
        iPrev = i;
        i = +btn.id.slice(-1);
        _scrollToSlide(i);
        _toggleBtnMiniTabs(iPrev, i);
      };
    });

    carouselCountdownBar.classList.add("animate-shrink-width");
    carouselCountdownBar.onanimationiteration = () => btnProjectNext.click();
  }

  function getProjectCardWidth() {
    const projectCard = document.querySelector("#project-card-1");
    projectCardWidth = projectCard.clientWidth;
  }

  function _scrollToSlide(i) {
    projectCardWrapper.scrollTo({
      left: projectCardWidth * (i - 1) + 16 * (i - 1),
    });
  }

  function _toggleBtnMiniTabs(iPrev, i) {
    document.querySelector(`#btn-mini-tab-${iPrev}`).classList.toggle("active");
    document.querySelector(`#btn-mini-tab-${i}`).classList.toggle("active");
  }

  return { init, getProjectCardWidth };
})();

export { carousel };
