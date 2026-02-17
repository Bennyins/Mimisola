/* CUSTOMIZE */
const HER_NAME = "DAMILOLA";
const QUESTION_TEXT = "Damilola, I want us, will you be my girlfriend?";
const YES_RESPONSE = "I’m really happy you said yes. I promise to be intentional and commited with you.💖😌";

document.getElementById("herName").innerText = HER_NAME;

const typingEl = document.getElementById("typingText");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const music = document.getElementById("bgMusic");
const message = document.getElementById("message");
const toggle = document.getElementById("modeToggle");

/* Typing effect */
let i = 0;

function type() {
  if (i < QUESTION_TEXT.length) {
    typingEl.textContent += QUESTION_TEXT.charAt(i);
    i++;
    setTimeout(type, 60);
  }
}

type();

/* Move NO button */
function moveNo() {
  const pad = 20;

  noBtn.style.left =
    Math.random() * (window.innerWidth - noBtn.offsetWidth - pad) + "px";

  noBtn.style.top =
    Math.random() * (window.innerHeight - noBtn.offsetHeight - pad) + "px";
}

noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", moveNo);

moveNo();

/* Music fade in */
function fadeInMusic() {

  music.volume = 0;
  music.play();

  let vol = 0;

  const fade = setInterval(() => {

    vol += 0.05;

    music.volume = vol;

    if (vol >= 1) clearInterval(fade);

  }, 200);

}

/* YES button click */
yesBtn.addEventListener("click", () => {

  document.querySelector("img").style.display = "none";

  document.querySelector("h1").style.display = "none";

  typingEl.style.display = "none";

  document.getElementById("buttons").style.display = "none";

  message.textContent = YES_RESPONSE;

  message.style.display = "block";

  fadeInMusic();

  confetti({
    particleCount: 250,
    spread: 90,
    origin: { y: 0.6 }
  });

});

/* Dark mode */
toggle.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  toggle.textContent =
    document.body.classList.contains("dark")
      ? "☀️ Day"
      : "🌙 Night";

});

/* Floating hearts */
const heartColors = ["💖", "❤️", "💜", "🤍"];

setInterval(() => {

  const heart = document.createElement("div");

  heart.className = "heart";

  heart.innerText =
    heartColors[Math.floor(Math.random() * heartColors.length)];

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize = 16 + Math.random() * 20 + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);

}, 600);