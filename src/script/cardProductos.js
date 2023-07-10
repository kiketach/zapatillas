//Variable que mantiene el estado visible del carrito
let carritoVisible = false;

//Esperemos que todos los elementos de la pàgina cargen para ejecutar el script
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}
cargarProductos();
