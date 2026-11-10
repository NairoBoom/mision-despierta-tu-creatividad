// Misión: Despierta tu creatividad
// Proyecto STEAM grado 11 - Artística
// Hecho con p5.js

const escenarios = ["Taller de arte", "Parque creativo", "Galería artística"];

// Retos de los niveles 1 y 2. "correcta" es la posición de la opción correcta.
const retos = [
  {
    escenario: 0,
    pregunta: "Mezclas pintura azul con pintura amarilla. ¿Qué color obtienes?",
    opciones: ["Verde", "Morado", "Naranja"],
    colores: ["#3c9a4f", "#7b3fa0", "#f28c28"],
    mezcla: ["#2f6fd6", "#f5d000"],
    correcta: 0,
    explicacion: "Azul y amarillo forman verde, un color secundario."
  },
  {
    escenario: 0,
    pregunta: "Mezclas pintura roja con pintura azul. ¿Qué color obtienes?",
    opciones: ["Café", "Morado", "Verde"],
    colores: ["#7a4a26", "#7b3fa0", "#3c9a4f"],
    mezcla: ["#d62828", "#2f6fd6"],
    correcta: 1,
    explicacion: "Rojo y azul forman morado."
  },
  {
    escenario: 0,
    pregunta: "¿Cuáles son los colores primarios?",
    opciones: ["Rojo, amarillo y azul", "Verde, naranja y morado", "Blanco, negro y gris"],
    correcta: 0,
    explicacion: "Los colores primarios son rojo, amarillo y azul. Con ellos se forman los demás."
  },
  {
    escenario: 1,
    pregunta: "¿Cuál de estos objetos es de plástico y se puede reciclar?",
    opciones: ["Botella de gaseosa limpia", "Servilleta usada", "Cáscara de banano"],
    correcta: 0,
    explicacion: "La botella plástica limpia se puede reciclar. La servilleta y la cáscara no son plástico."
  },
  {
    escenario: 1,
    pregunta: "Quieres hacer una escultura con material reciclado. ¿Qué usarías?",
    opciones: ["Tapas plásticas y cajas de cartón", "Restos de comida", "Pañuelos usados"],
    correcta: 0,
    explicacion: "Las tapas y el cartón limpios sirven para crear obras y así se les da una segunda vida."
  },
  {
    escenario: 1,
    pregunta: "En Colombia, ¿en qué caneca va el plástico limpio?",
    opciones: ["Blanca", "Verde", "Negra"],
    colores: ["#f2f2f2", "#3c9a4f", "#333333"],
    correcta: 0,
    explicacion: "El plástico limpio y seco va en la caneca blanca de aprovechables."
  }
];

const coloresPincel = ["#d62828", "#f28c28", "#f5d000", "#3c9a4f", "#2f6fd6", "#7b3fa0", "#7a4a26", "#000000"];

let puntos = 0;
let vidas = 3;
let nivel = 0;           // número del reto en el que va el jugador
let modo = "inicio";     // inicio, reto, dibujo o final
let colorPincel = "#2f6fd6";
let trazos = 0;

function setup() {
  let lienzo = createCanvas(640, 320);
  lienzo.parent("lienzo");

  // Los eventos de los botones se registran aquí, cuando la página ya cargó
  document.getElementById("botonJugar").onclick = () => mostrarPantalla("pantallaInstrucciones");
  document.getElementById("botonComenzar").onclick = empezar;
  document.getElementById("botonContinuar").onclick = continuar;
  document.getElementById("botonBorrar").onclick = borrarDibujo;
  document.getElementById("botonPresentar").onclick = presentarObra;
  document.getElementById("botonReiniciar").onclick = reiniciar;
  crearPaleta();
}

function draw() {
  // En el nivel 3 el lienzo es la hoja de dibujo, por eso no se vuelve a pintar la escena
  if (modo !== "dibujo") dibujarEscena();
}

// ----- Juego -----
function empezar() {
  puntos = 0;
  vidas = 3;
  nivel = 0;
  document.getElementById("obraFinal").style.display = "none";
  mostrarReto();
}

function mostrarReto() {
  modo = "reto";
  const reto = retos[nivel];
  document.getElementById("tituloReto").textContent = "Nivel " + (reto.escenario + 1) + ": " + escenarios[reto.escenario];
  document.getElementById("pregunta").textContent = reto.pregunta;
  document.getElementById("mensaje").textContent = "";
  document.getElementById("botonContinuar").classList.add("oculta");

  // Al pasar al parque se avisa que se desbloqueó el nivel 2
  if (nivel > 0 && reto.escenario !== retos[nivel - 1].escenario) {
    document.getElementById("mensaje").textContent = "Desbloqueaste el nivel 2: " + escenarios[reto.escenario] + ".";
  }

  let opciones = document.getElementById("opciones");
  opciones.innerHTML = "";
  for (let i = 0; i < reto.opciones.length; i++) {
    let boton = document.createElement("button");
    if (reto.colores) boton.innerHTML = '<span class="muestra" style="background:' + reto.colores[i] + '"></span>';
    boton.append(reto.opciones[i]);
    boton.onclick = () => {
      revisarRespuesta(i);
      // solo se puede responder una vez
      for (let b of opciones.children) b.disabled = true;
      document.getElementById("botonContinuar").classList.remove("oculta");
    };
    opciones.appendChild(boton);
  }
  mostrarPantalla("pantallaReto");
  actualizarEstado();
}

function revisarRespuesta(respuesta) {
  const reto = retos[nivel];
  if (respuesta === reto.correcta) {
    puntos += 10;
    document.getElementById("mensaje").textContent =
      "¡Correcto! " + reto.explicacion + " +10 puntos.";
  } else {
    vidas -= 1;
    document.getElementById("mensaje").textContent =
      "Respuesta incorrecta. " + reto.explicacion;
  }
  actualizarEstado();
}

function continuar() {
  if (vidas <= 0) {
    terminar(false);
    return;
  }
  nivel++;
  if (nivel === retos.length) {
    empezarDibujo();
  } else {
    mostrarReto();
  }
}

function empezarDibujo() {
  modo = "dibujo";
  background(255);
  trazos = 0;
  document.getElementById("mensajeDibujo").textContent = "Desbloqueaste el nivel 3: Galería artística.";
  mostrarPantalla("pantallaDibujo");
  actualizarEstado();
}

function mouseDragged() {
  if (modo !== "dibujo") return;
  if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height) return;
  stroke(colorPincel);
  strokeWeight(6);
  line(pmouseX, pmouseY, mouseX, mouseY);
  trazos++;
}

function borrarDibujo() {
  background(255);
  trazos = 0;
}

function presentarObra() {
  if (trazos < 20) {
    document.getElementById("mensajeDibujo").textContent = "Dibuja un poco más antes de presentar tu obra.";
    return;
  }
  puntos += 20;
  // Se guarda una copia del dibujo para mostrarla en la galería
  let obra = document.getElementById("obraFinal");
  obra.src = document.querySelector("#lienzo canvas").toDataURL();
  obra.style.display = "block";
  terminar(true);
}

function terminar(gano) {
  modo = "final";
  let titulo = "Te quedaste sin vidas";
  let texto = "Obtuviste " + puntos + " puntos. Repasa los retos y vuelve a intentarlo.";
  let estrellas = "";

  if (gano) {
    let emocion = document.getElementById("emocion").value;
    titulo = "Misión cumplida";
    texto = "Los estudiantes recuperaron su creatividad. Tu obra, que expresa " + emocion.toLowerCase() +
      ", quedó expuesta en la galería. Puntaje: " + puntos + " de 80.";
    let cantidad = 1;
    if (puntos >= 70) cantidad = 3;
    else if (puntos >= 50) cantidad = 2;
    estrellas = "Ganaste " + cantidad + " de 3 estrellas.";
  }

  document.getElementById("tituloFinal").textContent = titulo;
  document.getElementById("resultado").textContent = texto;
  document.getElementById("estrellas").textContent = estrellas;
  mostrarPantalla("pantallaFinal");
  actualizarEstado();
}

function reiniciar() {
  modo = "inicio";
  puntos = 0;
  vidas = 3;
  nivel = 0;
  mostrarPantalla("pantallaInicio");
  actualizarEstado();
}

// ----- Pantallas -----
function actualizarEstado() {
  document.getElementById("puntos").textContent = puntos;
  document.getElementById("vidas").textContent = vidas;
  document.getElementById("escenario").textContent = escenarios[escenarioActual()];
}

function escenarioActual() {
  if (modo === "reto") return retos[nivel].escenario;
  if (modo === "dibujo" || modo === "final") return 2;
  return 0;
}

function mostrarPantalla(id) {
  for (let pantalla of document.querySelectorAll(".pantalla")) pantalla.classList.add("oculta");
  document.getElementById(id).classList.remove("oculta");
}

function crearPaleta() {
  let paleta = document.getElementById("colores");
  for (let color of coloresPincel) {
    let boton = document.createElement("button");
    boton.style.background = color;
    if (color === colorPincel) boton.classList.add("elegido");
    boton.onclick = () => {
      colorPincel = color;
      for (let b of paleta.children) b.classList.remove("elegido");
      boton.classList.add("elegido");
    };
    paleta.appendChild(boton);
  }
}

// ----- Dibujo de los escenarios -----
function dibujarEscena() {
  let e = escenarioActual();
  if (e === 0) dibujarTaller();
  if (e === 1) dibujarParque();
  if (e === 2) dibujarGaleria();
  dibujarArtin(110, 290);

  // En los retos de mezclar colores se muestran las dos pinturas
  if (modo === "reto" && retos[nivel].mezcla) {
    let mezcla = retos[nivel].mezcla;
    stroke(60);
    strokeWeight(2);
    fill(mezcla[0]);
    ellipse(340, 160, 80, 80);
    fill(mezcla[1]);
    ellipse(470, 160, 80, 80);
    fill(255);
    ellipse(590, 160, 70, 70);
    noStroke();
    fill(40);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("+", 405, 160);
    text("=", 532, 160);
    text("?", 590, 160);
  }
}

function dibujarTaller() {
  background("#f3e3c3");
  noStroke();
  fill("#c89f6f");
  rect(0, 250, width, 70);
  // manchas de pintura en la pared
  let manchas = ["#d62828", "#f5d000", "#2f6fd6", "#3c9a4f", "#7b3fa0"];
  for (let i = 0; i < manchas.length; i++) {
    fill(manchas[i]);
    ellipse(250 + i * 85, 50, 30, 30);
  }
  // caballete con un lienzo
  stroke("#7a4a26");
  strokeWeight(6);
  line(245, 120, 215, 250);
  line(245, 120, 275, 250);
  noStroke();
  fill(255);
  rect(205, 90, 80, 100);
}

function dibujarParque() {
  background("#bfe3f5");
  noStroke();
  fill("#7bc96f");
  rect(0, 230, width, 90);
  fill("#7a4a26");
  rect(520, 140, 20, 100);
  fill("#3c9a4f");
  ellipse(530, 120, 120, 100);
  // caneca blanca de aprovechables
  fill("#f2f2f2");
  stroke(80);
  rect(380, 190, 50, 60, 4);
  noStroke();
  fill(60);
  textSize(10);
  textAlign(CENTER, CENTER);
  text("BLANCA", 405, 220);
}

function dibujarGaleria() {
  background("#efe9e1");
  noStroke();
  fill("#b7a58f");
  rect(0, 260, width, 60);
  // cuadros colgados
  let cuadros = ["#f28c28", "#2f6fd6", "#3c9a4f"];
  for (let i = 0; i < cuadros.length; i++) {
    fill("#a0703c");
    rect(250 + i * 130, 60, 100, 80);
    fill(cuadros[i]);
    rect(258 + i * 130, 68, 84, 64);
  }
}

// Artín: un niño con una paleta de colores y un pincel
function dibujarArtin(x, y) {
  noStroke();
  fill("#3b3b6d");
  rect(x - 18, y - 50, 14, 50);
  rect(x + 4, y - 50, 14, 50);
  fill("#f2f2f2");
  stroke(120);
  rect(x - 25, y - 115, 50, 70, 8);
  noStroke();
  fill("#d62828");
  ellipse(x - 8, y - 85, 8, 8);
  fill("#2f6fd6");
  ellipse(x + 8, y - 70, 8, 8);
  fill("#f1c27d");
  ellipse(x, y - 140, 50, 50);
  fill("#4a2c1a");
  arc(x, y - 148, 54, 40, PI, TWO_PI);
  fill(30);
  ellipse(x - 9, y - 140, 6, 6);
  ellipse(x + 9, y - 140, 6, 6);
  noFill();
  stroke(30);
  strokeWeight(2);
  arc(x, y - 130, 20, 12, 0, PI);
  // paleta
  noStroke();
  fill("#d9b07a");
  ellipse(x + 50, y - 80, 50, 34);
  fill("#d62828");
  ellipse(x + 40, y - 86, 8, 8);
  fill("#f5d000");
  ellipse(x + 52, y - 90, 8, 8);
  fill("#2f6fd6");
  ellipse(x + 62, y - 82, 8, 8);
  // pincel
  stroke("#7a4a26");
  strokeWeight(4);
  line(x - 30, y - 70, x - 55, y - 110);
}
