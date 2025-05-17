const API_KEY = "AIzaSyBhkKIWaKdrr4UzLRXJFo7mz_5WFbGwioM"; // এখানে তোর API KEY বসাবি

async function sendMessage() {
  const inputField = document.getElementById("user-input");
  const userText = inputField.value.trim();
  if (!userText) return;

  appendMessage("তুই", userText);
  inputField.value = "";

  appendMessage("Gemini", "একটু ভাবছি...");

  const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + API_KEY, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: userText }] }]
    })
  });

  const data = await response.json();
  const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "উত্তর আসলো না, আবার চেষ্টা কর।";

  // Remove "thinking" message and add actual reply
  removeLastMessage();
  appendMessage("Gemini", reply);
}

function appendMessage(sender, message) {
  const chatBox = document.getElementById("chat-box");
  const msg = document.createElement("div");
  msg.innerHTML = `<strong>${sender}:</strong> ${message}`;
  msg.style.margin = "10px 0";
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function removeLastMessage() {
  const chatBox = document.getElementById("chat-box");
  if (chatBox.lastChild) {
    chatBox.removeChild(chatBox.lastChild);
  }
}