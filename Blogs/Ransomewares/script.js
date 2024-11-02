
// GSAP Animation
gsap.from(".container", { duration: 1, opacity: 0, y: 50 });
gsap.from("h1", { duration: 1, opacity: 0, y: -50, delay: 0.5 });
gsap.from("h2", { duration: 1, opacity: 0, y: -50, delay: 1 });
gsap.from("p, img, pre", { duration: 1, opacity: 0, y: 20, stagger: 0.2, delay: 1.5 });

// Additional animations for lists and sections
gsap.from("ol, ul", { duration: 1, opacity: 0, y: 30, stagger: 0.2, delay: 2 });
gsap.from("li", { duration: 0.5, opacity: 0, y: 10, stagger: 0.1, delay: 2.5 });
gsap.from("img", { duration: 1, scale: 0.8, opacity: 0, stagger: 0.2, delay: 2 });
