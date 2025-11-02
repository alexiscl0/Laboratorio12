const mostrarDatos = (nombre, edad, ...hobbies) => {
  console.log("Nombre:", nombre);
  console.log("Edad:", edad);
  console.log("Hobbies:", hobbies);
}

let nom = prompt("Ingrese su nombre:");
let edad = prompt("Ingrese su edad:");

let cantH = parseInt(prompt("¿Cuántos hobbies ingresará?"));
let hList = [];

for (let i = 0; i < cantH; i++) {
  let hob = prompt(`Ingrese hobby #${i + 1}:`);
  hList.push(hob);
}

console.log("Datos ingresados:");
mostrarDatos(nom, edad, ...hList);
