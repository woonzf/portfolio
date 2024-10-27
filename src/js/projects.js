import { projectList } from "./projectList";

import open50w from "../img/icons/open-50w.png";
import openW50w from "../img/icons/open-w-50w.png";

const projects = (() => {
  const projectCardWrapper = document.querySelector(".project-card-wrapper");

  function init() {
    for (let i = 0; i < projectList.length; i++) {
      const project = projectList[i];
      const id = i + 1;

      // Card
      const projectCard = document.createElement("div");
      projectCard.classList.add("project-card");
      projectCard.id = `project-card-${id}`;

      const projectCardContent = document.createElement("div");
      projectCardContent.classList.add("project-card-content");

      // Image
      let projectCardImage = null;

      if (!Array.isArray(project.src)) {
        projectCardImage = document.createElement("img");
        projectCardImage.classList.add("project-card-image");
        projectCardImage.src = project.src;
      } else {
        projectCardImage = document.createElement("div");
        projectCardImage.classList.add("project-card-image");

        const img1 = document.createElement("img");
        img1.classList.add("rounded-sm", "absolute", "animate-appear-cycle");
        img1.src = project.src[0];

        const img2 = document.createElement("img");
        img2.classList.add("rounded-sm", "absolute", "animate-appear-cycle-r");
        img2.src = project.src[1];

        projectCardImage.append(img1, img2);
      }

      // Index
      const projectCardIndex = document.createElement("div");
      projectCardIndex.classList.add("project-card-index");
      projectCardIndex.textContent = `0${i + 1}`;

      // Info
      const projectCardInfo = document.createElement("div");
      projectCardInfo.classList.add("project-card-info");

      const projectCardName = document.createElement("div");
      projectCardName.classList.add("project-card-name");
      projectCardName.textContent = project.name;

      const projectCardDescription = document.createElement("div");
      projectCardDescription.textContent = project.description;

      const projectCardTech = document.createElement("div");
      projectCardTech.classList.add("project-card-tech");

      for (const stack of project.stack) {
        const img = document.createElement("img");
        img.src = stack.src;
        img.alt = stack.alt;
        projectCardTech.append(img);
      }

      // Link
      const projectDetailLinkWrapper = document.createElement("div");
      projectDetailLinkWrapper.classList.add("project-detail-link-wrapper");

      const repo = _createLink("Repo", project.repo);
      const demo = _createLink("Demo", project.demo);

      // Render
      projectDetailLinkWrapper.append(repo, demo);
      projectCardInfo.append(
        projectCardName,
        projectCardDescription,
        projectCardTech,
        projectDetailLinkWrapper,
      );
      projectCardContent.append(
        projectCardImage,
        projectCardIndex,
        projectCardInfo,
      );
      projectCard.append(projectCardContent);
      projectCardWrapper.append(projectCard);

      // Divider
      if (id !== projectList.length) {
        const divider = document.createElement("div");
        divider.classList.add(
          "w-full",
          "border-b-2",
          "border-theme-3",
          "landscape:hidden",
        );
        projectCardWrapper.append(divider);
      }
    }
  }

  function _createLink(name, src) {
    const a = document.createElement("a");
    a.classList.add("project-link");
    a.href = src;
    a.target = "_blank";
    a.rel = "noreferrer";

    const span = document.createElement("span");
    span.textContent = name;

    const imgOpenWrapper = document.createElement("div");
    imgOpenWrapper.classList.add("img-open-wrapper");

    const imgDark = document.createElement("img");
    imgDark.classList.add("icon-mode-dark");
    imgDark.src = openW50w;

    const imgLight = document.createElement("img");
    imgLight.classList.add("icon-mode");
    imgLight.src = open50w;

    imgOpenWrapper.append(imgDark, imgLight);
    a.append(span, imgOpenWrapper);

    return a;
  }

  return { init };
})();

export { projects };
