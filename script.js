// Variables y constantes
const precioOriginal = 100; // Precio original del producto
let descuento = 0; // Descuento aplicado

// Función para calcular el precio final después del descuento
function calcularPrecioFinal(precio, descuento) {
    let precioFinal = precio - (precio * descuento / 100);
    return precioFinal;
}

// Interactuo con el usuario a través de prompts
descuento = parseFloat(prompt("Ingrese el porcentaje de descuento:"));
if (isNaN(descuento) || descuento < 0 || descuento > 100) {
    alert("Por favor, ingrese un valor de descuento válido entre 0 y 100.");
} else {
    let precioFinal = calcularPrecioFinal(precioOriginal, descuento);
    console.log("El precio original es: $" + precioOriginal);
    console.log("El descuento aplicado es: " + descuento + "%");
    console.log("El precio final después del descuento es: $" + precioFinal);
    alert("El precio final es: $" + precioFinal);
}