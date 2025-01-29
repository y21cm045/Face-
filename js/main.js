// GSAP Animations
gsap.from(".navbar", { duration: 1, y: -100, opacity: 0, ease: "bounce" });
gsap.from(".hero-content h1", { duration: 1, y: -50, opacity: 0, delay: 0.5 });
gsap.from(".hero-content p", { duration: 1, y: 50, opacity: 0, delay: 1 });
gsap.from(".btn", { duration: 1, y: 50, opacity: 0, delay: 1.5 });

// Scroll Animations
gsap.utils.toArray("section").forEach((section) => {
    ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        onEnter: () => {
            gsap.from(section, { opacity: 0, y: 50, duration: 1 });
        },
    });
});

// Toggle Mobile Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
