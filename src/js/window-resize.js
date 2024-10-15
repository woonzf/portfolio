import { scroll } from "./scroll";
import { carousel } from "./carousel";
import { menu } from "./menu";

const windowResize = (() => {
  function init() {
    window.onresize = () => {
      scroll.getThresholds();
      carousel.getProjectCardWidth();
      menu.getIsPortrait();
    };
  }

  return { init };
})();

export { windowResize };
