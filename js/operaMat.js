const operacionesMatematicas = () => {
  const sumar = (a, b) => a + b;
  const restar = (a, b) => a - b;
  const multiplicar = (a, b) => a * b;
  const dividir = (a, b) => b !== 0 ? a / b : "Error: división entre 0";

  return { sumar, restar, multiplicar, dividir };
};

const ops = operacionesMatematicas();

let x = parseFloat(prompt("Ingrese el primer número:"));
let y = parseFloat(prompt("Ingrese el segundo número:"));

console.log("Números ingresados:", x, y);
console.log("Suma:", ops.sumar(x, y));
console.log("Resta:", ops.restar(x, y));
console.log("Multiplicación:", ops.multiplicar(x, y));
