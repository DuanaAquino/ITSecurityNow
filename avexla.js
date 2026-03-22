document.addEventListener("DOMContentLoaded", () => {
    // --- LÓGICA DO TEMA (DARK/LIGHT) ---
    const toggleButton = document.querySelector(".theme-toggle");
    const body = document.body;
    const themeIcon = toggleButton ? toggleButton.querySelector("svg") : null;

    if (toggleButton && themeIcon) {
        const savedTheme = localStorage.getItem("theme") || "light";
        body.setAttribute("data-theme", savedTheme);
        
        // Ajusta ícone inicial
        themeIcon.classList.toggle("lucide-sun", savedTheme === "light");
        themeIcon.classList.toggle("lucide-moon", savedTheme === "dark");

        toggleButton.addEventListener("click", () => {
            const isDark = body.getAttribute("data-theme") === "dark";
            const newTheme = isDark ? "light" : "dark";

            body.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);

            themeIcon.classList.toggle("lucide-sun", newTheme === "light");
            themeIcon.classList.toggle("lucide-moon", newTheme === "dark");
        });
    }

    // --- LÓGICA DO MENU HAMBÚRGUER ---
    const menuToggle = document.querySelector(".menu-toggle");
    const closeMenu = document.getElementById("close-menu");
    const mobileNav = document.getElementById("mobile-menu");
    const navLinks = document.querySelectorAll(".mobile-nav a");

    // Abre o menu
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener("click", () => {
            mobileNav.classList.add("active");
        });
    }

    // Fecha o menu no "X"
    if (closeMenu && mobileNav) {
        closeMenu.addEventListener("click", () => {
            mobileNav.classList.remove("active");
        });
    }

    // Fecha o menu ao clicar em links
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileNav.classList.remove("active");
        });
    });
});