// Wait for the DOM to load before running animations
document.addEventListener("DOMContentLoaded", () => {
    // Fade in the main heading
    gsap.from("header h1", {
        duration: 1.2,
        opacity: 0,
        y: -30,
        ease: "power3.out",
        delay: 0.2,
    });

    // Fade in the intro paragraph
    gsap.from(".intro", {
        duration: 1,
        opacity: 0,
        y: 20,
        ease: "power3.out",
        delay: 0.6,
    });

    // Staggered fade-in for section headings
    gsap.from("h2", {
        duration: 1,
        opacity: 0,
        y: 20,
        ease: "power3.out",
        stagger: 0.4,
        delay: 0.8,
    });

    // Staggered fade-in and slide-up effect for command boxes
    gsap.from(".command", {
        duration: 1,
        opacity: 0,
        y: 30,
        ease: "power3.out",
        stagger: 0.3,
        delay: 1.2,
    });

    // Fade in takeaways section
    gsap.from(".takeaways h2, .takeaways ul li", {
        duration: 1,
        opacity: 0,
        y: 20,
        ease: "power3.out",
        stagger: 0.3,
        delay: 1.5,
    });
});
