<<<<<<< HEAD
const contenedorProductos = document.getElementById('contenedor-productos');
const carrito = [];
function productosCarga(){
    
=======
const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos() {

    contenedorProductos.innerHTML = "";

>>>>>>> main
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.alt}">
            <div class="producto-detalles">
<<<<<<< HEAD
                <p class="producto-precio1">${producto.precio}</p>  
=======
                <p class="producto-precio1">${producto.precio}</p>
>>>>>>> main
                <h3 class="producto-titulo">${producto.nombre}</h3>
                <p class="producto-precio">${producto.descripcion}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        contenedorProductos.append(div);
    });

<<<<<<< HEAD
}
productosCarga();
=======
    actualizarBotonesAgregar();
}
cargarProductos();
>>>>>>> main
