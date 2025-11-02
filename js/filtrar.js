function filtrarArreglo(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) == true) {
      newArr.push(arr[i]);
    }
  }
  newArr.forEach(f => console.log(f));
}

let num = [];
let cantidad = parseInt(prompt("¿Cuantos números ingresará?"));
for (let i = 0; i < cantidad; i++) {
  let numero = parseInt(prompt(`Ingrese número #${i+1}`))
  num.push(numero);
}

filtrarArreglo(num, n => n > 0 ? true : false);
