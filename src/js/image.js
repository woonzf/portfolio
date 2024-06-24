import favicon32w from "../img/icons/favicon-32w.png";
import menu50w from "../img/icons/menu-50w.png";
import menuW50w from "../img/icons/menu-w-50w.png";
import close50w from "../img/icons/close-50w.png";
import closeW50w from "../img/icons/close-w-50w.png";
import chevron100w from "../img/icons/chevron-100w.png";
import chevronW100w from "../img/icons/chevron-w-100w.png";
import open50w from "../img/icons/open-50w.png";
import openW50w from "../img/icons/open-w-50w.png";
import profile1000w from "../img/profile-1000w.jpg";
import ypet from "../img/projects/ypet.png";
import weatherApp from "../img/projects/weather.png";
import homepage from "../img/projects/homepage.png";
import arrowDown50w from "../img/icons/arrow-down-50w.png";
import arrowDownW50w from "../img/icons/arrow-down-w-50w.png";

const imgNextDark = document.querySelectorAll(".img-next-dark");
const imgNext = document.querySelectorAll(".img-next");
const imgOpenDark = document.querySelectorAll(".img-open-dark");
const imgOpen = document.querySelectorAll(".img-open");
const imgArrowDownDark = document.querySelectorAll(".img-arrow-down-dark");
const imgArrowDown = document.querySelectorAll(".img-arrow-down");

imgNextDark.forEach((img) => {
  img.src = chevronW100w;
});

imgNext.forEach((img) => {
  img.src = chevron100w;
});

imgOpenDark.forEach((img) => {
  img.src = openW50w;
});

imgOpen.forEach((img) => {
  img.src = open50w;
});

imgArrowDownDark.forEach((img) => {
  img.src = arrowDownW50w;
});

imgArrowDown.forEach((img) => {
  img.src = arrowDown50w;
});
