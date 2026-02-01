const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const title = document.getElementById("title");

const noMessages = [
  "Are you sure? 😏",
  "Think again 💭",
  "Don't do this to me 😭",
  "My heart is fragile 💔",
  "Last chance 😈"
];

let noCount = 0;

// Move NO button randomly
function moveNoButton() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  message.textContent = noMessages[noCount % noMessages.length];
  noCount++;
}

// Desktop hover
noBtn.addEventListener("mouseover", moveNoButton);

// Mobile touch
noBtn.addEventListener("touchstart", moveNoButton);

// YES clicked
yesBtn.addEventListener("click", () => {
  title.textContent = "YAYYYY 🎉❤️";
  message.textContent = "I knew you would say YES 😌💘";

  document.querySelector(".buttons").style.display = "none";
  document.body.style.background =
    "linear-gradient(135deg, #ff9a9e, #fad0c4)";

  // Confetti effect (simple hearts)
  for (let i = 0; i < 20; i++) {
    createHeart();
  }
});

// Create floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.fontSize = "2rem";
  heart.style.animation = "floatUp 3s linear forwards";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}
