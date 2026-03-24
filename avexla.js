document.addEventListener("DOMContentLoaded", () => {
    // --- LÓGICA DO TEMA (DARK/LIGHT) ---
    const toggleButton = document.querySelector(".theme-toggle");
    const body = document.body;

    if (toggleButton) {
        const savedTheme = localStorage.getItem("theme") || "light";
        body.setAttribute("data-theme", savedTheme);

        toggleButton.addEventListener("click", () => {
            const isDark = body.getAttribute("data-theme") === "dark";
            const newTheme = isDark ? "light" : "dark";

            body.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
        });
    }

    // --- LÓGICA DO MENU HAMBÚRGUER ---
    const menuToggle = document.querySelector(".menu-toggle");
    // Ajustado para bater com as classes/IDs do seu CSS anterior
    const closeMenu = document.querySelector(".close-menu"); 
    const mobileNav = document.querySelector(".mobile-nav");
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

    // Fecha o menu ao clicar em links (importante para Single Page Applications)
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (mobileNav) mobileNav.classList.remove("active");
        });
    });
});