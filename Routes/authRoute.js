const express = require('express');
const router = express.Router();
const { check } = require('express-validator'); 
const AuthController = require('../Controllers/AuthController');

// Ruta para la página de inicio de sesión (sign-in)
router.get('/sign-in', AuthController.SignIn);
router.get('/sign-up', AuthController.SignUp);
// router.get('/validate', AuthController.);
// Ruta para manejar la autenticación del usuario con validaciones
router.post('/sign-int',
    [
        check('email').isEmail().withMessage('Debe proporcionar un correo electrónico válido'),
        check('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
    ],
    AuthController.SignUp
);
module.exports = router;
