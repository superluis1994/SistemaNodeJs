
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const morgan = require('morgan');
const helmet = require('helmet');
const expressLayouts = require('express-ejs-layouts');
// const logger = require('./Middlewares/logger');

app.use(morgan('dev'));
app.use(helmet());
// app.use(logger);

// Middleware para parsear cuerpos de solicitud
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configura el motor de plantillas como 'ejs'
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Views'));
app.use(expressLayouts); // Usa express-ejs-layouts

// Middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'Public')));

// Usa el middleware logger

// Importa las rutas
const indexRoutes = require('./Routes/index');

// Usa las rutas
app.use('/', indexRoutes);

// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('corriendo en el puerto 3000');
});
