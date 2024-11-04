// GSAP Animation
gsap.from(".container", { duration: 1, opacity: 0, y: 50 });
gsap.from("h1", { duration: 1, opacity: 0, y: -50, delay: 0.5 });
gsap.from("h3", { duration: 1, opacity: 0, y: -50, delay: 1 });
gsap.from("p, img", { duration: 1, opacity: 0, y: 20, stagger: 0.2, delay: 1.5 });
gsap.from("ul", { duration: 1, opacity: 0, y: 20, delay: 2 });
