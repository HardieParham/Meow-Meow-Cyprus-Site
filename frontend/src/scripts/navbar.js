const mobileNav = document.getElementById("mobile-nav");
const menuToggle = document.getElementById("menu-toggle");

menuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
});