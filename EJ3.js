// Función para verificar si un número es divisible por 5
function esDivisiblePor5(numero) {
    return numero % 5 === 0;
}
// Pedir un número al usuario
let numero = parseFloat(prompt("Introduce un número:"));

// Verificar si el número es divisible por 5
let divisible = esDivisiblePor5(numero);

// Mostrar el resultado en la consola
if (divisible) {
    console.log("El número " + numero + " es divisible por 5.");
} else {
    console.log("El número " + numero + " no es divisible por 5.");
}
