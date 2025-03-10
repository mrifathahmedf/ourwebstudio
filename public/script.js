function openLetter() {
    document.querySelector('.cover').style.transform = "rotateX(180deg)";
    document.querySelector('.letter').style.opacity = "1";
}

function closeLetter() {
    document.querySelector('.cover').style.transform = "rotateX(0deg)";
    document.querySelector('.letter').style.opacity = "0";
}