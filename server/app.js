const express = require('express');
const app = express();
const { DBConnection } = require('../database/config');
const cors = require('cors');


// Lectura y parseo del body
app.use(express.json());

// CORS
app.use(cors());

// Base de datos
DBConnection();



// Rutas
app.use('/api/usuarios', require('../routes/usuarios'));
app.use('/api/auth', require('../routes/auth'));


app.listen(3000, () => {
    console.log('Escuchando el puerto 3000');
});