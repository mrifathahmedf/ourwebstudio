document.addEventListener("DOMContentLoaded", function() {
    // Flower Bloom Animation Delay
    setTimeout(() => {
        document.querySelector(".flower-group").style.opacity = "1";
    }, 1000);

    // Dark Mode Toggle
    const toggleButton = document.querySelector(".dark-mode-toggle");
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});