import { scroll } from "./scroll";
import { carousel } from "./carousel";
import { menu } from "./menu";

const windowResize = (() => {
  function init() {
    window.onresize = () => {
      scroll.getParameters();
      carousel.getProjectCardWidth();
      menu.getIsPortrait();
    };
  }

  return { init };
})();

export { windowResize };
