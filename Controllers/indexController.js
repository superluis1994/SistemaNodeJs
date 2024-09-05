
const UserModel = require('../Models/UserModel');
const renderIndex = (req, res) => {
    res.render('index', { title: 'Inicio', layout: 'Partials/Dashboard.ejs' }); // Asegúrate de que 'index.ejs' esté en tu carpeta de vistas
};

module.exports = {
    renderIndex,
}