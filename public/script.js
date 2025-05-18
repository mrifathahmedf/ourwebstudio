const API_KEY = "c65f0d5a-9e89-4767-be77-00a5eca31472"; // <<== এখানে বসাবি API Key
const ENDPOINT = "https://api.sambanova.ai/v1/chat/completions"; // <<== এখানে বসাবি Endpoint

async function sendMessage() {
  const inputField = document.getElementById("user-input");
  const userMessage = inputField.value.trim();
  if (!userMessage) return;

  displayMessage("তুই:", userMessage);
  inputField.value = "";

  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${c65f0d5a-9e89-4767-be77-00a5eca31472}`
      },
      body: JSON.stringify({
        prompt: userMessage,
        max_tokens: 100,
        temperature: 0.7
      })
    });

    const data = await response.json();
    const aiReply = data?.choices?.[0]?.text || "উত্তর পাইলাম না রে ভাই...";
    displayMessage("🌌ᦓꪮꪊꪶꪑꪖꪻꫀ:", aiReply.trim());

  } catch (err) {
    console.error(err);
    displayMessage("🌌ᦓꪮꪊꪶꪑꪖꪻꫀ:", "গণ্ডগোল হইছে রে! আবার চেষ্টা কর।");
  }
}

function displayMessage(sender, message) {
  const chatBox = document.getElementById("chat-box");
  const messageElem = document.createElement("div");
  messageElem.innerHTML = `<strong>${sender}</strong> ${message}`;
  chatBox.appendChild(messageElem);
  chatBox.scrollTop = chatBox.scrollHeight;
}