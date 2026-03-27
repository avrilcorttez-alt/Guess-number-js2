console.log("Hola soy Avril!!!!!!");


let nombre="Avril";
let edad= 18;
let estaAprendiendo= true;

console.log("Me llamo ", nombre);
console.log("Tengo ", edad, "años de edad" );
console.log("Es ", estaAprendiendo);

console.log(typeof nombre);
console.log(typeof edad);
console.log(estaAprendiendo);


const curso="CODE 101";
const maxIntentos= 10;
console.log("Estoy en el ", curso)
console.log("La cantidad máxima de intentos es", maxIntentos)

let nombreUsuario = prompt('¿Cómo te llamas?');
let miEdad=prompt("Escribe tu edad");
console.log("Mi nombre es ", nombreUsuario);
console.log("Mi edad es ", miEdad)
console.log("El tipo de dato que nos da prompt es "+typeof nombreUsuario);
console.log("El tipo de dato que nos da prompt es "+typeof miEdad);
alert("Bienvenidos al cuntiest sitioweb");

let Edad = prompt("¿Cuántos años tienes?");
edad = Number(Edad);

if (edad >= 18) {
  alert("Puedes votar 🗳️");
} else {
  alert("Aún no puedes votar 🧒");
}

let temperatura = Number(prompt("¿Qué temperatura hace hoy?"));

if (temperatura < 15) {
  alert("Hace frío, ponte abrigo 🧥");
} else if (temperatura <= 25) {
  alert("Clima templado, usa casaca ligera 🧢");
} else {
  alert("Hace calor, usa polo y gorra ☀️");
}

let clave = prompt("Crea una contraseña:");
if (clave.length >= 6) {
  alert("Contraseña válida ✅");
} else {
  alert("Contraseña muy corta ❌");
}

if (edad < 13) {
  alert("Eres un niño 🧒");
} else if (edad <= 17) {
  alert("Eres un adolescente 👦");
} else {
  alert("Eres un adulto 👨‍🦱");
}

if (edad > 18 && temperatura < 15) {
  alert("Adulto con frío: lleva abrigo extra 🧣");
}

if (edad  < 18 && temperatura > 25) {
  alert("Niño con calor: usa ropa ligera 🧢");
}


let a = 7;
let b = 3;

console.log('Suma:', a + b);       
console.log('Resta:', a - b);
console.log("Potenciación:", a ** b);
console.log('Multiplicación:', a * b);
console.log('División:', a / b);
console.log('Módulo:', a % b);



let saludo1 = 'Hola ' + nombreUsuario + ', tienes ' + edadUsuario + ' años.';
console.log(saludo1);
let saludo2 = `Hi ${nombreUsuario}, you are ${miEdad} years old.`;
console.log(saludo2);

let anioActual =2026;
let anioNacimiento = anioActual - Number(edadUsuario);

console.log(`Hola ${nombreUsuario}, naciste aproximadamente en ${anioNacimiento}`);

