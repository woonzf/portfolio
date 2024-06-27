const carousel = (() => {
  const btnProjectNext = document.querySelector(".btn-project-card-next");
  const btnProjectPrev = document.querySelector(".btn-project-card-prev");

  const projectCardWrapper = document.querySelector(".project-card-wrapper");
  const btnMiniTabs = document.querySelectorAll(".btn-mini-tab");

  const projectCard1 = document.querySelector("#project-card-1");
  const projectCard2 = document.querySelector("#project-card-2");
  const projectCard3 = document.querySelector("#project-card-3");

  const gap = 16;
  let scrollWidthProjectCard1 = 0;
  let scrollWidthProjectCard2 = 0;
  let scrollWidthProjectCard3 = 0;
  let scrollWidthProjectCards = [];

  let i = 1;

  function init() {
    getScrollWidthProjectCard();

    btnProjectNext.onclick = () => {
      document.querySelector(`#btn-mini-tab-${i}`).classList.toggle("active");
      if (i === 4) {
        projectCardWrapper.scrollTo(0, 0);
        i = 1;
      } else {
        projectCardWrapper.scrollTo(scrollWidthProjectCards[i] + 1, 0);
        i += 1;
      }
      document.querySelector(`#btn-mini-tab-${i}`).classList.toggle("active");
    };

    btnProjectPrev.onclick = () => {
      document.querySelector(`#btn-mini-tab-${i}`).classList.toggle("active");
      if (i === 1) {
        projectCardWrapper.scrollTo(scrollWidthProjectCard3 + 1, 0);
        i = 4;
      } else {
        projectCardWrapper.scrollTo(scrollWidthProjectCards[i - 2] + 1, 0);
        i -= 1;
      }
      document.querySelector(`#btn-mini-tab-${i}`).classList.toggle("active");
    };

    projectCardWrapper.onscrollend = () => {
      document.querySelector(`#btn-mini-tab-${i}`).classList.toggle("active");
      const scroll = projectCardWrapper.scrollLeft;
      if (scroll >= 0 && scroll < scrollWidthProjectCard1) i = 1;
      else if (
        scroll >= scrollWidthProjectCard1 &&
        scroll < scrollWidthProjectCard2
      )
        i = 2;
      else if (
        scroll >= scrollWidthProjectCard2 &&
        scroll < scrollWidthProjectCard3
      )
        i = 3;
      else i = 4;
      document.querySelector(`#btn-mini-tab-${i}`).classList.toggle("active");
    };

    btnMiniTabs.forEach((btn) => {
      btn.onclick = () => {
        document.querySelector(`#btn-mini-tab-${i}`).classList.toggle("active");
        i = +btn.id.slice(-1);
        projectCardWrapper.scrollTo(scrollWidthProjectCards[i - 1] + 1, 0);
        document.querySelector(`#btn-mini-tab-${i}`).classList.toggle("active");
      };
    });

    setInterval(() => {
      btnProjectNext.click();
    }, 10000);
  }

  function getScrollWidthProjectCard() {
    scrollWidthProjectCard1 = projectCard1.clientWidth + gap;
    scrollWidthProjectCard2 =
      projectCard2.clientWidth + gap + scrollWidthProjectCard1;
    scrollWidthProjectCard3 =
      projectCard3.clientWidth + gap + scrollWidthProjectCard2;
    scrollWidthProjectCards = [
      -1,
      scrollWidthProjectCard1,
      scrollWidthProjectCard2,
      scrollWidthProjectCard3,
    ];
  }

  return { init, getScrollWidthProjectCard };
})();

export { carousel };
