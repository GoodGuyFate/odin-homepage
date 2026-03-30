const projects = [
  {
    title: "Weather App",
    shortDescription:
      "A weather app built with HTML, CSS, and Javascript using the OpenWeatherMap API.",
    longDescription: "A weather app built with HTML, CSS, and Javascript using the OpenWeatherMap API. I made it whilst going through The Odin Project.",
    screenshots: ["images/project-1.png"],
    repo: "https://github.com/GoodGuyFate/odin-weatherApp",
  },
];

gridContainer = document.querySelector(".grid-container");

for (project of projects) {
  cardElement = document.createElement("div");
  cardElement.classList.add("card");

  imgElement = document.createElement("img");
  imgElement.classList.add("project-images");
  imgElement.src = project.screenshots[0];
  imgElement.alt = `Screenshot of ${project.title}`;

  cardElement.append(imgElement);

  titleCardWrapperElement = document.createElement("div");
  titleCardWrapperElement.classList.add("title-card-wrapper");

  cardElement.append(titleCardWrapperElement);

  titleCardElement = document.createElement("h3");
  titleCardElement.textContent = project.title;

  titleCardWrapperElement.append(titleCardElement);

  linkElement = document.createElement("a");
  linkElement.classList.add("icon-button");
  linkElement.target = "_blank";
  linkElement.rel = "noopener noreferrer";
  linkElement.href = project.repo;

  githubIconElement = document.createElement("img");
  githubIconElement.classList.add("github-icon");
  githubIconElement.src =
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg";
  githubIconElement.alt = "Github logo";

  linkElement.append(githubIconElement);
  titleCardWrapperElement.append(linkElement);

  descriptionWrapperElement = document.createElement("div");
  descriptionWrapperElement.classList.add("description-wrapper");

  descriptionElement = document.createElement("p");
  descriptionElement.textContent = project.shortDescription;
  descriptionWrapperElement.append(descriptionElement);

  cardElement.append(descriptionWrapperElement);
  gridContainer.append(cardElement);

  cardElement.addEventListener("click", (e) => {
    modalContainerElement = document.querySelector(".modal-container")
    modalContainerElement.style.display = "flex"

    modalTitleWrapperElement = document.querySelector(".modal-project-title-wrapper")
    modalTitleElement = document.querySelector(".modal-project-title-wrapper h3")
    modalTitleElement.textContent = project.title

    modalLinkElement = document.querySelector(".modal-project-title-wrapper a")
    modalLinkElement.href = project.repo

    modalDescriptionElement = document.querySelector(".modal-description")
    modalDescriptionElement.textContent = project.longDescription
  })
}
