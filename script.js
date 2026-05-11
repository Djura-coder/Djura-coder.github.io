// content
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBM-euCMRoRZbqIh5KTkHk8uS1dGu_F9XQ",
  authDomain: "base-de-datos-poemas.firebaseapp.com",
  databaseURL: "https://base-de-datos-poemas-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "base-de-datos-poemas",
  storageBucket: "base-de-datos-poemas.firebasestorage.app",
  messagingSenderId: "689758621758",
  appId: "1:689758621758:web:ef8a9cf9aa952b92d7416f"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const poemsRef = ref(db, "poems");

window.sendPoem = function () {
  const author = document.getElementById("author").value || "Anónimo";
  const text = document.getElementById("poemText").value;

  if (!text.trim()) return;

  push(poemsRef, {
    author,
    text,
    date: new Date().toLocaleString(),
    timestamp: Date.now()
  });

  document.getElementById("poemText").value = "";
};

const frase = "Voy por tu culito";

const cancion = "https://youtu.be/-vExohgAKGE?si=Xg4wpxV5S466XRsA";


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
