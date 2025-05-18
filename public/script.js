const API_KEY = "c65f0d5a-9e89-4767-be77-00a5eca31472";
const ENDPOINT = "https://api.sambanova.ai/v1/chat/completions";

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

  displayMessage("কফিল", userMessage);
  inputField.value = "";

  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",  // নিশ্চিত করবি SambaNova এই মডেলটা সাপোর্ট করে কি না
        messages: [
          { role: "system", content: "You are a helpful and funny Bangla assistant." },
          { role: "user", content: userMessage }
        ],
        max_tokens: 100,
        temperature: 0.7
      })
    });

    const data = await response.json();
    console.log(data); // debug

    let aiReply = "ভাই, আমার জীবন নিয়ে টানাটানি 😭 আমি কখনও বাংলাদেশের মানুষদের ক্ষমা করবো না...";
    if (data?.choices && data.choices.length > 0) {
      aiReply = data.choices[0].message.content.trim();
    }

    displayMessage("sanda ai 🐊", aiReply);

  } catch (err) {
    console.error(err);
    displayMessage("sanda ai 🐊", "গণ্ডগোল হইছে রে! API কাজ করতেছে না...");
  }
}