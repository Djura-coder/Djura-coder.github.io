// content
const poema = `
Soy prisionero de tu esencia,
que emanas con dulce fulgor ,
alegria es para mi tu prescencia,
y paz eterna es tu amor.

su belleza inalcanzable,
cual alto palacio vivaz,
su perfume es indescriptible,
aunque lo use alguien mas.
`;

const frase = "Voy por tu culito";

const cancion = "https://www.youtube.com/watch?v=ks_qOI0lzho&list=RDks_qOI0lzho&start_radio=1";


// 📝 efecto máquina de escribir
function escribirTexto(elemento, texto, velocidad = 40) {
  let i = 0;
  elemento.innerHTML = "";

  function escribir() {
    if (i < texto.length) {
      if (texto.charAt(i) === "\n") {
        elemento.innerHTML += "<br>";
      } else {
        elemento.innerHTML += texto.charAt(i);
      }
      i++;
      setTimeout(escribir, velocidad);
    }
  }

  escribir();
}


// fijo
document.addEventListener("DOMContentLoaded", () => {
  const fraseEl = document.getElementById("frase-texto");
  if (fraseEl) fraseEl.innerText = frase;

  const link = document.getElementById("cancion-link");
  if (link) {
    link.href = cancion;
    link.innerText = "Escuchar canción 💜";
  }
});


// corazones flotando
setInterval(() => {
  const contenedor = document.querySelector(".corazones");
  if (!contenedor) return;

  const corazon = document.createElement("div");
  corazon.classList.add("corazon");
  corazon.innerText = "💜";

  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.fontSize = Math.random() * 20 + 10 + "px";

  contenedor.appendChild(corazon);

  setTimeout(() => corazon.remove(), 6000);
}, 500);


//  Reset
function ocultarTodo() {
  document.getElementById("bienvenida").classList.add("oculto");
  document.getElementById("menu").classList.add("oculto");

  document.querySelectorAll(".seccion").forEach(sec => {
    sec.classList.add("oculto");
  });
}


// entrar
function entrar() {
  ocultarTodo();

  const menu = document.getElementById("menu");
  menu.classList.remove("oculto");
  menu.classList.add("fade-in");
}


// mostrar sección
function mostrarSeccion(id) {
  ocultarTodo();

  const seccion = document.getElementById(id);
  seccion.classList.remove("oculto");
  seccion.classList.add("fade-in");

  if (id === "poema") {
    escribirTexto(document.getElementById("poema-texto"), poema);
  }
}


// volver menú
function volverMenu() {
  ocultarTodo();

  const menu = document.getElementById("menu");
  menu.classList.remove("oculto");
  menu.classList.add("fade-in");
}


// carrusel
const fotos = [
  "foto1.jpeg",
  "foto2.jpeg",
  "foto3.jpeg",
  "foto4.jpeg"
];

let indexFoto = 0;

function cambiarFoto(dir) {
  indexFoto += dir;

  if (indexFoto < 0) indexFoto = fotos.length - 1;
  if (indexFoto >= fotos.length) indexFoto = 0;

  const img = document.getElementById("fotoActual");
  if (!img) return;


  img.style.opacity = 0;

  setTimeout(() => {
    img.src = fotos[indexFoto];
    img.style.opacity = 1;
  }, 150);
}


// carrusel fav
const fotosFav = [
  "fav1.jpeg",
  "fav2.jpeg",
  "fav3.jpeg",
  "fav4.jpeg",
  "fav5.jpeg",
  "fav6.jpeg",
  "fav7.jpeg",
  "fav8.jpeg",
  "fav9.jpeg",
  "fav10.jpeg",
  "fav11.jpeg",
  "fav12.jpeg",
  "fav13.jpeg",
  "fav14.jpeg",
  "fav15.jpeg",
  "fav16.jpeg",
  "fav17.jpeg",
  "fav18.jpeg",
  "fav19.jpeg",
];

let indexFav = 0;

function cambiarFotoFav(dir) {
  indexFav += dir;

  if (indexFav < 0) indexFav = fotosFav.length - 1;
  if (indexFav >= fotosFav.length) indexFav = 0;

  const img = document.getElementById("fotoFavActual");
  if (!img) return;

  img.style.opacity = 0;

  setTimeout(() => {
    img.src = fotosFav[indexFav];
    img.style.opacity = 1;
  }, 150);
}
