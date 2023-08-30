const express = require("express");
const mysql = require("mysql");
const app = express();
const path = require('path');
let connexion = mysql.createConnection({
    host: "localhost", //"127.0.0.1"
    database: "bd_registrousuarios",
    user: "root",
    password: ""
})
app.set("view engine","ejs");
app.use(express.json());
app.use('/src', express.static('src'));
app.use(express.urlencoded({extended:false}));
app.set("views", path.join(__dirname, "views")); // Asegúrate de que las vistas se carguen desde la carpeta "views"
app.set("view engine", "ejs");
app.get("/",function(req, res){
    res.render("registro");
});
app.post("/validar", function(req, res){
    const datos = req.body;
    let nombre= datos.name1;
    let correo = datos.email1;
    let contrasena = datos.password1;
    let buscar = "SELECT * FROM logueo WHERE email = ?";
    connexion.query(buscar, [correo], function(error, row) {
        if (error) {
            console.error("Error en la consulta:", error);
            return res.status(500).send("Error en la base de datos");
        }else{
            if(rows.length>0){
                const errorMessage = "El usuario ya existe";
                return res.render("registro", { errorMessage });
            }else{
                let registrar = "INSERT INTO logueo (name, email, password) VALUES ('"+nombre+"','"+correo+"','"+contrasena+"')"
                connexion.query(registrar, function(error){
                    if (error){
                        console.error("Error al registrar:", error);
                        return res.status(500).send("Error en la base de datos");
                    }else{
                        const successMessage = "Datos almacenados correctamente";
                        return res.render("registro", { successMessage });
                    }
                })
            }
        }
    });
    res.redirect("./src/pages/iniciarSesion.html"); // Redirigir después de realizar la operació
});
app.listen(3005, function(){
    console.log('server is running on port 3005');
})