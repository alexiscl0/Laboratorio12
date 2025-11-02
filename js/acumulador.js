const acumulador = (valorInicial) => {
  let total = valorInicial;  

  return (valor) => {
    total += valor;
    return total;
  };
};

let inicioAcum = parseFloat(prompt("Ingrese el valor inicial del acumulador:"));
console.log("Valor inicial ingresado:", inicioAcum);

const acum = acumulador(inicioAcum);

let val1 = parseFloat(prompt("Ingrese un valor para sumar:"));
console.log("Suma:", val1, " Nuevo total:", acum(val1));

let val2 = parseFloat(prompt("Ingrese otro valor para sumar:"));
console.log("Suma:", val2, "Nuevo total:", acum(val2));
