const productos = [
    {
        id:1,
        nombre: "Master 01",
        descripcion: "Material: Cuero",
        precio: 95000,
        imagen: "https://i.ibb.co/XS5x2cD/Master01.png",
        alt: "producto zapato",
        oferta: true
    },
    {
        id:2,
        nombre: "Master 02",
        descripcion: "Material: Cuero",
        precio: 95000,
        imagen: "https://i.ibb.co/fQmYdMT/10.png",
        alt: "producto zapato",
        oferta: true
    },
    {
        id:3,
        nombre: "Master 03",
        descripcion: "Material: Cuero",
        precio: 95000,
        imagen: "https://i.ibb.co/Pc0ZWY6/11.png",
        alt: "producto zapato",
        oferta: true
    },
    {
        id:4,
        nombre: "Master 04",
        descripcion: "Material: Cuero",
        precio: 95000,
        imagen: "https://i.ibb.co/6t1t6Pw/12.png",
        alt: "producto zapato",
        oferta: true
    },
    {
        id:5,
        nombre: "Master 05",
        descripcion: "Material: Cuero",
        precio: 95000,
        imagen: "https://i.ibb.co/SvFD5j5/13.png",
        alt: "producto zapato",
        oferta: true
    },
    {
        id:6,
        nombre: "Zapatilla",
        descripcion: "Zapatilla",
        precio: 48000,
        imagen: "https://cdn.shopify.com/s/files/1/0490/7496/2599/products/calzado-de-futbol-para-pasto-sintetico-turf-zoom-mercurial-vapor-15-academy-tf-fnf3kj_1024x1024.jpg?v=1668691032",
        alt: "producto zapato",
        oferta: true
    },
    {
        id:7,
        nombre: "Zapatilla",
        descripcion: "Zapatilla",
        precio: 65599,
        imagen: "https://tiendasbranchos.vteximg.com.br/arquivos/ids/461548-407-407/415830BLY_1.jpg?v=638120065032830000",
        alt: "producto zapato",
        oferta: false
    },
    {
        id:8,
        nombre: "Zapatilla",
        descripcion: "Zapatilla",
        precio: 154599,
        imagen: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nike-zapatillas-futbol-1564738054.jpg?resize=480:*",
        alt: "producto zapato",
        oferta: false
    },
    {
        id:9,
        nombre: "Zapatilla",
        descripcion: "Zapatilla",
        precio: 55299,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nxwNntjlTAFiccCoeoJLjOd89dVy--LpoQ&usqp=CAU",
        alt: "producto zapato",
        oferta: false
    },
    {
        id:10,
        nombre: "Zapatilla",
        descripcion: "Zapatilla",
        precio: 105199,
        imagen: "https://falabella.scene7.com/is/image/FalabellaPE/19064728_1?wid=800&hei=800&qlt=70",
        alt: "producto zapato",
        oferta: false
    },
    {
        id:11,
        nombre: "Zapatilla model",
        descripcion: "Running",
        precio: 250000,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPENv9p7VxiFEituW7aQlII-nfKKJaRDv04w&usqp=CAU",
        alt: "producto zapato",
        oferta: false
    },
    {
        id:12,
        nombre: "Zapatilla",
        descripcion: "Running",
        precio: 12599,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXmD6Mt1AZREnwBsm86Oe8JxGEEmJq7qpkgHZ7M6QV9z6oOSadP-qxaps-LBt62sEhkuc&usqp=CAU",
        alt: "producto zapato",
        oferta: false
    },
    {
        id:13,
        nombre: "Zapatilla",
        descripcion: "Zapatilla",
        precio: 65599,
        imagen: "https://media.revistagq.com/photos/5ca5e383f552a13ef832b97f/master/w_1200,h_800,c_limit/zapatillas_botas_futbol_moda_tendencias_212251918.jpg",
        alt: "producto zapato",
        oferta: false
    },
    {
        id:14,
        nombre: "Zapatilla",
        descripcion: "Running",
        precio: 355222,
        imagen: "https://tiendavirtualfairplay.com/12201-large_default/zapatillas-futbol-adidas-nino-copa-204-tf.jpg",
        alt: "producto zapato",
        oferta: false
    },
    {
        id:15,
        nombre: "Zapatilla",
        descripcion: "Zapatilla",
        precio: 78900,
        imagen: "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202302/01/00117726110244____9__640x640.jpg",
        alt: "producto zapato",
        oferta: false
    },
    {
        id:16,
        nombre: "Zapatilla",
        descripcion: "Zapatilla",
        precio: 48000,
        imagen: "https://cdn.shopify.com/s/files/1/0490/7496/2599/products/calzado-de-futbol-para-pasto-sintetico-turf-zoom-mercurial-vapor-15-academy-tf-fnf3kj_1024x1024.jpg?v=1668691032",
        alt: "producto zapato",
        oferta: false
    },
    {
        id:17,
        nombre: "Zapatilla",
        descripcion: "Zapatilla",
        precio: 65599,
        imagen: "https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-cencosud-master-catalog/default/dw75f3a10d/images/imagenes-productos/667/233150-0450-002.jpg?sw=320&sh=409&sm=fit",
        alt: "producto zapato",
        oferta: false
    },
    {
        id:18,
        nombre: "Zapatilla",
        descripcion: "Zapatilla",
        precio: 154599,
        imagen: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nike-zapatillas-futbol-1564738054.jpg?resize=480:*",
        alt: "producto zapato",
        oferta: false
    },
    {
        id:19,
        nombre: "Zapatilla",
        descripcion: "Zapatilla",
        precio: 55299,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nxwNntjlTAFiccCoeoJLjOd89dVy--LpoQ&usqp=CAU",
        alt: "producto zapato",
        oferta: false
    },
    {
        id:20,
        nombre: "Zapatilla",
        descripcion: "Zapatilla",
        precio: 105199,
        imagen: "https://falabella.scene7.com/is/image/FalabellaPE/19064728_1?wid=800&hei=800&qlt=70",
        alt: "producto zapato",
        oferta: false
    }
];