const techStack = (() => {
  const LANGUAGE_LIST = [
    {
      name: "HTML",
      src: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
    },
    {
      name: "CSS",
      src: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
    },
    {
      name: "JavaScript",
      src: "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E",
    },
    {
      name: "TypeScript",
      src: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
    },
    {
      name: "C",
      src: "https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white",
    },
    {
      name: "Python",
      src: "https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue",
    },
  ];

  const FRAMEWORK_LIST = [
    {
      name: "React",
      src: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    },
    {
      name: "Webpack",
      src: "https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white",
    },
    {
      name: "Tailwind CSS",
      src: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
    },
    {
      name: "Bootstrap",
      src: "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",
    },
    {
      name: "Jest",
      src: "https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white",
    },
    {
      name: "Flask",
      src: "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white",
    },
  ];

  const OTHER_LIST = [
    {
      name: "MySQL",
      src: "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white",
    },
    {
      name: "SQLite",
      src: "https://img.shields.io/badge/Sqlite-003B57?style=for-the-badge&logo=sqlite&logoColor=white",
    },
    {
      name: "Prettier",
      src: "https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E",
    },
    {
      name: "Visual Studio Code",
      src: "https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white",
    },
    {
      name: "Git",
      src: "https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white",
    },
  ];

  const techLanguage = document.querySelector("#tech-language");
  const techFramework = document.querySelector("#tech-framework");
  const techOther = document.querySelector("#tech-other");

  function init() {
    _createImgList(LANGUAGE_LIST, techLanguage);
    _createImgList(FRAMEWORK_LIST, techFramework);
    _createImgList(OTHER_LIST, techOther);
  }

  function _createImgList(list, parentElement) {
    for (const item of list) {
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.name;
      parentElement.append(img);
    }
  }

  return { init };
})();

export { techStack };
