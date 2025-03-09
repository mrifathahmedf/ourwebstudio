function addPost() {
    let postInput = document.getElementById("post-input");
    let feed = document.getElementById("feed");

    if (postInput.value.trim() === "") return; // খালি পোস্ট আটকানো

    let postDiv = document.createElement("div");
    postDiv.classList.add("post");

    let postText = document.createElement("p");
    postText.innerText = postInput.value;

    let likeBtn = document.createElement("button");
    likeBtn.innerText = "Like ❤️";
    likeBtn.classList.add("like-btn");
    likeBtn.onclick = function () {
        likeBtn.innerText = "Liked ❤️";
    };

    let commentInput = document.createElement("input");
    commentInput.placeholder = "Write a comment...";
    commentInput.type = "text";
    commentInput.classList.add("comment-box");

    let commentBtn = document.createElement("button");
    commentBtn.innerText = "Comment";
    commentBtn.onclick = function () {
        let commentText = commentInput.value.trim();
        if (commentText !== "") {
            let commentPara = document.createElement("p");
            commentPara.innerText = "💬 " + commentText;
            postDiv.appendChild(commentPara);
            commentInput.value = "";
        }
    };

    postDiv.appendChild(postText);
    postDiv.appendChild(likeBtn);
    postDiv.appendChild(commentInput);
    postDiv.appendChild(commentBtn);
    feed.prepend(postDiv); // নতুন পোস্ট উপরে দেখাবে

    postInput.value = ""; // ইনপুট খালি করা
}