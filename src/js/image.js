import favicon32w from "../img/icons/favicon-32w.png";
import menu50w from "../img/icons/menu-50w.png";
import menuW50w from "../img/icons/menu-w-50w.png";
import close50w from "../img/icons/close-50w.png";
import closeW50w from "../img/icons/close-w-50w.png";
import chevron100w from "../img/icons/chevron-100w.png";
import chevronW100w from "../img/icons/chevron-w-100w.png";

const imgNextDark = document.querySelectorAll(".img-next-dark");
const imgNext = document.querySelectorAll(".img-next");

imgNextDark.forEach((img) => {
  img.src = chevronW100w;
});

imgNext.forEach((img) => {
  img.src = chevron100w;
});
