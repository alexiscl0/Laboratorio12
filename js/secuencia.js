const crearSecuencia = (inicio, paso) => {
  let actual = inicio;

  return () => {
    let valorActual = actual;
    actual += paso;
    return valorActual;
  };
};

let inicio = parseFloat(prompt("Ingrese el valor inicial de la secuencia:"));
let paso = parseFloat(prompt("Ingrese el valor del paso:"));
console.log("Valor inicial ingresado:", inicio);
console.log("Paso ingresado:", paso);

const secuencia = crearSecuencia(inicio, paso);

console.log("Primer valor:", secuencia());
console.log("Segundo valor:", secuencia());
console.log("Tercer valor:", secuencia());
console.log("Cuarto valor:", secuencia());
console.log("Quinto valor:", secuencia());
