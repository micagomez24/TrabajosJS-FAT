// Función para determinar si un año es bisiesto
function esBisiesto(añio) {
    // Verificar si el año es divisible por 400 o (divisible por 4 y no divisible por 100)
    return (año % 400 === 0) || (año % 4 === 0 && año % 100 !== 0);
}

// Pedir el año al usuario
let año = parseInt(prompt("Introduce un año:"));

// Verificar si el año es bisiesto
if (esBisiesto(año)) {
    console.log("El año ingresado es bisiesto.");
} else {
    console.log("El año ingresado no es bisiesto.");
}
