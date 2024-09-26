import "./style.css";
import "./js/image";
import { darkMode } from "./js/dark-mode";
import { menu } from "./js/menu";
import { scroll } from "./js/scroll";
import { projects } from "./js/projects";
import { carousel } from "./js/carousel";
import { windowResize } from "./js/window-resize";

window.onload = () => {
  darkMode.init();
  menu.init();
  scroll.init();
  projects.init();
  carousel.init();
  windowResize.init();
};
