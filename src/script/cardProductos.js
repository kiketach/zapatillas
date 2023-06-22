const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos() {

    contenedorProductos.innerHTML = "";

    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.alt}">
            <div class="producto-detalles">
                <p class="producto-precio1">${producto.precio}</p>
                <h3 class="producto-titulo">${producto.nombre}</h3>
                <p class="producto-precio">${producto.descripcion}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        contenedorProductos.append(div);
    });

    actualizarBotonesAgregar();
}
cargarProductos();