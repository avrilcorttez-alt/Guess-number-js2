// === ADIVINA EL NÚMERO - Versión DOM ===

// --- Seleccionar elementos del HTML ---
const inputIntento = document.getElementById('inputIntento');
const btnAdivinar = document.getElementById('btnAdivinar');
const mensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador');
const historial = document.getElementById('historial');
const btnReiniciar = document.getElementById('btnReiniciar');
const tarjeta = document.getElementById('game-card');
const MAX_INTENTOS = 10;


// --- Variables del juego ---
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let historialIntentos = [];
let mejorPuntaje = null;

console.log('(DEBUG) Número secreto:', numeroSecreto);

console.log('Elementos conectados:', inputIntento, btnAdivinar, mensaje);


// --- Tu primera función ---
function mostrarMensaje(texto, color) {
  mensaje.textContent = texto;
  mensaje.style.color = color;
}

// Prueba la función
mostrarMensaje('¡BIENVENIDO A LOS JUEGOS DEL HAMBRE!', '#ffffff');

// --- Función principal ---
function verificarIntento() {
  let valor = Number(inputIntento.value);

  // Validar entrada
  if (isNaN(valor) || valor < 1 || valor > 100) {
    mostrarMensaje('⚠️ Ingresa un número del 1 al 100', 'orange');
    return;
  }

  // Incrementar contador
  intentos++;
  verificarGameOver();
  contador.textContent = 'Intentos: ' + intentos;

  // Agregar pastilla de color al historial
let color = valor > numeroSecreto ? '#ff6b6b' : valor < numeroSecreto ? '#4ecdc4' : '#00ff88';
historial.innerHTML += '<span class="guess-pill" style="background:' + color + '30; color:' + color + '">' + valor + '</span>';

  // Comparar con el número secreto
  if (valor === numeroSecreto) {
    actualizarMejorPuntaje();
    mostrarMensaje('🎉 ¡Correcto! Era el ' + numeroSecreto, '#00ff88');
    btnAdivinar.disabled = true;
    btnReiniciar.style.display = 'inline-block';
    // Celebración visual: la tarjeta brilla verde
    tarjeta.style.borderColor = '#00ff88';
    tarjeta.style.boxShadow = '0 0 40px rgba(0, 255, 136, 0.3)';
  } else if (valor > numeroSecreto) {
    let pista = obtenerPista(valor, numeroSecreto);
    mostrarMensaje('📈 Muy alto. ' + pista, '#ff009d');
  } else {
    let pista = obtenerPista(valor, numeroSecreto);
    mostrarMensaje('📉 Muy bajo. ' + pista, '#4ecdc4');
  }
  // --- Pista de cercanía ---
function obtenerPista(intento, secreto) {
  let diferencia = Math.abs(intento - secreto);

  if (diferencia <= 5) {
    return '🔥 ¡Muy cerca!';
  } else if (diferencia <= 15) {
    return '♨️ Caliente';
  } else if (diferencia <= 30) {
    return '🌤️ Tibio';
  } else {
    return '❄️ Frío';
  }
}

  // Limpiar input y enfocar
  inputIntento.value = '';
  inputIntento.focus();
}
btnAdivinar.addEventListener('click', verificarIntento);

inputIntento.addEventListener('keypress', function(evento) {
  if (evento.key === 'Enter') {
    verificarIntento();
  }
});

// --- Reiniciar juego ---
function reiniciarJuego() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  intentos = 0;
  historialIntentos = [];

  contador.textContent = 'Intentos: 0';
  historial.innerHTML = '';
  mostrarMensaje('🎯 ¡Nuevo juego! Adivina el número...', '#d9ff00');

  btnAdivinar.disabled = false;
  btnReiniciar.style.display = 'none';
  inputIntento.value = '';
  inputIntento.focus();

  // Resetear celebración visual
  tarjeta.style.borderColor = 'rgba(233, 69, 96, 0.3)';
  tarjeta.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';

  console.log('(DEBUG) Nuevo número secreto:', numeroSecreto);
}

// --- Conectar botón reiniciar ---
btnReiniciar.addEventListener('click', reiniciarJuego);

function verificarGameOver() {
  if (intentos >= MAX_INTENTOS && numeroSecreto !== Number(inputIntento.value)) {
    mostrarMensaje(`💀 Game Over. El número era ${numeroSecreto}`);
    bloquearJuego();
  }
}

function bloquearJuego() {
  inputIntento.disabled = true;
  btnAdivinar.disabled = true;
}

function actualizarMejorPuntaje() {
    if (mejorPuntaje === null || intentos < mejorPuntaje) {
        mejorPuntaje = intentos;
        document.getElementById("mejorPuntaje").textContent =
            `🏆 Mejor puntaje: ${mejorPuntaje}`;
    }
}