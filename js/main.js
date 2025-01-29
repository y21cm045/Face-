// GSAP Animations
gsap.from(".navbar", { duration: 1, y: -100, opacity: 0, ease: "bounce" });
gsap.from(".hero-content h1", { duration: 1, y: -50, opacity: 0, delay: 0.5 });
gsap.from(".hero-content p", { duration: 1, y: 50, opacity: 0, delay: 1 });
gsap.from(".btn", { duration: 1, y: 50, opacity: 0, delay: 1.5 });
// Toggle Mobile Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
// Scroll Animations
const sections = document.querySelectorAll("section");

sections.forEach((section) => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
    });
}); in
