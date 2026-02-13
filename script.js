const NO_PHRASES = [
  "No 💔",
  "Porfis? 🥺",
  "Pero si nos amamos tanto! 💕",
  "En verdad?",
  "Tite :(",
  "No lo quieres pensar un poquito?",
  "Ya di que si moderfaker 😩",
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
    <div style="font-size:20px; color: #525252; font-weight:bold;">
      Nos vemos mañana, rumbo a Guanajuato 😘
    </div>
    <button id="photo-btn">Ver foto</button>
    <audio autoplay loop>
      <source src="pielcanela.mp3" type="audio/mpeg">
    </audio>
  `;

  // Aplicar estilo al botón nuevo (igual que el de NO)
  const photoBtn = document.getElementById("photo-btn");
  photoBtn.style.color = "#E57373";
  photoBtn.style.border = "2px solid #E57373";
  photoBtn.style.backgroundColor = "white";
  photoBtn.style.borderRadius = "25px";
  photoBtn.style.padding = "12px 24px";
  photoBtn.style.marginTop = "20px";
  photoBtn.style.fontWeight = "bold";
  photoBtn.style.cursor = "pointer";
  photoBtn.style.transition = "all 0.3s ease";

  photoBtn.addEventListener("mouseover", () => {
    photoBtn.style.backgroundColor = "#E57373";
    photoBtn.style.color = "white";
  });
  photoBtn.addEventListener("mouseout", () => {
    photoBtn.style.backgroundColor = "white";
    photoBtn.style.color = "#E57373";
  });

  // Acción del botón: reemplazar mensaje por foto
  photoBtn.addEventListener("click", () => {
    root.innerHTML = `
      <img src="foto.jpg" alt="Foto especial" style="max-width:80%; border-radius:15px;">
      <audio autoplay loop>
        <source src="piel-canela.mp3" type="audio/mpeg">
      </audio>
    `;
  });

  // Generar corazones cada medio segundo
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💖";
    heart.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(heart);

    // Eliminar corazón después de animación
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 500);
});
