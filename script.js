// Variables globales
let productos = JSON.parse(localStorage.getItem("productos")) || [];

// Función para calcular el precio final con descuento
function calcularPrecio(precio, descuento) {
    return precio - (precio * descuento / 100);
}

// Función para agregar un producto
function agregarProducto() {
    const nombre = document.getElementById("producto").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const descuento = parseFloat(document.getElementById("descuento").value);

    if (!nombre || isNaN(precio) || isNaN(descuento)) {
        alert("Por favor, complete todos los campos correctamente.");
        return;
    }

    const precioFinal = calcularPrecio(precio, descuento);
    const producto = {
        nombre: nombre,
        precio: precio,
        descuento: descuento,
        precioFinal: precioFinal
    };

    productos.push(producto); // Agregar al array
    mostrarProductos();
    limpiarCampos();
}

// Función para mostrar los productos en la lista
function mostrarProductos() {
    const listaProductos = document.getElementById("listaProductos");
    listaProductos.innerHTML = ""; // Limpiar la lista

    productos.forEach((producto, index) => {
        const li = document.createElement("li");
        li.innerHTML = `Producto: ${producto.nombre}, Precio: $${producto.precio}, Descuento: ${producto.descuento}%, Precio Final: $${producto.precioFinal}`;
        listaProductos.appendChild(li);
    });
}

// Función para guardar en LocalStorage
function guardarProductos() {
    localStorage.setItem("productos", JSON.stringify(productos));
    alert("Productos guardados en LocalStorage.");
}

// Función para limpiar los productos guardados
function limpiarProductos() {
    productos = [];
    mostrarProductos();
    localStorage.removeItem("productos");
}

// Función para limpiar los campos del formulario
function limpiarCampos() {
    document.getElementById("producto").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("descuento").value = "";
}

// Eventos
document.getElementById("agregarProducto").addEventListener("click", agregarProducto);
document.getElementById("guardarProductos").addEventListener("click", guardarProductos);
document.getElementById("limpiarProductos").addEventListener("click", limpiarProductos);

// Mostrar los productos al cargar la página
mostrarProductos();
