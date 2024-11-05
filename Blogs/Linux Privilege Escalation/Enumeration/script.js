document.addEventListener("DOMContentLoaded", () => {
    // GSAP Animation for command divs
    gsap.from(".command", {
        duration: 1,
        opacity: 0,
        y: 20,
        stagger: 0.2,
        ease: "power2.out",
    });

    // Copy to Clipboard Functionality
    document.querySelectorAll(".copy-button").forEach(button => {
        button.addEventListener("click", () => {
            const command = button.getAttribute("data-command");
            navigator.clipboard.writeText(command)
                .then(() => {
                    button.textContent = "Copied!";
                    gsap.to(button, { backgroundColor: "#4caf50", duration: 0.3 });
                    setTimeout(() => {
                        button.textContent = "Copy";
                        gsap.to(button, { backgroundColor: "#ff5722", duration: 0.3 });
                    }, 1000);
                })
                .catch(() => {
                    button.textContent = "Error";
                });
        });
    });
});
