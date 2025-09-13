// ==================== MOBILE MENU ====================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// ==================== PROJECTS DATA ====================
const projects = [
  {
    title: "Project 1",
    category: "web",
    image: "images/project1.jpg",
    description: "This is a sample web development project."
  },
  {
    title: "Project 2",
    category: "app",
    image: "images/project2.jpg",
    description: "This is a sample mobile app project."
  },
  {
    title: "Project 3",
    category: "design",
    image: "images/project3.jpg",
    description: "This is a sample design project."
  }
];

// ==================== DISPLAY PROJECTS ====================
function displayProjects(filter = "all") {
  const projectGrid = document.querySelector(".project-grid");
  if (!projectGrid) return;

  projectGrid.innerHTML = "";

  projects
    .filter(project => filter === "all" || project.category === filter)
    .forEach(project => {
      const card = document.createElement("div");
      card.classList.add("project-card");
      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="project-info">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>
      `;
      projectGrid.appendChild(card);

      // Lightbox open
      card.addEventListener("click", () => {
        const lightbox = document.querySelector(".lightbox");
        const lightboxImg = lightbox.querySelector("img");
        lightboxImg.src = project.image;
        lightbox.style.display = "flex";
      });
    });
}
displayProjects();

// ==================== FILTER BUTTONS ====================
const filterButtons = document.querySelectorAll(".filters button");
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    displayProjects(filter);
  });
});

// ==================== LIGHTBOX CLOSE ====================
const lightbox = document.querySelector(".lightbox");
if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target !== lightbox.querySelector("img")) {
      lightbox.style.display = "none";
    }
  });
}

// ==================== BACK TO TOP ====================
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ==================== SCROLL REVEAL ====================
const revealSections = document.querySelectorAll(".about, .projects, .contact");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  revealSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("reveal");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
