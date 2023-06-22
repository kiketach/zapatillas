const shopContent = document.getElementById("contenedor-productos");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
let carrito = [];

productos.forEach((product)=>{
    let content = document.createElement("div");
    content.className="card";
    content.innerHTML =`
    <img src="${product.imagen}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio}$</p>
    `;
    shopContent.append(content);
    let comprar = document.createElement("button")
    comprar.innerText = "Comprar";
    comprar.className = "comprar"
    content.append(comprar);

    comprar.addEventListener('click', ()=>{
        //sumar cantidades de los productos al elegir repetidas veces

        const repeat = carrito.some((repeatProduct)=>repeatProduct.id === product.id);
        console.log(repeat);

        if(repeat){
            carrito.map((prod)=>{
                if(prod.id === product.id){
                    prod.cantidad++;
                }
            });

        }else{
            carrito.push({
                id : product.id,
                imagen: product.imagen,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
            });
        }
        console.log(carrito)
    });
});

//construccion de del carrito

const pintarCarrito  = () => {
    modalContainer.innerHTML="";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className ="modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito</h1>`;
    modalContainer.append(modalHeader);
    const modalbutton = document.createElement("h1");
    modalbutton.innerText= "X";//boton cerrar ventana
    modalbutton.className="modal-header-button";

    modalbutton.addEventListener("click",()=>{
        modalContainer.style.display = "none"
    })

    modalHeader.append(modalbutton);
//campo donde se mostrara el producto seleccionado
    carrito.forEach((product)=>{
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content"
        carritoContent.innerHTML=`
        <img src="${product.imagen}">
        <h3>${product.nombre}</h3>
        <p>${product.precio} $</p>
        <p> cantidad: ${product.cantidad}</p>
        `;
        modalContainer.append(carritoContent);
        //elemento de borrar un producto
        //se crea el boton
        let eliminar = document.createElement("span");
        eliminar.innerText = "❌";
        eliminar.className = "delete-product";
        carritoContent.append(eliminar);
        eliminar.addEventListener("click", eliminarProducto);
    });
    //total a pagar
    const total = carrito.reduce((acc, el) => acc + el.precio, 0);
    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML= `total a pagar: ${total} $`;
    modalContainer.append(totalBuying);
};
verCarrito.addEventListener("click",pintarCarrito);
//funcion que elimina el id
const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id); 
    carrito = carrito.filter((carritoId) => {
      return carritoId.id !== foundId;
    });
    pintarCarrito();
  };