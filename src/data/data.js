const productos = [
    {
        id:1,
        nombre: "Zapatilla model",
        descripcion: "Running",
        precio: 250000,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPENv9p7VxiFEituW7aQlII-nfKKJaRDv04w&usqp=CAU",
        alt: "producto zapato"
    },
    {
        id:2,
        nombre: "Zapatilla",
        descripcion: "Running",
        precio: 12599,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXmD6Mt1AZREnwBsm86Oe8JxGEEmJq7qpkgHZ7M6QV9z6oOSadP-qxaps-LBt62sEhkuc&usqp=CAU",
        alt: "producto zapato"
    },
    {
        id:3,
        nombre: "Zapatilla",
        descripcion: "Zapatilla",
        precio: 65599,
        imagen: "https://media.revistagq.com/photos/5ca5e383f552a13ef832b97f/master/w_1200,h_800,c_limit/zapatillas_botas_futbol_moda_tendencias_212251918.jpg",
        alt: "producto zapato"
    },
    {
        id:4,
        nombre: "Zapatilla",
        descripcion: "Running",
        precio: 355222,
        imagen: "https://tiendavirtualfairplay.com/12201-large_default/zapatillas-futbol-adidas-nino-copa-204-tf.jpg",
        alt: "producto zapato"
    },
    {
        id:5,
        nombre: "Zapatilla",
        descripcion: "Zapatilla",
        precio: 78900,
        imagen: "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202302/01/00117726110244____9__640x640.jpg",
        alt: "producto zapato"
    },
    {
        id:6,
        nombre: "Zapatilla",
        descripcion: "Zapatilla",
        precio: 48000,
        imagen: "https://cdn.shopify.com/s/files/1/0490/7496/2599/products/calzado-de-futbol-para-pasto-sintetico-turf-zoom-mercurial-vapor-15-academy-tf-fnf3kj_1024x1024.jpg?v=1668691032",
        alt: "producto zapato"
    },
    {
        id:7,
        nombre: "Zapatilla",
        descripcion: "Zapatilla",
        precio: 65599,
        imagen: "https://tiendasbranchos.vteximg.com.br/arquivos/ids/461548-407-407/415830BLY_1.jpg?v=638120065032830000",
        alt: "producto zapato"
    },
    {
        id:8,
        nombre: "Zapatilla",
        descripcion: "Zapatilla",
        precio: 154599,
        imagen: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nike-zapatillas-futbol-1564738054.jpg?resize=480:*",
        alt: "producto zapato"
    },
    {
        id:9,
        nombre: "Zapatilla",
        descripcion: "Zapatilla",
        precio: 55299,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nxwNntjlTAFiccCoeoJLjOd89dVy--LpoQ&usqp=CAU",
        alt: "producto zapato"
    },
    {
        id:10,
        nombre: "Zapatilla",
        descripcion: "Zapatilla",
        precio: 105199,
        imagen: "https://falabella.scene7.com/is/image/FalabellaPE/19064728_1?wid=800&hei=800&qlt=70",
        alt: "producto zapato"
    },
    {
        id:11,
        nombre: "Zapatilla model",
        descripcion: "Running",
        precio: 250000,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPENv9p7VxiFEituW7aQlII-nfKKJaRDv04w&usqp=CAU",
        alt: "producto zapato"
    },
    {
        id:12,
        nombre: "Zapatilla",
        descripcion: "Running",
        precio: 12599,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXmD6Mt1AZREnwBsm86Oe8JxGEEmJq7qpkgHZ7M6QV9z6oOSadP-qxaps-LBt62sEhkuc&usqp=CAU",
        alt: "producto zapato"
    },
    {
        id:13,
        nombre: "Zapatilla",
        descripcion: "Zapatilla",
        precio: 65599,
        imagen: "https://media.revistagq.com/photos/5ca5e383f552a13ef832b97f/master/w_1200,h_800,c_limit/zapatillas_botas_futbol_moda_tendencias_212251918.jpg",
        alt: "producto zapato"
    },
    {
        id:14,
        nombre: "Zapatilla",
        descripcion: "Running",
        precio: 355222,
        imagen: "https://tiendavirtualfairplay.com/12201-large_default/zapatillas-futbol-adidas-nino-copa-204-tf.jpg",
        alt: "producto zapato"
    },
    {
        id:15,
        nombre: "Zapatilla",
        descripcion: "Zapatilla",
        precio: 78900,
        imagen: "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202302/01/00117726110244____9__640x640.jpg",
        alt: "producto zapato"
    },
    {
        id:16,
        nombre: "Zapatilla",
        descripcion: "Zapatilla",
        precio: 48000,
        imagen: "https://cdn.shopify.com/s/files/1/0490/7496/2599/products/calzado-de-futbol-para-pasto-sintetico-turf-zoom-mercurial-vapor-15-academy-tf-fnf3kj_1024x1024.jpg?v=1668691032",
        alt: "producto zapato"
    },
    {
        id:17,
        nombre: "Zapatilla",
        descripcion: "Zapatilla",
        precio: 65599,
        imagen: "https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-cencosud-master-catalog/default/dw75f3a10d/images/imagenes-productos/667/233150-0450-002.jpg?sw=320&sh=409&sm=fit",
        alt: "producto zapato"
    },
    {
        id:18,
        nombre: "Zapatilla",
        descripcion: "Zapatilla",
        precio: 154599,
        imagen: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nike-zapatillas-futbol-1564738054.jpg?resize=480:*",
        alt: "producto zapato"
    },
    {
        id:19,
        nombre: "Zapatilla",
        descripcion: "Zapatilla",
        precio: 55299,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nxwNntjlTAFiccCoeoJLjOd89dVy--LpoQ&usqp=CAU",
        alt: "producto zapato"
    },
    {
        id:20,
        nombre: "Zapatilla",
        descripcion: "Zapatilla",
        precio: 105199,
        imagen: "https://falabella.scene7.com/is/image/FalabellaPE/19064728_1?wid=800&hei=800&qlt=70",
        alt: "producto zapato"
    }
];
const contenedorProductos = document.getElementById('contenedor-productos');
const carrito = [];
function productosCarga(){
    
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

}
productosCarga();