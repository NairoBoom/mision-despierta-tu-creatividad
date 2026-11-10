# Misión: Despierta tu creatividad

Videojuego educativo de Artística. Proyecto STEAM grado 11 - I.E. Ángela María Torres Suárez.

Artín descubre que los estudiantes perdieron la creatividad. El jugador lo ayuda a recuperarla con retos de colores en el taller de arte, retos de reciclaje en el parque creativo y un dibujo propio en la galería artística.

## Cómo se juega

- **Nivel 1, taller de arte:** tres preguntas de teoría del color (15 segundos cada una) y dos retos del laboratorio de mezclas, donde hay que preparar un color con gotas de pintura (30 segundos).
- **Nivel 2, parque creativo:** dos preguntas de reciclaje y una clasificación contrarreloj: caen 8 residuos, cada uno más rápido, y hay que enviarlos a la caneca blanca, verde o negra.
- **Nivel 3, galería artística:** 60 segundos para dibujar una obra que cumpla un reto creativo, por ejemplo usar solo colores fríos o dibujar en modo espejo.

Las preguntas, las mezclas, los residuos y el reto creativo se escogen al azar en cada partida. El mejor puntaje se guarda como récord en el navegador.

## Versión 2

El grupo probó la primera versión y la encontró muy fácil para jugadores de 12 a 16 años. Por eso se agregó lo que ya estaba en el diseño de la Entrega 1 pero no se había programado:

- Tiempo en cada reto ("¿Habrá tiempo? Sí").
- Combinar colores como mecánica (laboratorio de mezclas), no solo como pregunta.
- Más retos y más materiales reciclables, con preguntas de 4 opciones.
- Retos creativos en el dibujo y modo espejo (simetría).
- Bonus por rapidez y récord.

## Cómo abrirlo

1. Abrir `index.html` en Chrome, Edge o Firefox.
2. Se necesita conexión a internet, porque p5.js se carga desde un CDN.

## Cómo probarlo

1. Pulsar "Jugar" y luego "Comenzar".
2. Responder una pregunta: una correcta suma 10 puntos (15 si es rápida) y una incorrecta resta una vida.
3. Dejar que se acabe el tiempo en una pregunta y comprobar que se pierde una vida.
4. En el laboratorio, agregar gotas, comparar los dos círculos y pulsar "Comprobar mezcla".
5. En la clasificación, usar los botones o las teclas 1, 2 y 3.
6. En el nivel 3, dibujar con el mouse (o con el dedo en el celular), probar "Borrar", el modo espejo y "Presentar obra".
7. Revisar la pantalla final: puntaje, estrellas, reto creativo, récord y la obra en la galería.
8. Pulsar "Volver a jugar" y comprobar que los puntos vuelven a 0 y las vidas a 3.

## Archivos

- `index.html`: pantallas, textos y botones.
- `style.css`: colores y diseño.
- `js/game.js`: retos, mezclas, clasificación, tiempo, puntos, vidas, dibujo y pantalla final.
- `assets/images/` y `assets/sounds/`: carpetas para imágenes y sonidos de futuras mejoras.
