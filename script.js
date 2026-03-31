const projects = [
  {
    title: "Weather App",
    shortDescription:
      "A weather app built with HTML, CSS, and Javascript using the OpenWeatherMap API.",
    longDescription:
      "A weather app built with HTML, CSS, and Javascript using the OpenWeatherMap API. I made it whilst going through The Odin Project.",
    screenshots: ["images/project-1.png", "images/header-mobile.jpg"],
    repo: "https://github.com/GoodGuyFate/odin-weatherApp",
  },
  
];

const gridContainer = document.querySelector(".grid-container");
const modalContainer = document.querySelector(".modal-container");
const modalCloseBtn = document.querySelector(".modal-close-btn");

for (const project of projects) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  const imgElement = document.createElement("img");
  imgElement.classList.add("project-images");
  imgElement.src = project.screenshots[0];
  imgElement.alt = `Screenshot of ${project.title}`;

  cardElement.append(imgElement);

  const titleCardWrapperElement = document.createElement("div");
  titleCardWrapperElement.classList.add("title-card-wrapper");

  cardElement.append(titleCardWrapperElement);

  const titleCardElement = document.createElement("h3");
  titleCardElement.textContent = project.title;

  titleCardWrapperElement.append(titleCardElement);

  const linkElement = document.createElement("a");
  linkElement.classList.add("icon-button");
  linkElement.target = "_blank";
  linkElement.rel = "noopener noreferrer";
  linkElement.href = project.repo;

  const githubIconElement = document.createElement("img");
  githubIconElement.classList.add("github-icon");
  githubIconElement.src =
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg";
  githubIconElement.alt = "Github logo";

  linkElement.append(githubIconElement);
  titleCardWrapperElement.append(linkElement);

  const descriptionWrapperElement = document.createElement("div");
  descriptionWrapperElement.classList.add("description-wrapper");

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = project.shortDescription;
  descriptionWrapperElement.append(descriptionElement);

  cardElement.append(descriptionWrapperElement);
  gridContainer.append(cardElement);

  cardElement.addEventListener("click", (e) => {
    modalContainer.style.display = "flex";

    const modalTitleElement = document.querySelector(
      ".modal-project-title-wrapper h3",
    );
    modalTitleElement.textContent = project.title;

    const modalLinkElement = document.querySelector(
      ".modal-project-title-wrapper a",
    );
    modalLinkElement.href = project.repo;

    const modalDescriptionElement =
      document.querySelector(".modal-description");
    modalDescriptionElement.textContent = project.longDescription;

    const swiperWrapperElement = document.querySelector(".swiper-wrapper")
    swiperWrapperElement.innerHTML = ""
    for (const screenshot of project.screenshots) {
      const swiperDiv = document.createElement("div")
      const imgElement = document.createElement("img")

      swiperDiv.classList.add("swiper-slide")
      imgElement.classList.add("project-images")
      imgElement.src = screenshot

      swiperDiv.append(imgElement)
      swiperWrapperElement.append(swiperDiv)
    }
  });
}


modalCloseBtn.addEventListener("click", (e) => {
  modalContainer.style.display = "none";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalContainer.style.display = "none"
  }
})

modalContainer.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none"
  }
})

const swiper = new Swiper('.swiper', {
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

swiper.update()
swiper.slideTo(0, 0)