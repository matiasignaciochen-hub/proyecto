
function corregirRespuestas() {
  const p1 = document.getElementById("pregunta1");
  const p2 = document.getElementById("pregunta2");
  const p3 = document.getElementById("pregunta3");
  const resultado = document.getElementById("resultado");

  if (!p1 || !p2 || !p3 || !resultado) {
    console.error("Faltan elementos del cuestionario (#pregunta1-#pregunta3 o #resultado) en el HTML.");
    return;
  }

  const respuesta1 = p1.value;
  const respuesta2 = p2.value;
  const respuesta3 = p3.value;

  if (!respuesta1 || !respuesta2 || !respuesta3) {
    alert("Por favor, responde todas las preguntas antes de comprobar.");
    return;
  }

  let puntos = 0;
  if (respuesta1 === "b") puntos += 1;
  if (respuesta2 === "c") puntos += 1;
  if (respuesta3 === "b") puntos += 1;

  resultado.textContent = "Tu resultado es: " + puntos + " de 3 puntos.";

  if (puntos === 3) {
    alert("¡Excelente! Todas las respuestas son correctas.");
  } else {
    alert("¡Buen intento! Sigue estudiando.");
  }
}