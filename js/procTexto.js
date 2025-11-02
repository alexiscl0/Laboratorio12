function procesarTexto(texto){
    function limpiarEspacios(texto){
        let text=""
        for(let i=0; i<texto.length; i++){
            if(texto[i]!=" ")
                text+=texto[i]
        }
        return text
    }
    function contarPalabras(texto){
        let contador=1
        for(let i=0; i<texto.length; i++){
            if(texto[i]==" ")
                contador++
        }
        return contador
    } 
    console.log("La frase sin espacios: "+limpiarEspacios(texto))
    console.log("Tiene "+contarPalabras(texto)+" palabras")
}
let oracion=prompt("Ingrese una oracion")
console.log("La oracion ingresada es: "+oracion)
procesarTexto(oracion)
