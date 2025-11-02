function ejecutarOperacion(fn,x,y){
    return fn(x,y)
}
function operacion(x,y){
    return x*y
}
let a=parseInt(prompt("Ingrese primer numero"))
let b=parseInt(prompt("Ingrese segundo numero"))
console.log("Primer numero: ", a," Segundo numero: ", b)
console(ejecutarOperacion(operacion,a,b))