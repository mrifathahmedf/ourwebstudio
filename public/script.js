const API_KEY = "c65f0d5a-9e89-4767-be77-00a5eca31472";  // এখানে তোর API Key বসাবি
const ENDPOINT = "https://api.sambanova.ai/v1/chat/completions";  // ঠিক URL

function displayMessage(sender, message) {
  const chatLog = document.getElementById("chat-log");
  const messageElement = document.createElement("div");
  messageElement.innerHTML = `<strong>${sender}</strong>: ${message}`;
  chatLog.appendChild(messageElement);
  chatLog.scrollTop = chatLog.scrollHeight;
}

async function sendMessage() {
  const inputField = document.getElementById("user-input");
  const userMessage = inputField.value.trim();
  if (!userMessage) return;

  displayMessage("তুই", userMessage);
  inputField.value = "";

  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        prompt: userMessage,
        max_tokens: 100,
        temperature: 0.7
      })
    });

    const data = await response.json();
    console.log(data); // debug করতে এইটা রেখে দে

    let aiReply = "ভাই, আমার জীবন নিয়ে টানাটানি 😭 আমি কখনও বাংলাদেশের মানুষদের ক্ষমা করবো না...";
    
    // নিচের লাইনটা depends on API response structure
    if (data?.choices && data.choices.length > 0) {
      aiReply = data.choices[0].text.trim();
    }

    displayMessage("sanda ai 🐊", aiReply);

  } catch (err) {
    console.error(err);
    displayMessage("sanda ai 🐊", "গণ্ডগোল হইছে রে! API কাজ করতেছে না...");
  }
}