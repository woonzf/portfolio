const carousel = (() => {
  const btnProjectNext = document.querySelector(".btn-project-card-next");
  const btnProjectPrev = document.querySelector(".btn-project-card-prev");
  const projectCardWrapper = document.querySelector(".project-card-wrapper");

  let i = 1;

  function init() {
    btnProjectNext.onclick = () => {
      if (i === 3) i = 1;
      else i += 1;
      document.querySelector(`#project-card-${i}`).scrollIntoView();
    };

    btnProjectPrev.onclick = () => {
      if (i === 1) i = 3;
      else i -= 1;
      document.querySelector(`#project-card-${i}`).scrollIntoView();
    };

    projectCardWrapper.onscrollend = () => {
      const scroll = projectCardWrapper.scrollTop;
      const scrollWidth = projectCardWrapper.scrollWidth;
      if (scroll >= 0 && scroll < scrollWidth / 3) i = 1;
      else if (scroll >= scrollWidth / 3 && scroll < scrollWidth) i = 2;
      else i = 3;
    };
  }

  return { init };
})();

export { carousel };
