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