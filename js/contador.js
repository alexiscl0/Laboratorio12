const crearContador = (valorInicial) => {
  let contador = valorInicial;
  const incrementar = () => ++contador;
  const resetear = () => contador = valorInicial;
  return { incrementar, resetear };
};

let inicio = parseInt(prompt("Ingrese el valor inicial del contador:"));
console.log("Valor inicial ingresado:", inicio);

const contador = crearContador(inicio);

console.log("Incrementando:", contador.incrementar())
console.log("Incrementando:", contador.incrementar())
console.log("Reiniciando contador")
console.log("Valor reseteado:", contador.resetear())
console.log("Incrementando:", contador.incrementar())
