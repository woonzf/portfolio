import { scroll } from "./scroll";

const navDot = (() => {
  const navDotHome = document.querySelector("#nav-dot-home");
  const navDotAbout = document.querySelector("#nav-dot-about");
  const navDotProjects = document.querySelector("#nav-dot-projects");

  function init() {
    toggleNavDot(0);
    navDotHome.onclick = () => scroll.scrollTo(0);
    navDotAbout.onclick = () => scroll.scrollTo(1);
    navDotProjects.onclick = () => scroll.scrollTo(2);
  }

  function toggleNavDot(section) {
    switch (section) {
      case 0:
        navDotHome.classList.add("active");
        navDotAbout.classList.remove("active");
        navDotProjects.classList.remove("active");
        break;
      case 1:
        navDotHome.classList.remove("active");
        navDotAbout.classList.add("active");
        navDotProjects.classList.remove("active");
        break;
      case 2:
        navDotHome.classList.remove("active");
        navDotAbout.classList.remove("active");
        navDotProjects.classList.add("active");
        break;
    }
  }

  return { init, toggleNavDot };
})();

export { navDot };
