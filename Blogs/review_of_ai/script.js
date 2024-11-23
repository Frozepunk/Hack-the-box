document.addEventListener('DOMContentLoaded', () => {
    gsap.to('.animated', {
        duration: 1.5,
        opacity: 1,
        y: 0,
        stagger: 0.2,
        delay: 0.5,
        ease: "power2.out",
        y: -20
    });
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}