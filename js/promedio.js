function promedio(a,b,c){
    return (a+b+c)/3
}  
let x=parseInt(prompt("Ingrese primer numero"))
let y=parseInt(prompt("Ingrese segundo numero"))
let z=parseInt(prompt("Ingrese tercer numero"))
console.log("EL primer numero ingresado: "+ x)
console.log("EL segundo numero ingresado: "+ y)
console.log("EL tercer numero ingresado: "+ z)
console.log("El promedio es: ", promedio(x,y,z))
