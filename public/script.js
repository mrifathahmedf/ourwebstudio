// ১. পোস্ট করার ফাংশন
function postStatus() {
    const content = document.getElementById("post-content").value;
    
    if (content) {
        const feed = document.getElementById("feed");
        const post = document.createElement("div");
        post.classList.add("post");
        post.innerHTML = `<p>${content}</p>`;
        feed.prepend(post); // নতুন পোস্ট উপরে দেখাবে
        document.getElementById("post-content").value = "";
    } else {
        alert("আপনার পোস্ট লিখুন!");
    }
}

// ২. লাইট/ডার্ক মোড
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}