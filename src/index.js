import "./style.css";
import "./js/image";
import { darkMode } from "./js/dark-mode";
import { menu } from "./js/menu";
import { navDot } from "./js/nav-dot";
import { scroll } from "./js/scroll";
import { projects } from "./js/projects";
import { carousel } from "./js/carousel";
import { windowResize } from "./js/window-resize";
import { techStack } from "./js/tech-stack";

// Load projects first to avoid incorrect projectCardWidth
projects.init();
techStack.init();

window.onload = () => {
  darkMode.init();
  menu.init();
  navDot.init();
  scroll.init();
  carousel.init();
  windowResize.init();
};
