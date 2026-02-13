const NO_PHRASES = [
  "No 💔",
  "Pretty please? 🥺",
  "But we'd be so cute together! 💕",
  "One more chance, pookie?",
  "Don't break my heart :(",
  "What about a maybe?",
  "Please don't do this to me, I'm fragile",
];

let noClicks = 0;
let isValentine = false;

const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const mainImg = document.getElementById("main-img");
const question = document.getElementById("question");
const root = document.getElementById("root");

const firstImg = "https://media.tenor.com/VIChDQ6ejRQAAAAj/jumping-bear-hearts-no-png.gif";
const secondImg = "https://media.tenor.com/f1xnRxTRxLAAAAAj/bears-with-kisses-bg.gif";

noBtn.addEventListener("click", () => {
  noClicks++;
  noBtn.textContent = NO_PHRASES[Math.min(noClicks - 1, NO_PHRASES.length - 1)];
  yesBtn.style.fontSize = `${(noClicks * 20) + 16}px`;
});

yesBtn.addEventListener("click", () => {
  isValentine = true;
  root.innerHTML = `
    <img src="${secondImg}" alt="bear kisses">
    <div style="font-size:48px; color:pink; font-weight:bold;">
      Yay!!! 💖🎉
    </div>
  `;
});
