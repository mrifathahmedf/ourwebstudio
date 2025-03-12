// ডার্ক মোড টগল
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// ইমেজ পপ-আপ (গ্যালারি সিস্টেম)
function openModal(src) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImage").src = src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach((link) => {
        link.addEventListener("mouseover", function () {
            this.style.color = "#ffcc00";
        });

        link.addEventListener("mouseout", function () {
            this.style.color = "white";
        });
    });
});