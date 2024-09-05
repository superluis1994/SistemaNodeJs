const UserModel = require('../Models/UserModel'); // Importa el modelo de usuario

// Controlador para obtener todos los usuarios
const getAllUsers = (req, res) => {
    UserModel.getAllUsers((err, users) => {
        if (err) {
            console.error('Error obteniendo usuarios:', err.stack);
            return res.status(500).send('Error en la base de datos');
        }
        res.render('users', { title: 'Usuarios', users, layout: false }); // Renderiza la vista con la lista de usuarios
    });
};

// Controlador para obtener un usuario por su ID
const getUserById = (req, res) => {
    const userId = req.params.id;
    UserModel.getUserById(userId, (err, user) => {
        if (err) {
            console.error('Error obteniendo el usuario:', err.stack);
            return res.status(500).send('Error en la base de datos');
        }
        res.render('user', { user }); // Renderiza la vista con los datos del usuario
    });
};

// Controlador para crear un nuevo usuario
const createUser = (req, res) => {
    const newUser = req.body;
    UserModel.createUser(newUser, (err, result) => {
        if (err) {
            console.error('Error creando usuario:', err.stack);
            return res.status(500).send('Error en la base de datos');
        }
        res.redirect('/users');
    });
};

// Controlador para actualizar un usuario por su ID
const updateUser = (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    UserModel.updateUser(userId, updatedUser, (err, result) => {
        if (err) {
            console.error('Error actualizando usuario:', err.stack);
            return res.status(500).send('Error en la base de datos');
        }
        res.redirect('/users');
    });
};

// Controlador para eliminar un usuario por su ID
const deleteUser = (req, res) => {
    const userId = req.params.id;
    UserModel.deleteUser(userId, (err, result) => {
        if (err) {
            console.error('Error eliminando usuario:', err.stack);
            return res.status(500).send('Error en la base de datos');
        }
        res.redirect('/users');
    });
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
