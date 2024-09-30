// Función para verificar si un triángulo es válido
function esTrianguloValido(angulo1, angulo2, angulo3) {
    // Verifica que la suma de los ángulos sea 180 grados
    return (angulo1 + angulo2 + angulo3 === 180);
}

// Pedir los ángulos del triángulo al usuario
let angulo1 = parseFloat(prompt("Introduce el primer ángulo en grados:"));
let angulo2 = parseFloat(prompt("Introduce el segundo ángulo en grados:"));
let angulo3 = parseFloat(prompt("Introduce el tercer ángulo en grados:"));

// Verificar si el triángulo es válido
let valido = esTrianguloValido(angulo1, angulo2, angulo3);

// Mostrar el resultado en la consola
if (valido) {
    console.log("El triángulo es válido.");
} else {
    console.log("El triángulo no es válido.");
}
