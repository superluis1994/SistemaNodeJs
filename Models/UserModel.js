const db = require('../Config/db');

// Función para obtener todos los usuarios
const getAllUsers = (callback) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Función para obtener un usuario por su ID
const getUserById = (id, callback) => {
    db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results[0]);
    });
};

// Función para crear un nuevo usuario
const createUser = (userData, callback) => {
    db.query('INSERT INTO users SET ?', userData, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Función para actualizar un usuario por su ID
const updateUser = (id, userData, callback) => {
    db.query('UPDATE users SET ? WHERE id = ?', [userData, id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Función para eliminar un usuario por su ID
const deleteUser = (id, callback) => {
    db.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
