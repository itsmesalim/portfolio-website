// ==================== Hamburger Menu ====================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// ==================== Back to Top ====================
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ==================== Projects Data ====================
const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio built with HTML, CSS, and JS.",
    image: "../images/project1.jpg",
    category: "websites",
    link: "https://github.com/itsmesalim/portfolio-website"
  },
  {
    title: "UI Design Concept",
    description: "Creative design mockups for a dashboard UI.",
    image: "../images/project2.jpg",
    category: "designs",
    link: "#"
  },
  {
    title: "Todo Mini App",
    description: "A simple task management app with add/remove features.",
    image: "../images/project3.jpg",
    category: "mini-apps",
    link: "#"
  }
];

// ==================== Render Projects ====================
const projectGrid = document.getElementById("projectGrid");

function displayProjects(category = "all") {
  if (!projectGrid) return;
  projectGrid.innerHTML = ""; // clear

  const filtered = category === "all"
    ? projects
    : projects.filter(p => p.category === category);

  filtered.forEach(proj => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
      <img src="${proj.image}" alt="${proj.title}">
      <div class="project-info">
        <h3>${proj.title}</h3>
        <p>${proj.description}</p>
        <a href="${proj.link}" target="_blank">View Project</a>
      </div>
    `;

    projectGrid.appendChild(card);
  });
}

// Initial Load
if (projectGrid) displayProjects();

// ==================== Filter Buttons ====================
const filterButtons = document.querySelectorAll(".filters button");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    displayProjects(btn.dataset.category);
  });
});

// ==================== Lightbox ====================
const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
const lightboxImg = document.createElement("img");
lightbox.appendChild(lightboxImg);
document.body.appendChild(lightbox);

document.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG" && e.target.closest(".project-card")) {
    lightbox.style.display = "flex";
    lightboxImg.src = e.target.src;
  }
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});














// // Hamburger Menu
// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector("nav ul");

// if (hamburger) {
//   hamburger.addEventListener("click", () => {
//     navMenu.classList.toggle("active");
//   });
// }

// // Back to Top
// const backToTop = document.getElementById("backToTop");
// window.addEventListener("scroll", () => {
//   if (window.scrollY > 200) {
//     backToTop.style.display = "block";
//   } else {
//     backToTop.style.display = "none";
//   }
// });
// backToTop.addEventListener("click", () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// });

// // Lightbox
// const projectImages = document.querySelectorAll(".project-card img");
// const lightbox = document.createElement("div");
// lightbox.classList.add("lightbox");
// const lightboxImg = document.createElement("img");
// lightbox.appendChild(lightboxImg);
// document.body.appendChild(lightbox);

// projectImages.forEach((img) => {
//   img.addEventListener("click", () => {
//     lightbox.style.display = "flex";
//     lightboxImg.src = img.src;
//   });
// });
// lightbox.addEventListener("click", () => {
//   lightbox.style.display = "none";
// });
