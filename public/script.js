document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector("input");
    const translateButton = document.createElement("button");
    const resultContainer = document.createElement("p");

    translateButton = document.createElement("button");
    translateButton.textContent = "Translate";
    document.querySelector(".proficiency").appendChild(translateButton);

    const translatedText = document.createElement("p");
    translatedText.id = "translatedText";
    document.querySelector(".proficiency").appendChild(translatedText);

    document.querySelector("input").addEventListener("input", function () {
        translateText();
    });

    function translateToKorean(text) {
        return text.split("").reverse().join(""); // এটি শুধু উদাহরণ
    }

    function translateText() {
        let inputText = document.querySelector("input").value;
        let translatedText = document.querySelector("#translatedText");
        if (input.value.trim() === "") {
            translatedText.innerText = "Please enter some text.";
            return;
        }
        translatedText.innerText = "Translated: " + input.value.split('').reverse().join('');
    }

    document.querySelector("input").addEventListener("input", function () {
        translateText();
    });
});