import ypet from "../img/projects/ypet.png";
import pokeMemoryCard from "../img/projects/poke-memory-card.png";
import pokeMemoryCard2 from "../img/projects/poke-memory-card-2.png";
import shoppingCart from "../img/projects/sc-1.png";
import shoppingCart2 from "../img/projects/sc-2.png";

export const projectList = [
  {
    name: "Mizu Store",
    src: [shoppingCart, shoppingCart2],
    stack: [
      {
        alt: "TypeScript",
        src: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
      },
      {
        alt: "React",
        src: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
      },
      {
        alt: "Tailwind CSS",
        src: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
      },
    ],
    repo: "https://github.com/woonzf/odin-shopping-cart",
    demo: "https://woonzf.github.io/odin-shopping-cart/",
  },
  {
    name: "Poké Memory Card",
    src: [pokeMemoryCard, pokeMemoryCard2],
    stack: [
      {
        alt: "React",
        src: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
      },
      {
        alt: "Tailwind CSS",
        src: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
      },
    ],
    repo: "https://github.com/woonzf/odin-memory-card",
    demo: "https://woonzf.github.io/odin-memory-card/",
  },
  {
    name: "Your Personal Expense Tracker",
    src: ypet,
    stack: [
      {
        alt: "Python",
        src: "https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue",
      },
      {
        alt: "SQLite",
        src: "https://img.shields.io/badge/Sqlite-003B57?style=for-the-badge&logo=sqlite&logoColor=white",
      },
      {
        alt: "Flask",
        src: "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white",
      },
      {
        alt: "Bootstrap",
        src: "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",
      },
    ],
    repo: "https://github.com/woonzf/cs50x-2023-project",
    demo: "https://www.youtube.com/watch?v=l83kys9yJJs",
  },
];
