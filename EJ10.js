// Solicita un color al usuario
let color = prompt("Introduce un color (azul, rojo, verde, naranja, amarillo):").toLowerCase();

// Utiliza el statement switch para determinar el color en inglés
switch (color) {
    case "azul":
        console.log("blue");
        break;
    case "rojo":
        console.log("red");
        break;
    case "verde":
        console.log("green");
        break;
    case "naranja":
        console.log("orange");
        break;
    case "amarillo":
        console.log("yellow");
        break;
    default:
        console.log("Color not found");
        break;
}
