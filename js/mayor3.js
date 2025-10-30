// Función declarada
function mayorDeTres(a, b, c) {
  return Math.max(a, b, c);
}

let n1 = parseFloat(prompt("Ingrese el primer numero: "));
let n2 = parseFloat(prompt("Ingrese el segundo numero: "));
let n3 = parseFloat(prompt("Ingrese el tercer numero: "));

console.log("Numeros ingresados: ", n1, n2, n3);

let mayor = mayorDeTres(n1, n2, n3);

console.log("El mayor número es: " + mayor);
