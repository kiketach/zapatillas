const express = require("express");
const mysql = require("mysql");
const app = express();
const path = require('path');
const bcrypt = require('bcrypt');
const saltRounds = 10;
let connexion = mysql.createConnection({
    host: "localhost",
    database: "bd_registrousuarios",
    user: "root",
    password: ""
});
app.set("view engine", "ejs");
app.use(express.json());
app.use('/src', express.static('src'));
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views")); // Asegúrate de que las vistas se carguen desde la carpeta "views"
app.set("view engine", "ejs");
app.get("/", function(req, res) {
    res.render("registro");
});
app.post("/validar", function(req, res) {
    const datos = req.body;
    let nombre = datos.name1;
    let correo = datos.email1;
    let contrasena = datos.password1;
    let buscar = "SELECT * FROM logueo WHERE email = ?";
    connexion.query(buscar, [correo], function(error, rows) {
        if (error) {
            console.error("Error en la consulta:", error);
            return res.status(500).send("Error en la base de datos");
        }
        if (rows.length > 0) {
            const errorMessage = "El usuario ya existe";
            return res.render("registro", { errorMessage });
        } else {
            bcrypt.hash(contrasena, saltRounds, function(err, hash) {
                if (err) {
                    console.error("Error al crear hash:", err);
                    return res.status(500).send("Error interno");
                }
                let registrar = "INSERT INTO logueo (name, email, password) VALUES (?, ?, ?)";
                connexion.query(registrar, [nombre, correo, hash], function(error) {
                    if (error) {
                        console.error("Error al registrar:", error);
                        return res.status(500).send("Error en la base de datos");
                    }
                    const successMessage = "Datos almacenados correctamente";
                    return res.render("registro", { successMessage });
                });
            });
        }
    });
});
app.get("/inicio-sesion", function(req, res) {
    res.render("iniciosesion");
});
app.post("/login", function(req, res) {
    const correo = req.body.email;
    const contrasena = req.body.password;
    let buscarUsuario = "SELECT * FROM logueo WHERE email = ?";
    connexion.query(buscarUsuario, [correo], function(error, rows) {
        if (error) {
            console.error("Error en la consulta:", error);
            return res.status(500).send("Error en la base de datos");
        }
        if (rows.length > 0) {
            const storedHash = rows[0].password;
            bcrypt.compare(contrasena, storedHash, function(err, result) {
                if (err) {
                    console.error("Error al comparar hashes:", err);
                    return res.status(500).send("Error interno");
                }
                if (result) {
                    const successMessage = "Inicio de sesión exitoso";
                    return res.render("iniciosesion", { successMessage });
                } else {
                    const errorMessage = "Contraseña incorrecta";
                    return res.render("iniciosesion", { errorMessage });
                }
            });
        } else {
            const errorMessage = "Usuario no encontrado";
            return res.render("iniciosesion", { errorMessage });
        }
    });
});
app.listen(3005, function() {
    console.log('Server is running on port 3005');
});

