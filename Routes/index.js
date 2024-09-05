const express = require('express');
const router = express.Router();
const indexController = require('../Controllers/indexController');
const userRoutes = require('./userRoutes'); // Importa las rutas de usuario
const authRoutes = require('./authRoute'); // Importa las rutas de autenticación

// Ruta de la página principal
router.get('/', indexController.renderIndex);

// Usa las rutas de autenticación con el prefijo '/auth'
router.use('/auth', authRoutes);

// Usa las rutas de usuario con el prefijo '/users'
router.use('/users', userRoutes);

module.exports = router;
