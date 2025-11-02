function descargarArchivo(url,callback){
    console.log("Descargando...")
    callback(url)
}
let url=prompt("Ingresar url")
descargarArchivo(url,url=> console.log(`Descarga completada de [${url}]`))
