// Función para determinar la categoría de edad
function categorizarEdad(edad) {
    if (edad < 13) {
        return "Es un niño";
    } else if (edad >= 13 && edad <= 17) {
        return "Es un adolescente";
    } else if (edad >= 18 && edad <= 110) {
        return "Es un adulto";
    } else {
        return "No es una edad válida";
    }
}

// Pedir la edad al usuario
let edad = parseInt(prompt("Introduce tu edad:"));

// Verificar si la entrada es un número y es válida
if (isNaN(edad) || edad < 0) {
    console.log("No es una edad válida");
} else {
    // Determinar la categoría y mostrar el resultado en la consola
    let categoria = categorizarEdad(edad);
    console.log(categoria);
}
