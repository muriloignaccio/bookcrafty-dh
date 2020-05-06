const routes = require('express').Router();

const UsuarioController = require('./controllers/UsuarioController');

routes.get('/', UsuarioController.index);
routes.get('/users/:id', UsuarioController.show)

module.exports = routes;