import favicon32w from "../img/icons/favicon-32w.png";
import menu50w from "../img/icons/menu-50w.png";
import menuW50w from "../img/icons/menu-w-50w.png";
import close50w from "../img/icons/close-50w.png";
import closeW50w from "../img/icons/close-w-50w.png";
import chevron100w from "../img/icons/chevron-100w.png";
import chevronW100w from "../img/icons/chevron-w-100w.png";
import profile1000w from "../img/profile-1000w.jpg";
import ypet from "../img/projects/ypet.png";
import weatherApp from "../img/projects/weather.png";
import homepage from "../img/projects/homepage.png";
import expand100w from "../img/icons/expand-100w.png";
import expandW100w from "../img/icons/expand-w-100w.png";

const imgNextDark = document.querySelectorAll(".img-next-dark");
const imgNext = document.querySelectorAll(".img-next");

imgNextDark.forEach((img) => {
  img.src = chevronW100w;
});

imgNext.forEach((img) => {
  img.src = chevron100w;
});
