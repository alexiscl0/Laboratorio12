const esPositivo= numero=> numero>0? "Es positivo":"Es negativo";
let numero=parseInt(prompt("Ingrese numero"))
console.log("Numero ingresado: "+numero)
console.log(esPositivo(numero))
