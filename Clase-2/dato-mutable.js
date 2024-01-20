// Tipo de dato complejo - Mutable
let usuario = {
  nombre: "Pepito",
  edad: 15,
};
usuario.edad = 20;
console.log(usuario);

// array (los arrays tienen un indice e inicia en el 0 que corresponde al primer elemento)
let frutas = ["manzana", "pera"];
frutas[0] = "sandia";
console.log(frutas);

// Función
function cambiarNombre(objeto) {
  objeto.nombre = "Nuevo nombre";
}

// Objeto
let persona = { nombre: "Oscar" };
cambiarNombre(persona);

console.log(persona);
