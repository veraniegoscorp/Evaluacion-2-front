let carrito = [];
let total = 0;

function agregarAlCarro(nombre, precio) {
    // 1. Mostrar la sección del carrito si estaba oculta
    document.getElementById('seccion-carrito').style.display = 'block';

    // 2. Guardar el café en nuestra lista
    carrito.push({ nombre: nombre, precio: precio });
    
    // 3. Sumar al total
    total += precio;

    // 4. Actualizar la vista
    actualizarInterfaz();
}

function actualizarInterfaz() {
    const lista = document.getElementById('lista-items');
    const totalTxt = document.getElementById('precio-total');

    // Limpiamos la lista para no repetir elementos
    lista.innerHTML = "";

    // Dibujamos cada café en el carrito
    carrito.forEach((item) => {
        const li = document.createElement('li');
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `${item.nombre} <span>$${item.precio}</span>`;
        lista.appendChild(li);
    });

    // Actualizamos el número del total
    totalTxt.innerText = total;
}

function finalizarCompra() {

    // 1. Mostrar mensaje de éxito con el total
    alert(`¡Pedido realizado con éxito!\nTotal a pagar: $${total}\nGracias por tu compra en rats cafe.`);

    // 2. Reiniciar las variables
    carrito = [];
    total = 0;

    // 3. Actualizar la interfaz (para que se limpie la lista)
    actualizarInterfaz();

    // 4. Ocultar el carrito de nuevo
    document.getElementById('seccion-carrito').style.display = 'none';
}
