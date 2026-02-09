document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".theme-toggle");
  const body = document.body;
  const icon = toggleButton.querySelector("svg");

  // tema inicial (localStorage ou light)
  const savedTheme = localStorage.getItem("theme") || "light";
  body.setAttribute("data-theme", savedTheme);

  icon.classList.toggle("lucide-sun", savedTheme === "light");
  icon.classList.toggle("lucide-moon", savedTheme === "dark");

  toggleButton.addEventListener("click", () => {
    const isDark = body.getAttribute("data-theme") === "dark";
    const newTheme = isDark ? "light" : "dark";

    body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    icon.classList.toggle("lucide-sun", newTheme === "light");
    icon.classList.toggle("lucide-moon", newTheme === "dark");
  });
});
