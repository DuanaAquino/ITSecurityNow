document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".theme-toggle");
  const body = document.body;
  const icon = toggleButton.querySelector("svg");

  toggleButton.addEventListener("click", () => {
    const isDark = body.getAttribute("data-theme") === "dark";

    // alterna o tema
    body.setAttribute("data-theme", isDark ? "light" : "dark");

    // alterna o ícone (sun <-> moon)
    icon.classList.toggle("lucide-sun", isDark);
    icon.classList.toggle("lucide-moon", !isDark);

    // salva preferência
    localStorage.setItem("theme", isDark ? "light" : "dark");
  });

  // carrega preferência salva
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.setAttribute("data-theme", savedTheme);
    icon.classList.toggle("lucide-sun", savedTheme === "light");
    icon.classList.toggle("lucide-moon", savedTheme === "dark");
  }
});