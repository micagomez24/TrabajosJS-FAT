// Pedir el primer string al usuario
let string1 = prompt("Introduce el primer string:");

// Pedir el segundo string al usuario
let string2 = prompt("Introduce el segundo string:");

// Comparar si ambos strings son iguales
let sonIguales = string1 === string2;

// Comparar si ambos strings tienen la misma longitud
let mismaLongitud = string1.length === string2.length;

// Mostrar los resultados en la consola
console.log("Los strings son iguales: " + sonIguales);
console.log("Los strings tienen la misma longitud: " + mismaLongitud);

