let character = document.getElementById("character");
let ghost = document.getElementById("ghost");
let scoreDisplay = document.getElementById("score");
let leftBtn = document.getElementById("left-btn");
let rightBtn = document.getElementById("right-btn");
let jumpBtn = document.getElementById("jump-btn");

let score = 0;
let gameOver = false;

// মোবাইল কন্ট্রোল
leftBtn.addEventListener("click", moveLeft);
rightBtn.addEventListener("click", moveRight);
jumpBtn.addEventListener("click", jump);

function moveLeft() {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if (left > 10) {
        character.style.left = left - 20 + "px";
    }
}

function moveRight() {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if (left < 350) {
        character.style.left = left + 20 + "px";
    }
}

function jump() {
    if (!gameOver) {
        character.style.bottom = "80px";
        setTimeout(() => {
            character.style.bottom = "10px";
        }, 500);
    }
}

// ভূত নড়াচড়া করবে
setInterval(() => {
    let ghostLeft = parseInt(window.getComputedStyle(ghost).getPropertyValue("left"));
    ghost.style.left = (ghostLeft + 5) % 400 + "px";

    let charLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if (Math.abs(charLeft - ghostLeft) < 30) {
        alert("গেম ওভার! তোর স্কোর: " + score);
        gameOver = true;
    }
}, 100);

// কয়েন সংগ্রহ
setInterval(() => {
    if (!gameOver) {
        score += 10;
        scoreDisplay.innerText = "কয়েন: " + score;
    }
}, 500);