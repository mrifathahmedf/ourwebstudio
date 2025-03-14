document.addEventListener("DOMContentLoaded", function() {
    // ওয়েলকাম মেসেজ
    alert("তোর ফেসবুক-স্টাইল ওয়েবসাইটে স্বাগতম!");

    // সার্চ বারে ফোকাস করলে আইকন কালার পরিবর্তন হবে
    const searchInput = document.querySelector(".search-box input");
    const searchIcon = document.querySelector(".search-box i");

    searchBox.addEventListener("focusin", function() {
        searchBox.style.border = "2px solid #3578e5";
    });

    searchBox.addEventListener("focusout", function() {
        searchBox.style.border = "none";
    });

    // নোটিফিকেশন বাটনে ক্লিক করলে এলার্ট দেখানো হবে
    document.querySelector(".fa-bell").addEventListener("click", function() {
        alert("তোর কোনো নতুন নোটিফিকেশন নেই!");
    });

    // লাইক বাটনে ক্লিক করলে কালার পরিবর্তন হবে
    document.querySelectorAll(".post-actions button").forEach(button => {
        button.addEventListener("click", function() {
            this.classList.toggle("active");
        });
    });
});