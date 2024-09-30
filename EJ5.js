// Función para convertir Fahrenheit a Celsius
function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Pedir la temperatura en Fahrenheit al usuario
let tempFahrenheit = parseFloat(prompt("Introduce la temperatura en grados Fahrenheit:"));

// Convertir la temperatura a Celsius utilizando la función
let tempCelsius = fahrenheitACelsius(tempFahrenheit);

// Mostrar el resultado en la consola
console.log("La temperatura en grados Celsius es: " + tempCelsius.toFixed(2));

