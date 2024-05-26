let fantasmico;
let pacman;

function loaded() {
  fantasmico = document.getElementById("fantasmito-image"); //seleccionar elemento
  fantasmico.addEventListener("click", eatFantasmico); //registrar evento al elemento
  pacman = document.getElementById("pacman-main-image"); 
  // fantasmico.addEventListener("click", hidePacman); 

}

document.addEventListener("DOMContentLoaded", loaded); //espera a que el dom termine de cargar

function eatFantasmico() {
  fantasmico.style.setProperty("visibility", "hidden");
  fantasmico.src="./public/assets/media/pacman-icon.png"; //cambia fantasmico por pacman
  fantasmico.style.setProperty("visibility", "visible"); //ahora se ve la imagen de pacman en su lugar
  pacman.style.setProperty("visibility", "hidden"); //esconde el pacman original
}

// function hidePacman(){
//   pacman.style.setProperty("visibility", "hidden");
// }


