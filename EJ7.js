// Pedir el primer número al usuario
let numero1 = parseFloat(prompt("Introduce el primer número:"));

// Pedir el segundo número al usuario
let numero2 = parseFloat(prompt("Introduce el segundo número:"));

// Determinar cuál número es mayor
let mayor;

if (numero1 > numero2) {
    mayor = numero1;
} else if (numero2 > numero1) {
    mayor = numero2;
} else {
    mayor = "ambos números son iguales";
}

// Mostrar el resultado en la consola
console.log("El número mayor es: " + mayor);


// Mostrar el resultado en la consola
if (valido) {
    console.log("El triángulo es válido.");
} else {
    console.log("El triángulo no es válido.");
}
