function potencia(base, exponente) {
  if (exponente === 0) {
    return 1
  }
  return base * potencia(base, exponente - 1)
}

let base = parseFloat(prompt("Ingrese la base:"))
let exp = parseInt(prompt("Ingrese el exponente:"))
console.log("Base ingresada:", base)
console.log("Exponente ingresado:", exp)

let resultado = potencia(base, exp)
console.log(`Resultado: ${base} elevado a ${exp} = ${resultado}`)
