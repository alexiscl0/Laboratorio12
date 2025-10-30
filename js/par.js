
let numero = parseInt(prompt("Ingrese un número para verificar si es par: "));
console.log("Número ingresado: " + numero);

// Función declarada
function esPar(numero) {
  return numero % 2 === 0;
}

let resultado = esPar(numero);

if (resultado) {
  console.log(numero + " es par");
} 
else {
  console.log(numero + " no es par");
}
