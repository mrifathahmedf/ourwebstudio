// ১. পোস্ট করার ফাংশন
function postStatus() {
    const content = document.getElementById("post-content").value;
    
    if (content) {
        const feed = document.getElementById("feed");
        const post = document.createElement("div");
        post.classList.add("post");
        post.innerHTML = `<p>${content}</p>`;
        feed.prepend(post);
        document.getElementById("post-content").value = "";
    } else {
        alert("আপনার পোস্ট লিখুন!");
    }
}

// ২. ডার্ক মোড টগল
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}