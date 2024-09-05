const mysql = require('mysql2');
require('dotenv').config(); // Carga las variables de entorno desde el archivo .env

// Crea una conexión a la base de datos
const connection = mysql.createConnection({
    host: process.env.DB_HOST,       // Usa las variables de entorno
    user: process.env.DB_USER,       // Usa las variables de entorno
    password: process.env.DB_PASSWORD, // Usa las variables de entorno
    database: process.env.DB_NAME,   // Usa las variables de entorno
    port: process.env.DB_PORT        // Añade el puerto desde las variables de entorno
});

// Conecta a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err.stack);
        return;
    }
    console.log('Conectado a la base de datos MySQL como id ' + connection.threadId);
});

module.exports = connection;
