import { scroll } from "./scroll";
import { carousel } from "./carousel";

const windowResize = (() => {
    function init() {
        window.onresize = () => {
            scroll.getScrollHeightSection();
            carousel.getScrollWidthProjectCard();
        };
    }

    return { init }
})()

export { windowResize }