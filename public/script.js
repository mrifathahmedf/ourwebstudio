let character = document.getElementById("character");
let ghost = document.getElementById("ghost");
let scoreDisplay = document.getElementById("score");

let score = 0;
let gameOver = false;

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        moveLeft();
    } else if (event.key === "ArrowRight") {
        moveRight();
    } else if (event.key === " ") {
        jump();
    }
});

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

setInterval(() => {
    let ghostLeft = parseInt(window.getComputedStyle(ghost).getPropertyValue("left"));
    ghost.style.left = (ghostLeft + 5) % 400 + "px";

    let charLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if (Math.abs(charLeft - ghostLeft) < 30) {
        alert("গেম ওভার! তোর স্কোর: " + score);
        gameOver = true;
    }
}, 100);

setInterval(() => {
    if (!gameOver) {
        score += 10;
        scoreDisplay.innerText = "কয়েন: " + score;
    }
}, 500);