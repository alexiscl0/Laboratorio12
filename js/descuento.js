function calcularDescuento(precio,porcentaje){
    return precio*porcentaje
}
let precio=parseInt(prompt("Ingrese precio"))
let porcentaje=parseFloat(prompt("Ingrese porcentaje"))
console.log("Precio ingresado: "+precio)
console.log("Porcentaje ingresado: "+porcentaje)
console.log("Descuento: "+calcularDescuento(precio,porcentaje))
