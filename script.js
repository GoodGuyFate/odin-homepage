const projects = [
  {
    title: "Weather App",
    shortDescription:
      "A weather application built as a part of The Odin Project.",
    longDescription:
      "A weather app built with HTML, CSS, and Javascript using the VisualCrossing Weather API. Features the ability to search any city and get its' conditions. Built with vanilla JavaScript and bundled with Webpack, and including animated icons made by Meteocons.",
    screenshots: ["images/project-images/weather-app-1.png"],
    repo: "https://github.com/GoodGuyFate/odin-weatherApp",
    liveUrl: "https://goodguyfate.github.io/odin-weatherApp/",
  },
  {
    title: "Battleship",
    shortDescription:
      "A browser based recreation of the classic 'Battleship' game.",
    longDescription:
      "Built as a part of The Odin Project curriculum. With this project I learned a lot about separation of concerns. I built the logic for the game first, and was able to make sure that it functioned before moving on to the frontend. Built with HTML, CSS, Vanilla JavaScript, bundled with Webpack, and has a simple 'bot' opponent that randomly targets the player's board.",
    screenshots: [
      "images/project-images/battleship-1.png",
      "images/project-images/battleship-2.png",
      "images/project-images/battleship-3.png",
    ],
    repo: "https://github.com/GoodGuyFate/odin-battleship",
    liveUrl: "https://goodguyfate.github.io/odin-battleship/",
  },
  {
    title: "Homepage",
    shortDescription:
      "A personal developer portfolio built with HTML, CSS, and vanilla Javascript.",
    longDescription:
      "Built whilst going through The Odin Project. A fully responsive personal portfolio homepage built from scratch using HTML, CSS, and vanilla JavaScript. Features a dynamically generated project grid, expandable project cards, an image carousel powered by Swiper.js, and a fullscreen lightbox for screenshots. Designed with a focus on clean UI and smooth interactions.",
    screenshots: [
      "images/project-images/homepage-1.png",
      "images/project-images/homepage-2.png",
      "images/project-images/homepage-3.png",
    ],
    repo: "https://github.com/GoodGuyFate/odin-homepage",
    liveUrl: "https://goodguyfate.github.io/odin-homepage/",
  },
];

const gridContainer = document.querySelector(".grid-container");

for (const project of projects) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  // SWIPER FIRST
  const swiperElement = document.createElement("div");
  swiperElement.classList.add("swiper");

  const swiperWrapperElement = document.createElement("div");
  swiperWrapperElement.classList.add("swiper-wrapper");

  swiperElement.append(swiperWrapperElement);

  for (const screenshot of project.screenshots) {
    const swiperSlideElement = document.createElement("div");
    swiperSlideElement.classList.add("swiper-slide");

    const swiperImgElement = document.createElement("img");
    swiperImgElement.src = screenshot;

    swiperImgElement.addEventListener("click", (e) => {
      const lightboxContainerElement = document.querySelector(
        ".lightbox-container",
      );
      lightboxContainerElement.style.display = "flex";
      setTimeout(() => lightboxContainerElement.classList.add("is-open"), 10);

      const lightboxWrapperElement = document.querySelector(
        ".lightbox-swiper-main .swiper-wrapper",
      );
      lightboxWrapperElement.innerHTML = "";

      const lightboxThumbsWrapperElement = document.querySelector(
        ".lightbox-swiper-thumbs .swiper-wrapper",
      );
      lightboxThumbsWrapperElement.innerHTML = "";

      for (let i = 0; i < project.screenshots.length; i++) {
        const mainSlide = document.createElement("div");
        mainSlide.classList.add("swiper-slide");
        const mainImg = document.createElement("img");
        mainImg.src = project.screenshots[i];
        mainSlide.append(mainImg);
        lightboxWrapperElement.append(mainSlide);

        const thumbSlide = document.createElement("div");
        thumbSlide.classList.add("swiper-slide");
        const thumbImg = document.createElement("img");
        thumbImg.src = project.screenshots[i];
        thumbSlide.append(thumbImg);
        lightboxThumbsWrapperElement.append(thumbSlide);
      }

      const lightboxThumbsSwiper = new Swiper(".lightbox-swiper-thumbs", {
        slidesPerView: 4,
        spaceBetween: 10,
      });

      const lightboxSwiper = new Swiper(".lightbox-swiper-main", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: lightboxThumbsSwiper,
        },
      });
    });

    swiperSlideElement.append(swiperImgElement);
    swiperWrapperElement.append(swiperSlideElement);
  }

  const lightboxContainerElement = document.querySelector(
    ".lightbox-container",
  );

  lightboxContainerElement.addEventListener("click", (e) => {
    if (e.target === lightboxContainerElement) {
      lightboxContainerElement.classList.remove("is-open");
      setTimeout(() => (lightboxContainerElement.style.display = "none"), 300);
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightboxContainerElement.classList.remove("is-open");
      setTimeout(() => (lightboxContainerElement.style.display = "none"), 300);
    }
  });

  const swiperPaginationElement = document.createElement("div");
  swiperPaginationElement.classList.add("swiper-pagination");
  swiperElement.append(swiperPaginationElement);
  cardElement.append(swiperElement);

  const swiper = new Swiper(swiperElement, {
    pagination: {
      el: swiperPaginationElement,
      clickable: true,
    },
  });

  // TITLE + LINK
  const titleCardWrapperElement = document.createElement("div");
  titleCardWrapperElement.classList.add("title-card-wrapper");
  cardElement.append(titleCardWrapperElement);

  const titleCardElement = document.createElement("h3");
  titleCardElement.textContent = project.title;
  titleCardWrapperElement.append(titleCardElement);

  const iconsWrapperEl = document.createElement("div");
  iconsWrapperEl.classList.add("icons-wrapper");
  titleCardWrapperElement.append(iconsWrapperEl);

  const githubLinkEl = document.createElement("a");
  githubLinkEl.classList.add("icon-button");
  githubLinkEl.target = "_blank";
  githubLinkEl.rel = "noopener noreferrer";
  githubLinkEl.href = project.repo;

  const liveUrlLinkEl = document.createElement("a");
  liveUrlLinkEl.classList.add("icon-button");
  liveUrlLinkEl.target = "_blank";
  liveUrlLinkEl.rel = "noopener noreferrer";
  liveUrlLinkEl.href = project.liveUrl;

  const liveUrlLinkIcon = document.createElement("img");
  liveUrlLinkIcon.classList.add("github-icon");
  liveUrlLinkIcon.src = "images/open-in-new.svg";
  liveUrlLinkIcon.alt = "Share link icon";

  const githubIconElement = document.createElement("img");
  githubIconElement.classList.add("github-icon");
  githubIconElement.src =
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg";
  githubIconElement.alt = "Github logo icon";

  liveUrlLinkEl.append(liveUrlLinkIcon);
  iconsWrapperEl.append(liveUrlLinkEl);

  githubLinkEl.append(githubIconElement);
  iconsWrapperEl.append(githubLinkEl);

  // SHORT DESCRIPTION
  const descriptionWrapperElement = document.createElement("div");
  descriptionWrapperElement.classList.add("description-wrapper");

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = project.shortDescription;
  descriptionWrapperElement.append(descriptionElement);
  cardElement.append(descriptionWrapperElement);

  // CARD FOOTER
  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer");

  const expandBtn = document.createElement("button");
  expandBtn.classList.add("expand-btn");
  expandBtn.textContent = "More Info";

  const arrow = document.createElement("span");
  arrow.textContent = "▼";
  arrow.classList.add("arrow-icon");

  expandBtn.append(arrow);
  cardFooter.append(expandBtn);
  cardElement.append(cardFooter);

  // EXPANDABLE CONTENT
  const expandedDiv = document.createElement("div");
  expandedDiv.classList.add("expandable-content");

  const contentInner = document.createElement("div");
  contentInner.classList.add("content-inner");

  const longDesc = document.createElement("p");
  longDesc.textContent = project.longDescription;

  contentInner.append(longDesc);
  expandedDiv.append(contentInner);
  cardElement.append(expandedDiv);

  // APPEND CARD
  gridContainer.append(cardElement);

  cardFooter.addEventListener("click", (e) => {
    e.currentTarget.parentElement.classList.toggle("is-expanded");
  });
}
