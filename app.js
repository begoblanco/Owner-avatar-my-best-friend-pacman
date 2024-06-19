let pacman;
let pointsCounter;

let gameOver = false;
let eatenFantasmicos = 0;
let points = 0;

function loaded() {
  pointsCounter = document.getElementById("points-counter"); //seleccionar elemento
  pacman = document.getElementById("pacman-main-image");
  window.setInterval(spawnFantasmico, 2000);
}

document.addEventListener("DOMContentLoaded", loaded); //espera a que el dom termine de cargar

function eatFantasmico(event) {
  // fantasmico.style.setProperty("visibility", "hidden");
  event.target.remove();
  eatenFantasmicos++;
  increasePoints(100);
  if (eatenFantasmicos % 3 === 0) {
    spawnCherry();
  }
}

function eatCherry(event) {
  event.target.remove();
  increasePoints(500);
}

function spawnFantasmico() {
  if (!gameOver) {
    let fantasmico = document.createElement("img");
    fantasmico.id = "fantasmito-image";
    fantasmico.addEventListener("click", eatFantasmico);
    document.getElementById("mainContent").appendChild(fantasmico);
    fantasmicoPresent = true;
  }
}

function spawnCherry() {
  cherry = document.createElement("img");
  cherry.id = "cherry-image";
  cherry.addEventListener("click", eatCherry);
  document.getElementById("mainContent").appendChild(cherry);
}

function increasePoints(p) {
  points += p;
  pointsCounter.innerText = String(points).padStart(4, '0');
  checkGameOver();
}

function checkGameOver() {
  if (points >= 5000) {
    gameOver = true;
    document.getElementById("game-over").style.display = "block";
  }
}
