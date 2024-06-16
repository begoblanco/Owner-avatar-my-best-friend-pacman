let fantasmico;
let pacman;
let cherry;
let pointsCounter;


let fantasmicoPresent = false;
let cherryPresent = false;
let eatenFantasmicos = 0;
let points = 0;

function loaded() {
  pointsCounter = document.getElementById("points-counter"); //seleccionar elemento
  pacman = document.getElementById("pacman-main-image");
  // fantasmico.addEventListener("click", hidePacman);
  spawnFantasmico();
}

document.addEventListener("DOMContentLoaded", loaded); //espera a que el dom termine de cargar

function eatFantasmico() {
  // fantasmico.style.setProperty("visibility", "hidden");
  fantasmico.remove();
  fantasmicoPresent = false;
  eatenFantasmicos++;
  increasePoints(100);
  if (eatenFantasmicos % 3 === 0) {
    window.setTimeout(spawnCherry, 500);
  }
  window.setTimeout(spawnFantasmico, 2000);
}

function eatCherry() {
  cherry.remove();
  cherryPresent = false;
  increasePoints(500);
}

function spawnFantasmico() {
  if (!fantasmicoPresent) {
    // fantasmico.style.setProperty("visibility", "visible");
    fantasmico = document.createElement("img");
    fantasmico.id = "fantasmito-image";
    fantasmico.addEventListener("click", eatFantasmico);
    document.getElementById("mainContent").appendChild(fantasmico);
    fantasmicoPresent = true;
  }
}

function spawnCherry() {
  if (!cherryPresent) {
    cherry = document.createElement("img");
    cherry.id = "cherry-image";
    cherry.addEventListener("click", eatCherry);
    document.getElementById("mainContent").appendChild(cherry);
    cherryPresent = true;
  }
}

function increasePoints(p) {
  points += p;
  pointsCounter.innerText = String(points).padStart(4, '0');
  checkGameOver();
}

function checkGameOver() {
  if (points >= 5000) {
    document.getElementById("game-over").style.display = "block";
  }
}


