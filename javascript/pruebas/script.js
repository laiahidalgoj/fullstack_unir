document.getElementById("sumar").addEventListener("click", calcularTotal);
document.getElementById("restar").addEventListener("click", calcularTotal);

function calcularTotal() {
    // Obtener todos los elementos con clase 'unidad' y 'precio'
    const unidades = document.querySelectorAll(".unidad");
    const precios = document.querySelectorAll(".precio");

    let totalUnidades = 0;
    let totalPrecio = 0;

    // Recorrer cada elemento y sumar los valores
    unidades.forEach((unidad, index) => {
        const cantidad = parseFloat(unidad.textContent) || 0;
        const precio = parseFloat(precios[index].textContent) || 0;

        totalUnidades += cantidad;
        totalPrecio += cantidad * precio;
    });

    // Actualizar los valores en el HTML
    document.getElementById("totalUnidades").textContent = totalUnidades;
    document.getElementById("totalPrecio").textContent = totalPrecio.toFixed(2);
}
