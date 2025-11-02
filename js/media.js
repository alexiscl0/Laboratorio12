const media = (...numeros) => {
  let suma = 0;
  numeros.forEach(n => suma += n)
  return suma / numeros.length
}

let cantidad = parseInt(prompt("¿Cuántos números desea promediar?"))
let lista = []

for (let i = 0; i < cantidad; i++) {
  let num = parseFloat(prompt(`Ingrese número #${i + 1}:`))
  lista.push(num);
}

console.log("Números ingresados:", lista)
console.log("Promedio:", media(...lista))
