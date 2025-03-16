// ১. ইউজার লগইন ফাংশন
function loginUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (email === "test@gmail.com" && password === "123456") {
        alert("লগইন সফল!");
    } else {
        alert("ভুল ইমেইল বা পাসওয়ার্ড!");
    }
}

// ২. ইসলামিক ব্লগ পোস্ট
function postBlog() {
    const title = document.getElementById("blog-title").value;
    const content = document.getElementById("blog-content").value;
    
    if (title && content) {
        const blogList = document.getElementById("blog-list");
        const blogPost = document.createElement("div");
        blogPost.innerHTML = `<h4>${title}</h4><p>${content}</p><hr>`;
        blogList.appendChild(blogPost);
    } else {
        alert("ব্লগের শিরোনাম ও কনটেন্ট লিখুন!");
    }
}

// ৩. হিজরি ক্যালেন্ডার API
fetch("https://api.aladhan.com/v1/gToH?date=16-03-2025")
    .then(response => response.json())
    .then(data => {
        document.getElementById("hijri-date").innerText = data.data.hijri.date;
    })
    .catch(() => {
        document.getElementById("hijri-date").innerText = "ডেটা লোড হয়নি!";
    });

// ৪. লাইভ আজান প্লে করা
function playAzan() {
    const azanAudio = new Audio("https://server6.mp3quran.net/azan/azan_makkah.mp3");
    azanAudio.play();
}