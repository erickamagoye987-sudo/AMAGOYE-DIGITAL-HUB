
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

const yearElement = document.getElementById("year");

// Automatically update the copyright year.
yearElement.textContent = new Date().getFullYear();

// Open and close the mobile navigation.
menuToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after selecting a link.
navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.textContent = "☰";
    });
});

