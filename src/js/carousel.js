const carousel = (() => {
  const btnProjectNext = document.querySelector(".btn-project-card-next");
  const btnProjectPrev = document.querySelector(".btn-project-card-prev");

  const projectCardWrapper = document.querySelector(".project-card-wrapper");
  const btnMiniTabs = document.querySelectorAll(".btn-mini-tab");
  const carouselCountdownBar = document.querySelector(
    "#carousel-countdown-bar",
  );

  const SLIDE = 3;
  let index = 1;
  let projectCardWidth = 0;

  function init() {
    getProjectCardWidth();

    btnProjectNext.onclick = () => {
      let newIndex = 0;
      if (index === SLIDE) newIndex = 1;
      else newIndex = index + 1;
      _scrollToSlide(newIndex);
    };

    btnProjectPrev.onclick = () => {
      let newIndex = 0;
      if (index === 1) newIndex = SLIDE;
      else newIndex = index - 1;
      _scrollToSlide(newIndex);
    };

    projectCardWrapper.onscrollend = () => {
      const scroll = projectCardWrapper.scrollLeft;
      const threshold1 = projectCardWidth + 16;
      const threshold2 = projectCardWidth * 2 + 32;
      if (scroll >= 0 && scroll < threshold1) index = 1;
      else if (scroll >= threshold1 && scroll < threshold2) index = 2;
      else index = SLIDE;
      _toggleBtnMiniTabs(index);
    };

    btnMiniTabs.forEach((btn) => {
      let newIndex = 0;
      btn.onclick = () => {
        newIndex = +btn.id.slice(-1);
        _scrollToSlide(newIndex);
      };
    });

    carouselCountdownBar.classList.add("animate-shrink-width");
    carouselCountdownBar.onanimationiteration = () => btnProjectNext.click();
  }

  function getProjectCardWidth() {
    const projectCard = document.querySelector("#project-card-1");
    projectCardWidth = projectCard.clientWidth;
  }

  function _scrollToSlide(index) {
    projectCardWrapper.scrollTo({
      left: projectCardWidth * (index - 1) + 16 * (index - 1),
    });
  }

  function _toggleBtnMiniTabs(index) {
    const newIndex = index - 1;
    const length = btnMiniTabs.length;
    for (let i = 0; i < length; i++) {
      if (i === newIndex) btnMiniTabs[i].classList.add("active");
      else btnMiniTabs[i].classList.remove("active");
    }
  }

  return { init, getProjectCardWidth };
})();

export { carousel };
