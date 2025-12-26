
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

/* Load saved theme or system preference */
const savedTheme = localStorage.getItem("theme");
const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
} else if (systemPrefersLight) {
  root.setAttribute("data-theme", "dark");
}

/* Update icon */
function updateIcon() {
  const isLight = root.getAttribute("data-theme") === "light";
  themeToggle.textContent = isLight ? "🌞" : "🌙";
}

updateIcon();

/* Toggle theme */
themeToggle.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  root.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  updateIcon();
});

/* ---------------------------
   HAMBURGER MENU
---------------------------- */
const menuBtn = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

/* ---------------------------
   SMOOTH SCROLL
---------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const targetId = link.getAttribute("href");

    if (targetId.length > 1) {
      e.preventDefault();

      const target = document.querySelector(targetId);
      if (!target) return;

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      /* Close mobile menu after click */
      navLinks?.classList.remove("active");
    }
  });
});

target.setAttribute("tabindex", "-1");
target.focus({ preventScroll: true });

