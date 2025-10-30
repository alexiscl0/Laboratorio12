// Función declarada
function esMultiplo(a, b) {
  return a % b === 0;
}

let numA = parseInt(prompt("Ingrese el primer número: "));
let numB = parseInt(prompt("Ingrese el segundo número: "));

console.log("Numero A: " + numA);
console.log("Numero B: " + numB);

let mult = esMultiplo(numA, numB);

if (mult) {
  console.log(numA + " si es multiplo de " + numB);
}
else {
  console.log(numA + " no es multiplo de " + numB);
}
