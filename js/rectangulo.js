let base = parseFloat(prompt("Ingrese la base del rectángulo: "));
let altura = parseFloat(prompt("Ingrese la altura del rectángulo: "));

console.log("Base ingresada: " + base);
console.log("Altura ingresada: " + altura);

// Función declarada
function areaRectangulo(base, altura) {
  return base * altura;
}

let area = areaRectangulo(base, altura);

console.log("El área del rectángulo es: " + area);
