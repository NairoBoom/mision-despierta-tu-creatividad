// Misión: Despierta tu creatividad
// Proyecto STEAM grado 11 - Artística
// Hecho con p5.js

const escenarios = ["Taller de arte", "Parque creativo", "Galería artística"];

// ----- Bancos de retos -----
// En cada partida se escogen algunos al azar, así que nunca salen iguales.
// "correcta" es la posición de la opción correcta.
const bancoColor = [
  {
    pregunta: "¿Cuál es el color complementario del azul?",
    opciones: ["Naranja", "Verde", "Morado", "Rojo"],
    correcta: 0,
    explicacion: "En el círculo cromático el naranja queda al frente del azul, por eso es su complementario."
  },
  {
    pregunta: "¿Cuál es el color complementario del amarillo?",
    opciones: ["Morado", "Verde", "Naranja", "Azul"],
    correcta: 0,
    explicacion: "El morado está al frente del amarillo en el círculo cromático."
  },
  {
    pregunta: "¿Qué grupo tiene solo colores cálidos?",
    opciones: ["Rojo, naranja y amarillo", "Azul, verde y morado", "Rojo, azul y verde", "Amarillo, verde y azul"],
    correcta: 0,
    explicacion: "Los cálidos recuerdan el fuego y el sol: rojo, naranja y amarillo."
  },
  {
    pregunta: "Si a un color le agregas blanco, ¿qué obtienes?",
    opciones: ["Una versión más clara del mismo color", "Su color complementario", "Un color primario", "Una versión más oscura"],
    correcta: 0,
    explicacion: "El blanco aclara el color. Por ejemplo, rojo con blanco da rosado."
  },
  {
    pregunta: "Mezclar un color primario con un secundario que está a su lado da un color...",
    opciones: ["Terciario", "Primario", "Complementario", "Neutro"],
    correcta: 0,
    explicacion: "Por ejemplo, rojo con naranja da rojo anaranjado, que es un color terciario."
  },
  {
    pregunta: "¿Qué pasa si mezclas dos colores complementarios, como rojo y verde?",
    opciones: ["Sale un color apagado, café o grisáceo", "Sale un color más brillante", "Sale blanco", "Sale amarillo"],
    correcta: 0,
    explicacion: "Los complementarios se neutralizan entre sí y dan tonos apagados."
  },
  {
    pregunta: "¿Para qué sirve poner colores complementarios juntos en una obra?",
    opciones: ["Para crear contraste y llamar la atención", "Para que la obra se vea gris", "Para que no se note el dibujo", "No sirve para nada"],
    correcta: 0,
    explicacion: "Juntos se resaltan mucho uno al otro. Los artistas lo usan para dar contraste."
  },
  {
    pregunta: "Los colores fríos, como el azul y el verde, normalmente transmiten...",
    opciones: ["Calma y tranquilidad", "Rabia y calor", "Hambre", "Peligro"],
    correcta: 0,
    explicacion: "Los colores fríos se asocian con el agua y la naturaleza, por eso transmiten calma."
  },
  {
    pregunta: "El pintor colombiano Fernando Botero es famoso por pintar...",
    opciones: ["Figuras con volúmenes exagerados", "Solo paisajes en blanco y negro", "Solo líneas y puntos", "Personajes de caricatura"],
    correcta: 0,
    explicacion: "Botero exagera el volumen de personas, animales y objetos. A ese estilo se le llama boterismo."
  }
];

const bancoReciclaje = [
  {
    pregunta: "En Colombia, ¿qué residuos van en la caneca negra?",
    opciones: ["Los no aprovechables", "Los plásticos limpios", "Los orgánicos", "El vidrio"],
    correcta: 0,
    explicacion: "La negra es para lo que no se aprovecha, como papel higiénico o servilletas usadas."
  },
  {
    pregunta: "¿En qué caneca va el plástico limpio y seco?",
    opciones: ["Blanca", "Verde", "Negra", "En cualquiera"],
    colores: ["#f2f2f2", "#3c9a4f", "#333333", "#c9c9c9"],
    correcta: 0,
    explicacion: "La caneca blanca es para los aprovechables: plástico, vidrio, metal, papel y cartón limpios."
  },
  {
    pregunta: "Una caja de pizza llena de grasa, ¿en qué caneca va?",
    opciones: ["Negra", "Blanca", "Verde", "Azul"],
    colores: ["#333333", "#f2f2f2", "#3c9a4f", "#2f6fd6"],
    correcta: 0,
    explicacion: "El cartón con grasa ya no se puede reciclar, por eso va en la negra."
  },
  {
    pregunta: "¿Por qué hay que lavar y secar los envases antes de reciclarlos?",
    opciones: ["Porque sucios dañan el resto del material", "Para que pesen más", "Porque así lo pide el camión", "No hace falta lavarlos"],
    correcta: 0,
    explicacion: "Los restos de comida contaminan el papel y el cartón y ya no se pueden aprovechar."
  },
  {
    pregunta: "¿Qué significan las 3R?",
    opciones: ["Reducir, reutilizar y reciclar", "Romper, recoger y regalar", "Reciclar, repetir y reír", "Recoger, revisar y reparar"],
    correcta: 0,
    explicacion: "Primero se reduce lo que se usa, luego se reutiliza y por último se recicla."
  },
  {
    pregunta: "Quieres hacer una escultura con material reciclado. ¿Qué es mejor usar?",
    opciones: ["Tapas plásticas y cartón limpio", "Restos de comida", "Pañuelos usados", "Pilas viejas"],
    correcta: 0,
    explicacion: "Las tapas y el cartón limpios son seguros y les das una segunda vida."
  },
  {
    pregunta: "¿Cuánto puede tardar una botella plástica en degradarse?",
    opciones: ["Cientos de años", "Un mes", "Un año", "Diez años"],
    correcta: 0,
    explicacion: "Una botella plástica puede tardar cientos de años, por eso es mejor reutilizarla o reciclarla."
  }
];

// Pinturas del laboratorio de mezclas
const pinturas = [
  { nombre: "Rojo", color: "#d62828" },
  { nombre: "Amarillo", color: "#f5d000" },
  { nombre: "Azul", color: "#2f6fd6" },
  { nombre: "Blanco", color: "#ffffff" },
  { nombre: "Negro", color: "#000000" }
];

// Receta: cuántas gotas de rojo, amarillo, azul, blanco y negro lleva cada color
const bancoMezclas = [
  { nombre: "Naranja rojizo", receta: [2, 1, 0, 0, 0], explicacion: "Es un color terciario: dos partes de rojo y una de amarillo." },
  { nombre: "Amarillo anaranjado", receta: [1, 2, 0, 0, 0], explicacion: "Es un color terciario: dos partes de amarillo y una de rojo." },
  { nombre: "Verde limón", receta: [0, 2, 1, 0, 0], explicacion: "Es un verde con más amarillo que azul." },
  { nombre: "Azul violeta", receta: [1, 0, 2, 0, 0], explicacion: "Es un color terciario: dos partes de azul y una de rojo." },
  { nombre: "Rojo violeta", receta: [2, 0, 1, 0, 0], explicacion: "Es un color terciario: dos partes de rojo y una de azul." },
  { nombre: "Café", receta: [2, 2, 1, 0, 0], explicacion: "El café sale de mezclar los tres primarios, con menos azul." },
  { nombre: "Rosado", receta: [1, 0, 0, 1, 0], explicacion: "Rojo con blanco: el blanco aclara el color." },
  { nombre: "Celeste", receta: [0, 0, 1, 2, 0], explicacion: "Azul con bastante blanco." },
  { nombre: "Lila", receta: [1, 0, 1, 2, 0], explicacion: "Es un morado (rojo y azul) aclarado con blanco." },
  { nombre: "Verde oscuro", receta: [0, 1, 1, 0, 1], explicacion: "Es un verde (amarillo y azul) oscurecido con negro." }
];

// Canecas según el código de colores de Colombia
const canecas = [
  { nombre: "Blanca", texto: "Aprovechables", color: "#f2f2f2" },
  { nombre: "Verde", texto: "Orgánicos", color: "#3c9a4f" },
  { nombre: "Negra", texto: "No aprovechables", color: "#333333" }
];

const bancoResiduos = [
  { nombre: "Botella plástica limpia", caneca: 0 },
  { nombre: "Lata de atún lavada", caneca: 0 },
  { nombre: "Periódico seco", caneca: 0 },
  { nombre: "Caja de cartón limpia", caneca: 0 },
  { nombre: "Frasco de vidrio", caneca: 0 },
  { nombre: "Cuaderno viejo", caneca: 0 },
  { nombre: "Cáscara de banano", caneca: 1 },
  { nombre: "Restos de arroz", caneca: 1 },
  { nombre: "Hojas secas", caneca: 1 },
  { nombre: "Cáscaras de huevo", caneca: 1 },
  { nombre: "Borra de café", caneca: 1 },
  { nombre: "Servilleta usada", caneca: 2 },
  { nombre: "Papel higiénico", caneca: 2 },
  { nombre: "Caja de pizza con grasa", caneca: 2 },
  { nombre: "Empaque de papas metalizado", caneca: 2 },
  { nombre: "Tapabocas usado", caneca: 2 }
];

const coloresPincel = ["#d62828", "#f28c28", "#f5d000", "#3c9a4f", "#2f6fd6", "#7b3fa0", "#7a4a26", "#000000"];
const calidos = ["#d62828", "#f28c28", "#f5d000"];
const frios = ["#3c9a4f", "#2f6fd6", "#7b3fa0"];

// Retos del nivel 3. El negro siempre se puede usar para los contornos.
const retosCreativos = [
  { texto: "Dibuja un paisaje usando solo colores fríos (verde, azul y morado).", permitidos: frios, minimo: 2 },
  { texto: "Dibuja el sol o el fuego usando solo colores cálidos (rojo, naranja y amarillo).", permitidos: calidos, minimo: 2 },
  { texto: "Dibuja algo que te guste usando al menos 4 colores diferentes.", minimo: 4 },
  { texto: "Crea una obra con dos colores complementarios: azul y naranja.", permitidos: ["#2f6fd6", "#f28c28"], minimo: 2 },
  { texto: "Activa el modo espejo y dibuja una mariposa simétrica con al menos 3 colores.", espejo: true, minimo: 3 }
];

// ----- Variables del juego -----
let puntos = 0;
let vidas = 3;
let nivel = 0;           // número del reto en el que va el jugador
let modo = "inicio";     // inicio, reto, mezcla, clasificar, dibujo o final
let retos = [];          // los retos de esta partida
let retoCreativo;
let puntajeMaximo = 0;

let tiempoLimite = 0;
let inicioTiempo = 0;
let relojActivo = false;

let gotas = [0, 0, 0, 0, 0];

let residuos = [];
let indiceResiduo = 0;
let residuoY = 0;
let aciertos = 0;
let clasificando = false;

let colorPincel = "#2f6fd6";
let trazos = 0;
let coloresUsados = new Set();
let usoEspejo = false;

function setup() {
  let lienzo = createCanvas(640, 320);
  lienzo.parent("lienzo");

  // Los eventos de los botones se registran aquí, cuando la página ya cargó
  document.getElementById("botonJugar").onclick = () => mostrarPantalla("pantallaInstrucciones");
  document.getElementById("botonComenzar").onclick = empezar;
  document.getElementById("botonContinuar").onclick = continuar;
  document.getElementById("botonVaciar").onclick = vaciarMezcla;
  document.getElementById("botonComprobar").onclick = () => comprobarMezcla(false);
  document.getElementById("botonContinuarMezcla").onclick = continuar;
  document.getElementById("botonEmpezarClasificar").onclick = empezarClasificacion;
  document.getElementById("botonContinuarClasificar").onclick = continuar;
  document.getElementById("botonBorrar").onclick = borrarDibujo;
  document.getElementById("botonPresentar").onclick = presentarObra;
  document.getElementById("botonReiniciar").onclick = reiniciar;
  crearPaleta();
  crearPinturas();
  crearCanecas();
  document.getElementById("record").textContent = leerRecord();
}

function draw() {
  if (relojActivo) {
    actualizarReloj();
    if (tiempoRestante() <= 0) {
      relojActivo = false;
      seAcaboElTiempo();
    }
  }
  if (modo === "clasificar" && clasificando) moverResiduo();

  // En el nivel 3 el lienzo es la hoja de dibujo, por eso no se vuelve a pintar la escena
  if (modo !== "dibujo") dibujarEscena();
}

// ----- Juego -----
function empezar() {
  puntos = 0;
  vidas = 3;
  nivel = 0;
  document.getElementById("obraFinal").style.display = "none";
  prepararRetos();
  mostrarReto();
}

// Arma la partida: taller (3 preguntas y 2 mezclas) y parque (2 preguntas y la clasificación)
function prepararRetos() {
  const color = mezclar(bancoColor).slice(0, 3).map(r => prepararPregunta(r, 0));
  const reciclaje = mezclar(bancoReciclaje).slice(0, 2).map(r => prepararPregunta(r, 1));
  const mezclas = mezclar(bancoMezclas).slice(0, 2).map(m => ({ ...m, tipo: "mezcla", escenario: 0 }));

  retos = [color[0], color[1], mezclas[0], color[2], mezclas[1], reciclaje[0], reciclaje[1], { tipo: "clasificar", escenario: 1 }];
  residuos = mezclar(bancoResiduos).slice(0, 8);
  retoCreativo = random(retosCreativos);

  // Cada pregunta da 15 como máximo, cada mezcla 20, cada residuo 5 y la obra 30
  puntajeMaximo = 5 * 15 + 2 * 20 + residuos.length * 5 + 30;
}

// Mezcla las opciones y vuelve a buscar en qué posición quedó la correcta
function prepararPregunta(reto, escenario) {
  let orden = mezclar([0, 1, 2, 3]);
  let nueva = { ...reto, tipo: "pregunta", escenario: escenario };
  nueva.opciones = orden.map(i => reto.opciones[i]);
  if (reto.colores) nueva.colores = orden.map(i => reto.colores[i]);
  nueva.correcta = orden.indexOf(reto.correcta);
  return nueva;
}

// Devuelve una copia de la lista en orden aleatorio
function mezclar(lista) {
  let copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function mostrarReto() {
  const reto = retos[nivel];
  if (reto.tipo === "mezcla") {
    mostrarMezcla();
  } else if (reto.tipo === "clasificar") {
    mostrarClasificacion();
  } else {
    mostrarPregunta();
  }
  actualizarEstado();
}

function tituloNivel() {
  const reto = retos[nivel];
  return "Nivel " + (reto.escenario + 1) + ": " + escenarios[reto.escenario];
}

// ----- Preguntas -----
function mostrarPregunta() {
  modo = "reto";
  const reto = retos[nivel];
  document.getElementById("tituloReto").textContent = tituloNivel();
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
      relojActivo = false;
      let rapido = tiempoRestante() >= tiempoLimite / 2;
      revisarRespuesta(i);
      if (i === reto.correcta && rapido) {
        puntos += 5;
        document.getElementById("mensaje").textContent += " Bonus por rapidez: +5.";
        actualizarEstado();
      }
      terminarPregunta();
    };
    opciones.appendChild(boton);
  }
  mostrarPantalla("pantallaReto");
  iniciarTiempo(15);
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

// Solo se puede responder una vez
function terminarPregunta() {
  for (let b of document.getElementById("opciones").children) b.disabled = true;
  document.getElementById("botonContinuar").classList.remove("oculta");
}

// ----- Laboratorio de mezclas -----
function mostrarMezcla() {
  modo = "mezcla";
  document.getElementById("tituloMezcla").textContent = tituloNivel() + " - Laboratorio de mezclas";
  document.getElementById("mensajeMezcla").textContent = "";
  document.getElementById("botonContinuarMezcla").classList.add("oculta");
  document.getElementById("botonComprobar").disabled = false;
  document.getElementById("botonVaciar").disabled = false;
  for (let b of document.getElementById("pinturas").children) b.disabled = false;
  vaciarMezcla();
  mostrarPantalla("pantallaMezcla");
  iniciarTiempo(30);
}

function agregarGota(i) {
  let total = gotas.reduce((a, b) => a + b, 0);
  if (total >= 6) {
    document.getElementById("mensajeMezcla").textContent = "Máximo 6 gotas. Vacía el vaso si quieres empezar otra vez.";
    return;
  }
  gotas[i]++;
  actualizarPinturas();
}

function vaciarMezcla() {
  gotas = [0, 0, 0, 0, 0];
  document.getElementById("mensajeMezcla").textContent = "";
  actualizarPinturas();
}

function comprobarMezcla(seAcabo) {
  const reto = retos[nivel];
  relojActivo = false;
  let rapido = tiempoRestante() >= tiempoLimite / 2;
  let mensaje = document.getElementById("mensajeMezcla");

  if (!seAcabo && mismaProporcion(gotas, reto.receta)) {
    puntos += 15;
    mensaje.textContent = "¡Lograste el " + reto.nombre.toLowerCase() + "! " + reto.explicacion + " +15 puntos.";
    if (rapido) {
      puntos += 5;
      mensaje.textContent += " Bonus por rapidez: +5.";
    }
  } else {
    vidas -= 1;
    let inicio = seAcabo ? "Se acabó el tiempo. " : "La mezcla no quedó igual. ";
    mensaje.textContent = inicio + "La receta era " + textoReceta(reto.receta) + ". " + reto.explicacion;
  }

  for (let b of document.getElementById("pinturas").children) b.disabled = true;
  document.getElementById("botonComprobar").disabled = true;
  document.getElementById("botonVaciar").disabled = true;
  document.getElementById("botonContinuarMezcla").classList.remove("oculta");
  actualizarEstado();
}

// 2 rojo + 1 amarillo es lo mismo que 4 rojo + 2 amarillo, por eso se compara la proporción
function mismaProporcion(a, b) {
  let totalA = a.reduce((x, y) => x + y, 0);
  let totalB = b.reduce((x, y) => x + y, 0);
  if (totalA === 0) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] * totalB !== b[i] * totalA) return false;
  }
  return true;
}

function textoReceta(receta) {
  let partes = [];
  for (let i = 0; i < receta.length; i++) {
    if (receta[i] > 0) partes.push(receta[i] + " de " + pinturas[i].nombre.toLowerCase());
  }
  return partes.join(" + ");
}

// Calcula el color de la mezcla. Las pinturas se mezclan como en la vida real (modelo RYB),
// no como la luz de la pantalla, por eso azul + amarillo da verde y no gris.
function colorDeMezcla(g) {
  let total = g.reduce((a, b) => a + b, 0);
  if (total === 0) return color(255);
  let c = color(255);
  let mayor = max(g[0], g[1], g[2]);
  if (mayor > 0) c = colorRYB(g[0] / mayor, g[1] / mayor, g[2] / mayor);
  c = lerpColor(c, color(255), g[3] / total);
  c = lerpColor(c, color(0), g[4] / total);
  return c;
}

// Interpola entre los 8 colores de las esquinas del cubo de rojo, amarillo y azul
function colorRYB(r, y, b) {
  const blanco = [1, 1, 1];
  const rojo = [1, 0, 0];
  const amarillo = [1, 1, 0];
  const azul = [0.163, 0.373, 0.6];
  const naranja = [1, 0.5, 0];
  const morado = [0.5, 0, 0.5];
  const verde = [0, 0.66, 0.2];
  const oscuro = [0.2, 0.094, 0];
  let rgb = [];
  for (let k = 0; k < 3; k++) {
    rgb[k] = blanco[k] * (1 - r) * (1 - y) * (1 - b) +
      rojo[k] * r * (1 - y) * (1 - b) +
      amarillo[k] * (1 - r) * y * (1 - b) +
      azul[k] * (1 - r) * (1 - y) * b +
      naranja[k] * r * y * (1 - b) +
      morado[k] * r * (1 - y) * b +
      verde[k] * (1 - r) * y * b +
      oscuro[k] * r * y * b;
  }
  return color(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}

// ----- Clasificación de residuos -----
function mostrarClasificacion() {
  modo = "clasificar";
  clasificando = false;
  indiceResiduo = 0;
  aciertos = 0;
  // aquí no hay reloj: el tiempo lo pone la velocidad con la que caen los residuos
  document.getElementById("tiempo").textContent = "-";
  document.getElementById("barraTiempo").style.width = "0%";
  document.getElementById("tituloClasificar").textContent = tituloNivel() + " - Clasificación contrarreloj";
  document.getElementById("mensajeClasificar").textContent = "";
  document.getElementById("botonEmpezarClasificar").classList.remove("oculta");
  document.getElementById("canecas").classList.add("oculta");
  document.getElementById("botonContinuarClasificar").classList.add("oculta");
  mostrarPantalla("pantallaClasificar");
}

function empezarClasificacion() {
  clasificando = true;
  residuoY = -20;
  document.getElementById("botonEmpezarClasificar").classList.add("oculta");
  document.getElementById("canecas").classList.remove("oculta");
  for (let b of document.getElementById("canecas").children) b.disabled = false;
}

// Cada residuo cae un poco más rápido que el anterior
function moverResiduo() {
  let velocidad = 40 + indiceResiduo * 9;
  residuoY += velocidad * deltaTime / 1000;
  if (residuoY > 165) {
    let correcta = canecas[residuos[indiceResiduo].caneca].nombre.toLowerCase();
    puntos = max(0, puntos - 5);
    document.getElementById("mensajeClasificar").textContent = "¡Se cayó! Iba en la caneca " + correcta + ". -5 puntos.";
    siguienteResiduo();
  }
}

function clasificar(i) {
  if (modo !== "clasificar" || !clasificando) return;
  let residuo = residuos[indiceResiduo];
  let mensaje = document.getElementById("mensajeClasificar");
  if (i === residuo.caneca) {
    aciertos++;
    puntos += 5;
    mensaje.textContent = "¡Bien! " + residuo.nombre + " va en la caneca " + canecas[i].nombre.toLowerCase() + ". +5 puntos.";
  } else {
    puntos = max(0, puntos - 5);
    mensaje.textContent = "No. " + residuo.nombre + " va en la caneca " + canecas[residuo.caneca].nombre.toLowerCase() + ". -5 puntos.";
  }
  siguienteResiduo();
}

function siguienteResiduo() {
  indiceResiduo++;
  residuoY = -20;
  actualizarEstado();
  if (indiceResiduo === residuos.length) terminarClasificacion();
}

function terminarClasificacion() {
  clasificando = false;
  let texto = "Clasificaste bien " + aciertos + " de " + residuos.length + ".";
  if (aciertos < 5) {
    vidas -= 1;
    texto += " Necesitabas al menos 5, pierdes una vida.";
  } else {
    texto += " ¡El parque quedó limpio!";
  }
  document.getElementById("mensajeClasificar").textContent = texto;
  for (let b of document.getElementById("canecas").children) b.disabled = true;
  document.getElementById("botonContinuarClasificar").classList.remove("oculta");
  actualizarEstado();
}

function keyPressed() {
  if (key === "1" || key === "2" || key === "3") clasificar(Number(key) - 1);
}

// ----- Tiempo -----
function iniciarTiempo(segundos) {
  tiempoLimite = segundos;
  inicioTiempo = millis();
  relojActivo = true;
  actualizarReloj();
}

function tiempoRestante() {
  return max(0, tiempoLimite - (millis() - inicioTiempo) / 1000);
}

function actualizarReloj() {
  let quedan = tiempoRestante();
  document.getElementById("tiempo").textContent = ceil(quedan) + " s";
  let barra = document.getElementById("barraTiempo");
  barra.style.width = (quedan / tiempoLimite) * 100 + "%";
  barra.classList.toggle("poco", quedan <= 5);
}

function seAcaboElTiempo() {
  if (modo === "reto") {
    vidas -= 1;
    document.getElementById("mensaje").textContent = "Se acabó el tiempo, pierdes una vida. " + retos[nivel].explicacion;
    actualizarEstado();
    terminarPregunta();
  } else if (modo === "mezcla") {
    comprobarMezcla(true);
  } else if (modo === "dibujo") {
    if (trazos >= 20) {
      presentarObra();
    } else {
      vidas -= 1;
      actualizarEstado();
      if (vidas <= 0) {
        terminar(false);
      } else {
        document.getElementById("mensajeDibujo").textContent = "Se acabó el tiempo y la obra está casi vacía. Pierdes una vida y tienes 60 segundos más.";
        iniciarTiempo(60);
      }
    }
  }
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

// ----- Galería -----
function empezarDibujo() {
  modo = "dibujo";
  background(255);
  trazos = 0;
  coloresUsados = new Set();
  usoEspejo = false;
  document.getElementById("retoCreativo").textContent = "Reto creativo: " + retoCreativo.texto;
  document.getElementById("espejo").checked = false;
  document.getElementById("mensajeDibujo").textContent = "Desbloqueaste el nivel 3: Galería artística. Tienes 60 segundos.";
  mostrarPantalla("pantallaDibujo");
  actualizarEstado();
  iniciarTiempo(60);
}

function mouseDragged() {
  if (modo !== "dibujo" || !relojActivo) return;
  if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height) return;
  stroke(colorPincel);
  strokeWeight(Number(document.getElementById("grosor").value));
  line(pmouseX, pmouseY, mouseX, mouseY);
  // En modo espejo se dibuja lo mismo al otro lado
  if (document.getElementById("espejo").checked) {
    line(width - pmouseX, pmouseY, width - mouseX, mouseY);
    usoEspejo = true;
  }
  trazos++;
  coloresUsados.add(colorPincel);
}

function borrarDibujo() {
  background(255);
  trazos = 0;
  coloresUsados = new Set();
  usoEspejo = false;
}

function presentarObra() {
  if (trazos < 20) {
    document.getElementById("mensajeDibujo").textContent = "Dibuja un poco más antes de presentar tu obra.";
    return;
  }
  relojActivo = false;
  puntos += 20;
  let problema = revisarObra();
  if (problema === "") puntos += 10;
  // Se guarda una copia del dibujo para mostrarla en la galería
  let obra = document.getElementById("obraFinal");
  obra.src = document.querySelector("#lienzo canvas").toDataURL();
  obra.style.display = "block";
  terminar(true, problema);
}

// Devuelve "" si la obra cumple el reto creativo, o la razón por la que no lo cumple
function revisarObra() {
  let usados = [...coloresUsados].filter(c => c !== "#000000");
  if (retoCreativo.permitidos && usados.some(c => !retoCreativo.permitidos.includes(c))) {
    return "usaste colores que el reto no permitía";
  }
  if (usados.length < retoCreativo.minimo) {
    return "te faltaron colores, el reto pedía al menos " + retoCreativo.minimo;
  }
  if (retoCreativo.espejo && !usoEspejo) return "no usaste el modo espejo";
  return "";
}

function terminar(gano, problema) {
  modo = "final";
  relojActivo = false;
  let titulo = "Te quedaste sin vidas";
  let texto = "Obtuviste " + puntos + " puntos. Repasa los retos y vuelve a intentarlo.";
  let estrellas = "";

  if (gano) {
    let emocion = document.getElementById("emocion").value;
    titulo = "Misión cumplida";
    texto = "Los estudiantes recuperaron su creatividad. Tu obra, que expresa " + emocion.toLowerCase() +
      ", quedó expuesta en la galería. ";
    if (problema === "") texto += "Cumpliste el reto creativo: +10. ";
    else texto += "No cumpliste el reto creativo porque " + problema + ". ";
    texto += "Puntaje: " + puntos + " de " + puntajeMaximo + ".";

    let cantidad = 1;
    if (puntos >= puntajeMaximo * 0.8) cantidad = 3;
    else if (puntos >= puntajeMaximo * 0.55) cantidad = 2;
    estrellas = "Ganaste " + cantidad + " de 3 estrellas.";
  }

  let record = leerRecord();
  if (puntos > record) {
    guardarRecord(puntos);
    estrellas += " ¡Nuevo récord!";
  } else {
    estrellas += " Récord: " + record + " puntos.";
  }

  document.getElementById("tituloFinal").textContent = titulo;
  document.getElementById("resultado").textContent = texto;
  document.getElementById("estrellas").textContent = estrellas.trim();
  mostrarPantalla("pantallaFinal");
  actualizarEstado();
}

function reiniciar() {
  modo = "inicio";
  relojActivo = false;
  clasificando = false;
  puntos = 0;
  vidas = 3;
  nivel = 0;
  document.getElementById("tiempo").textContent = "-";
  document.getElementById("barraTiempo").style.width = "0%";
  document.getElementById("record").textContent = leerRecord();
  mostrarPantalla("pantallaInicio");
  actualizarEstado();
}

// El récord se guarda en el navegador. Si el navegador no deja guardar, el juego sigue igual.
function leerRecord() {
  try {
    return Number(localStorage.getItem("recordCreatividad")) || 0;
  } catch (e) {
    return 0;
  }
}

function guardarRecord(valor) {
  try {
    localStorage.setItem("recordCreatividad", valor);
  } catch (e) {}
}

// ----- Pantallas -----
function actualizarEstado() {
  document.getElementById("puntos").textContent = puntos;
  document.getElementById("vidas").textContent = vidas;
  document.getElementById("escenario").textContent = escenarios[escenarioActual()];
}

function escenarioActual() {
  if (modo === "reto" || modo === "mezcla" || modo === "clasificar") return retos[nivel].escenario;
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

function crearPinturas() {
  let caja = document.getElementById("pinturas");
  for (let i = 0; i < pinturas.length; i++) {
    let boton = document.createElement("button");
    boton.onclick = () => agregarGota(i);
    caja.appendChild(boton);
  }
}

function actualizarPinturas() {
  let botones = document.getElementById("pinturas").children;
  for (let i = 0; i < pinturas.length; i++) {
    botones[i].innerHTML = '<span class="muestra" style="background:' + pinturas[i].color + '"></span>' +
      pinturas[i].nombre + ": " + gotas[i];
  }
}

function crearCanecas() {
  let caja = document.getElementById("canecas");
  for (let i = 0; i < canecas.length; i++) {
    let boton = document.createElement("button");
    boton.innerHTML = '<span class="muestra" style="background:' + canecas[i].color + '"></span>' +
      (i + 1) + ". " + canecas[i].nombre + " (" + canecas[i].texto + ")";
    boton.onclick = () => clasificar(i);
    caja.appendChild(boton);
  }
}

// ----- Dibujo de los escenarios -----
function dibujarEscena() {
  let e = escenarioActual();
  if (e === 0) dibujarTaller();
  if (e === 1) dibujarParque();
  if (e === 2) dibujarGaleria();
  dibujarArtin(110, 290);

  if (modo === "mezcla") dibujarMezcla();
  if (modo === "clasificar") dibujarResiduo();
}

// Muestra el color objetivo al lado de la mezcla del jugador
function dibujarMezcla() {
  const reto = retos[nivel];
  stroke(60);
  strokeWeight(2);
  fill(colorDeMezcla(reto.receta));
  ellipse(380, 175, 110, 110);
  fill(colorDeMezcla(gotas));
  ellipse(540, 175, 110, 110);

  noStroke();
  fill(255, 230);
  rect(310, 92, 140, 24, 6);
  rect(480, 92, 120, 24, 6);
  fill(40);
  textSize(15);
  textAlign(CENTER, CENTER);
  text(reto.nombre, 380, 104);
  text("Tu mezcla", 540, 104);
  textSize(13);
  text("Gotas: " + gotas.reduce((a, b) => a + b, 0) + " de 6", 540, 243);
}

function dibujarResiduo() {
  noStroke();
  fill(40);
  textSize(14);
  textAlign(CENTER, CENTER);
  if (!clasificando) {
    if (indiceResiduo === 0) text("Pulsa ¡Empezar! cuando estés listo", 430, 40);
    return;
  }
  text("Residuo " + (indiceResiduo + 1) + " de " + residuos.length, 580, 20);
  stroke(80);
  strokeWeight(2);
  fill(255);
  rect(320, residuoY, 220, 40, 8);
  noStroke();
  fill(30);
  textSize(15);
  text(residuos[indiceResiduo].nombre, 430, residuoY + 20);
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
  rect(225, 140, 20, 100);
  fill("#3c9a4f");
  ellipse(235, 120, 120, 100);
  // las tres canecas del código de colores
  for (let i = 0; i < canecas.length; i++) {
    let x = 340 + i * 100;
    stroke(80);
    strokeWeight(1);
    fill(canecas[i].color);
    rect(x - 30, 190, 60, 65, 4);
    noStroke();
    fill(i === 0 ? 60 : 255);
    textSize(10);
    textAlign(CENTER, CENTER);
    text(canecas[i].nombre.toUpperCase(), x, 222);
  }
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
  strokeWeight(1);
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
