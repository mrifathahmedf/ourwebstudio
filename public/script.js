const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

const responses = [
    "আমি আর তোমার সাথে বান্ধবী সম্পর্ক রাখতে পারবো না।",
    "কিছু না, অনেক দিন বান্ধবী থাকছি । আর না 😒",
    "বুঝো না, কি চাই 😑",
    "না বুঝলে মুড়ি খাও, আমাকে আর মেসেজ দিয়ো না!",
    "**Your বান্ধবী has permanently blocked you.**"
];

let step = 0;

function sendMessage() {
    let message = userInput.value.trim();
    if (message === "") return;
    
    addMessage("You", message);
    userInput.value = "";

    setTimeout(() => {
        if (step < responses.length) {
            addMessage("বান্ধবী", responses[step]);
            speak(responses[step]); // Voice system
            step++;
        }
    }, 1000);
}

function addMessage(sender, message) {
    chatBox.innerHTML += `<p><strong>${sender}:</strong> ${message}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// Voice System
function speak(text) {
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "bn-BD"; // Bangla voice
    window.speechSynthesis.speak(speech);
}