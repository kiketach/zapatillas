const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

app.use(bodyParser.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin123",
    port: 3306,
    database: "hattrick_logueo",
});
db.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos');
});

app.post('/api/register', (req, res) => {
    const { name, email, password } = req.body;
    const sql = 'INSERT INTO usuarios (name, email, password) VALUES (?, ?, ?)';
    db.query(sql, [name, email, password], (err, result) => {
        if (err) {
            console.error('Error en el registro', err);
            res.json({ success: false });
            return;
        }
        console.log('Registro exitoso');
        res.json({ success: true });
    });
});

app.listen(3000, () => {
    console.log('Servidor en ejecución en el puerto 3000');
});

